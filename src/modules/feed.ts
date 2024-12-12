import {
  _SERVICE as BackendActor,
  ContentViewPage,
  PagedQuery,
  PersonalizedFeedV1Parameters,
} from '../idl/dscvr.did';
import { Result } from '../types';
import { convertToErrorResult, convertToSuccessResult } from '../utils';

const MAX_COMMENT_DEPTH = 3;
const MAX_FOLLOWER_DEGREES = 3;

const DEFAULT_FEED_PARAMETERS: PersonalizedFeedV1Parameters = {
  max_comment_depth: 1n,
  upvote_weight: 80,
  include_top_users: [true],
  following_upvote_weight: 85,
  following_upvote_degree_penalty: 0.5,
  award_age_multiplier: [0.01],
  profile_posts_weight: [],
  following_comment_degree_penalty: 5,
  following_comment_weight: 250,
  include_portals: true,
  freshness_weight: [0.1],
  relevant_comment_count: 3,
  portal_admin_posts_weight: [],
  max_follower_degrees: 1n,
  show_caller_posts: [true],
  award_upvote_multiplier: [100n],
};

/**
 * Represents a module for managing the feed.
 */
export class FeedModule {
  constructor(public actor: BackendActor) {}

/**
 * Retrieves the personalized feed based on the given parameters and query.
 * 
 * @param {PersonalizedFeedV1Parameters} parameters - The parameters for the personalized feed.
 * @param {PagedQuery} query - The paged query for the personalized feed.
 * @returns {Promise<Result<ContentViewPage>>} A promise that resolves to a Result containing the ContentViewPage if successful, or an error Result if unsuccessful.
 */
  getFeed = async (
    parameters: PersonalizedFeedV1Parameters,
    query: PagedQuery,
  ): Promise<Result<ContentViewPage>> => {
    if (parameters.max_comment_depth > MAX_COMMENT_DEPTH) {
      return convertToErrorResult<ContentViewPage>(
        `Max comment depth should be less than or equal to ${MAX_COMMENT_DEPTH}`,
        {
          BadRequest: `Max comment depth should be less than or equal to ${MAX_COMMENT_DEPTH}`,
        },
        [],
      );
    }

    if (parameters.max_comment_depth < 0) {
      return convertToErrorResult<ContentViewPage>(
        'Max comment depth should be greater than or equal to 0',
        {
          BadRequest: 'Max comment depth should be greater than or equal to 0',
        },
        [],
      );
    }

    if (parameters.max_follower_degrees > MAX_FOLLOWER_DEGREES) {
      return convertToErrorResult<ContentViewPage>(
        `Max follower degrees should be less than or equal to ${MAX_FOLLOWER_DEGREES}`,
        {
          BadRequest: `Max follower degrees should be less than or equal to ${MAX_FOLLOWER_DEGREES}`,
        },
        [],
      );
    }

    if (parameters.max_follower_degrees < 0) {
      return convertToErrorResult<ContentViewPage>(
        'Max follower degrees should be greater than or equal to 0',
        {
          BadRequest:
            'Max follower degrees should be greater than or equal to 0',
        },
        [],
      );
    }

    const queryResult = await this.actor.personalized_feed_v1({
      parameters,
      query,
    });

    if ('Err' in queryResult) {
      return convertToErrorResult<ContentViewPage>(
        queryResult.Err,
        {
          BadRequest: queryResult.Err,
        },
        [],
      );
    } else if ('Ok' in queryResult) {
      return convertToSuccessResult<ContentViewPage>(queryResult.Ok);
    }
    return convertToErrorResult<ContentViewPage>(
      'Unknown error: Feed query',
      { BadRequest: 'Unknown error: Feed query' },
      [],
    );
  };

/**
 * Retrieves a feed of content sorted by newest.
 *
 * @param {bigint} pageSize - The number of items to retrieve per page.
 * @param {bigint} page - The page number to retrieve.
 * @returns {Promise<Result<ContentViewPage>>} A promise that resolves to a Result containing a ContentViewPage.
 */
  getNewFeed = async (
    pageSize: bigint,
    page: bigint,
  ): Promise<Result<ContentViewPage>> => {
    return this.getFeed(DEFAULT_FEED_PARAMETERS, {
      page,
      page_size: pageSize,
      sort: { New: null },
      lang: '',
      query: [],
      filter: '',
      chain_filter: [],
      max_age: [],
    });
  };

/**
 * Retrieves the feed sorted by hot with the specified page size and page number.
 * 
 * @param {bigint} pageSize - The number of items to retrieve per page.
 * @param {bigint} page - The page number to retrieve.
 * @returns {Promise<Result<ContentViewPage>>} A Promise that resolves to a Result containing the hot feed content.
 */
  getHotFeed = async (
    pageSize: bigint,
    page: bigint,
  ): Promise<Result<ContentViewPage>> => {
    return this.getFeed(DEFAULT_FEED_PARAMETERS, {
      page,
      page_size: pageSize,
      sort: { Hot: null },
      lang: '',
      query: [],
      filter: '',
      chain_filter: [],
      max_age: [],
    });
  }

/**
 * Retrieves feed sorted by top content based on the specified page size and page number.
 * 
 * @param {bigint} pageSize - The number of items to retrieve per page.
 * @param {bigint} page - The page number to retrieve.
 * @returns {Promise<Result<ContentViewPage>>} A promise that resolves to a Result containing the top feed content.
 */
  getTopFeed = async (
    pageSize: bigint,
    page: bigint,
  ): Promise<Result<ContentViewPage>> => {
    return this.getFeed(DEFAULT_FEED_PARAMETERS, {
      page,
      page_size: pageSize,
      sort: { Top: null },
      lang: '',
      query: [],
      filter: '',
      chain_filter: [],
      max_age: [],
    });
  }
}
