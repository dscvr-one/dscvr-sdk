import {
  _SERVICE as BackendActor,
  ContentQuery,
  ContentReaction,
  ContentTreeViewPage,
  ContentView,
  CreateContent,
} from '../idl/dscvr.did';
import { Reaction, Result } from '../types';
import {
  convertToErrorResult,
  convertToResult,
  convertToSuccessResult,
} from '../utils';

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
    )
  };
}
