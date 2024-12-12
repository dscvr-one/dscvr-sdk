import {
  _SERVICE as BackendActor,
  ContentQuery,
  ContentReaction,
  ContentTreeViewPage,
  ContentView,
  ContentViewPage,
  CreateContent,
  PagedQuery,
  PollView,
} from '../idl/dscvr.did';
import { Reaction, Result } from '../types';
import {
  convertToErrorResult,
  convertToResult,
  convertToSuccessResult,
} from '../utils';


export const HTML_PREFIX = '‰HTML';

/**
 * Represents a module for managing content.
 */
export class ContentModule {
  constructor(public actor: BackendActor) {}

  /**
   * Retrieves the content with the specified content ID.
   *
   * @param {bigint} contetId - The ID of the content to retrieve.
   * @returns {Promise<Result<ContentView>>} A promise that resolves to a Result containing the ContentView.
   */
  getContent = async (contetId: bigint): Promise<Result<ContentView>> => {
    const queryResult = await this.actor.get_content(contetId);
    return convertToResult(queryResult);
  };

  /**
   * Creates a new content.
   *
   * @param {bigint} content - The content to create.
   * @returns {Promise<Result<ContentView>>} A promise that resolves to the result of the content creation.
   */
  createContent = async (
    content: CreateContent,
  ): Promise<Result<ContentView>> => {
    const queryResult = await this.actor.create_content(content);
    return convertToResult(queryResult);
  };

  /**
   * Creates a post to your profile.
   *
   * @param body - The content of the post.
   * @param isNSFW - Indicates whether the post is NSFW (Not Safe for Work). Default value is false.
   * @param tags - An optional array of tags associated with the post.
   * @param isHTML - Indicates whether the post is in HTML format. Default value is false.
   * @returns A promise that resolves to a Result object containing the created ContentView.
   */
  createSelfPost = async (
    body: string,
    isNSFW: boolean = false,
    tags?: string[],
    isHTML: boolean = false,
  ): Promise<Result<ContentView>> => {
    return await this.createContent({
      url: '',
      is_nsfw: isNSFW,
      title: '',
      portal_id: [],
      disable_comments: [false],
      body: isHTML ? `${HTML_PREFIX}${body}` : body,
      lang: 'api',
      poll: [],
      tags: tags || [],
      content_type: 'post',
      parent_id: [],
      icon_url: '',
    });
  };

  /**
   * Creates a post to your profile with a poll.
   * 
   * @param body - The body of the post.
   * @param pollDays - The number of days the poll will be active.
   * @param pollChoices - The choices for the poll.
   * @param isNSFW - Indicates if the post is NSFW (Not Safe for Work).
   * @param tags - Optional tags for the post.
   * @param isHTML - Indicates if the body is in HTML format.
   * @returns A Promise that resolves to a Result containing the created ContentView.
   */
  createSelfPostWithPoll = async (
    body: string,
    pollDays: bigint,
    pollChoices: string[],
    isNSFW: boolean = false,
    tags?: string[],
    isHTML: boolean = false,
  ): Promise<Result<ContentView>> => {
    return await this.createContent({
      url: '',
      is_nsfw: isNSFW,
      title: '',
      portal_id: [],
      disable_comments: [false],
      body: isHTML ? `${HTML_PREFIX}${body}` : body,
      lang: 'api',
      poll: [{
        days: pollDays,
        kind:  { 'Traditional' : null },
        choices: pollChoices
      }],
      tags: tags || [],
      content_type: 'post',
      parent_id: [],
      icon_url: '',
    });
  }

  /**
   * Creates a post in the specified portal.
   *
   * @param portalId - The ID of the portal where the post will be created.
   * @param body - The content of the post.
   * @param isNSFW - Indicates whether the post is NSFW (Not Safe for Work). Default value is false.
   * @param tags - An optional array of tags associated with the post.
   * @param isHTML - Indicates whether the post is in HTML format. Default value is false.
   * @returns A promise that resolves to a Result object containing the created ContentView.
   */
  createPost = async (
    portalId: bigint,
    body: string,
    isNSFW: boolean = false,
    tags?: string[],
    isHTML: boolean = false,
  ): Promise<Result<ContentView>> => {
    return await this.createContent({
      url: '',
      is_nsfw: isNSFW,
      title: '',
      portal_id: [portalId],
      disable_comments: [false],
      body: isHTML ? `${HTML_PREFIX}${body}` : body,
      lang: 'api',
      poll: [],
      tags: tags || [],
      content_type: 'post',
      parent_id: [],
      icon_url: '',
    });
  };

   /**
   * Creates a post with a poll.
   * 
   * @param portalId - The ID of the portal.
   * @param body - The body of the post.
   * @param pollDays - The number of days the poll will be active.
   * @param pollChoices - The choices for the poll.
   * @param isNSFW - Indicates if the post is NSFW (Not Safe for Work).
   * @param tags - Optional tags for the post.
   * @param isHTML - Indicates if the body is in HTML format.
   * @returns A Promise that resolves to a Result containing the created ContentView.
   */
  createPostWithPoll = async (
    portalId: bigint,
    body: string,
    pollDays: bigint,
    pollChoices: string[],
    isNSFW: boolean = false,
    tags?: string[],
    isHTML: boolean = false,
  ): Promise<Result<ContentView>> => {
    return await this.createContent({
      url: '',
      is_nsfw: isNSFW,
      title: '',
      portal_id: [portalId],
      disable_comments: [false],
      body: isHTML ? `${HTML_PREFIX}${body}` : body,
      lang: 'api',
      poll: [{
        days: pollDays,
        kind:  { 'Traditional' : null },
        choices: pollChoices
      }],
      tags: tags || [],
      content_type: 'post',
      parent_id: [],
      icon_url: '',
    });
  }

  /**
   * Creates a comment for a parent content.
   *
   * @param parentContentId - The ID of the parent content.
   * @param body - The body of the comment.
   * @param isNSFW - Indicates if the comment is NSFW (Not Safe for Work). Default is false.
   * @param tags - Optional tags for the comment.
   * @returns A Promise that resolves to a Result containing the created ContentView.
   */
  createComment = async (
    parentContentId: bigint,
    body: string,
    isNSFW: boolean = false,
    tags?: string[],
  ): Promise<Result<ContentView>> => {
    return await this.createContent({
      url: '',
      is_nsfw: isNSFW,
      title: '',
      portal_id: [],
      disable_comments: [false],
      body: body,
      lang: 'api',
      poll: [],
      tags: tags || [],
      content_type: 'comment',
      parent_id: [parentContentId],
      icon_url: '',
    });
  };

  /**
   * Updates the content with the specified contentId.
   *
   * @param {bigint} contentId - The ID of the content to update.
   * @param {string} body - The new body of the content.
   * @param {string[]} tags - The new tags for the content.
   * @param {boolean} disable_comments - Whether to disable comments for the content.
   * @param {boolean} isNSFW - Whether the content is NSFW (Not Safe for Work).
   * @returns {Promise<Result<ContentView>>} A promise that resolves to the updated content.
   */
  updateContent = async (
    contentId: bigint,
    body: string,
    tags: string[],
    disable_comments: boolean,
    isNSFW: boolean,
  ): Promise<Result<ContentView>> => {
    const queryResult = await this.actor.update_content(
      contentId,
      body,
      tags,
      [disable_comments],
      [isNSFW],
      [],
    );
    return convertToResult(queryResult);
  };

  /**
   * Deletes content with the specified contentId.
   *
   * @param {bigint} contentId - The ID of the content to be deleted.
   * @returns {Promise<Result<ContentView>>} A promise that resolves to the result of the deletion operation.
   */
  deleteContent = async (contentId: bigint): Promise<Result<ContentView>> => {
    const queryResult = await this.actor.delete_content(contentId);
    return convertToResult(queryResult);
  };

  /**
   * Pins or unpins the content with the specified contentId.
   *
   * @param {bigint} contentId - The ID of the content to be pinned or unpinned.
   * @param {boolean} isPinned - A boolean indicating whether the content should be pinned or unpinned.
   * @returns {Promise<Result<ContentView>>} A Promise that resolves to a Result containing the pinned or unpinned ContentView.
   */
  pinContent = async (
    contentId: bigint,
    isPinned: boolean,
  ): Promise<Result<ContentView>> => {
    const queryResult = await this.actor.content_pin_set(contentId, isPinned);
    return convertToResult(queryResult);
  };

  /**
   * Sets the NSFW (Not Safe for Work) flag for a specific content.
   *
   * @param {bigint} contentId - The ID of the content.
   * @param {boolean} isNSFW - A boolean indicating whether the content is NSFW.
   * @returns {Promise<Result<ContentView>>} A Promise that resolves to a Result containing the updated ContentView.
   */
  setNSFW = async (
    contentId: bigint,
    isNSFW: boolean,
  ): Promise<Result<ContentView>> => {
    const queryResult = await this.actor.content_nsfw_set(contentId, isNSFW);
    return convertToResult(queryResult);
  };

  /**
   * Reacts to a content by providing a reaction.
   *
   * @param {bigint} contentId - The ID of the content to react to.
   * @param {Reaction} reaction - The reaction to be applied to the content (optional).
   * @returns {Promise<Result<ContentView>>} A promise that resolves to a Result containing the updated ContentView.
   */
  reactToContent = async (
    contentId: bigint,
    reaction?: Reaction,
  ): Promise<Result<ContentView>> => {
    const queryResult = await this.actor.react_to_content(
      contentId,
      reaction ? [{ [reaction]: null } as ContentReaction] : [],
    );
    return convertToResult(queryResult);
  };

  /**
   * Retrieves the children of a content item based on the provided query.
   *
   * @param {ContentQuery} query - The query parameters for fetching the content children.
   * @returns {Promise<Result<ContentTreeViewPage>>} A promise that resolves to a Result containing the content tree view page.
   */
  getContentChildren = async (
    query: ContentQuery,
  ): Promise<Result<ContentTreeViewPage>> => {
    const queryResult = await this.actor.get_content_children_page(query);
    if ('Err' in queryResult) {
      return convertToErrorResult<ContentTreeViewPage>(
        'Error fetching content children',
        queryResult.Err.length > 0
          ? queryResult.Err[0]
          : { NotFound: 'Content not found' },
        [],
      );
    } else if ('Ok' in queryResult) {
      return convertToSuccessResult<ContentTreeViewPage>(queryResult.Ok);
    }
    return convertToErrorResult<ContentTreeViewPage>(
      'Error fetching content children',
      { NotFound: 'Content not found' },
      [],
    );
  };

  /**
   * Retrieves the user's content based on the provided username and query parameters.
   *
   * @param {string} username - The username of the user whose content is being retrieved.
   * @param {PagedQuery} query - The query parameters for pagination and filtering.
   * @returns {Promise<Result<ContentViewPage>>} A promise that resolves to a Result object containing the user's content.
   */
  getUserContent = async (
    username: string,
    query: PagedQuery,
  ): Promise<Result<ContentViewPage>> => {
    const queryResult = await this.actor.get_user_content(username, query);
    return convertToResult(queryResult);
  };

  /**
   * Casts a vote on a poll.
   *
   * @param {bigint} contentId - The ID of the content.
   * @param {bigint} choiceId - The ID of the choice.
   * @returns {Promise<Result<PollView>>} A promise that resolves to the result of the vote.
   */
  pollVote = async (
    contentId: bigint,
    choiceId: bigint,
  ): Promise<Result<PollView>> => {
    const queryResult = await this.actor.content_poll_vote(contentId, choiceId);
    if (queryResult.length == 0) {
      return convertToErrorResult<PollView>(
        'Error voting on poll',
        { NotFound: 'Content not found or choice not found' },
        [],
      );
    }
    return convertToSuccessResult<PollView>(queryResult[0]);
  };
}
