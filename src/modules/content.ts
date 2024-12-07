import {
  _SERVICE as BackendActor,
  ContentReaction,
  CreateContent,
} from '../idl/dscvr.did';
import {
  convertToResult,
} from '../utils';

export class ContentModule {
  constructor(public actor: BackendActor) {}

  getContent = async (contetId: bigint) => {
    const queryResult = await this.actor.get_content(contetId);
    return convertToResult(queryResult);
  };

  createContent = async (content: CreateContent) => {
    const queryResult = await this.actor.create_content(content);
    return convertToResult(queryResult);
  };

  updateContent = async (
    contentId: bigint,
    body: string,
    tags: string[],
    disable_comments: boolean,
    isNSFW: boolean,
  ) => {
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

  deleteContent = async (contentId: bigint) => {
    const queryResult = await this.actor.delete_content(contentId);
    return convertToResult(queryResult);
  };

  pinContent = async (contentId: bigint, isPinned: boolean) => {
    const queryResult = await this.actor.content_pin_set(contentId, isPinned);
    return convertToResult(queryResult);
  };

  reactToContent = async (contentId: bigint, reaction?: ContentReaction) => {
    const queryResult = await this.actor.react_to_content(
      contentId,
      reaction ? [reaction] : [],
    );
    return convertToResult(queryResult);
  };
}
