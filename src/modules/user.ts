import { Principal } from '@dfinity/principal';
import {
  _SERVICE as BackendActor,
  PortalView,
  SocialProfile,
  UserFollowPaged,
  UserListPaged,
  UserSearchQuery,
  UserSearchResult,
  UserSelfView,
  UserView,
} from '../idl/dscvr.did';
import {
  convertToErrorResult,
  convertToResult,
  convertToSuccessResult,
} from '../utils';
import { Result } from '../types';

/**
 * Represents a module for managing user-related operations.
 */
export class UserModule {
  constructor(public actor: BackendActor) {}

  /**
   * Retrieves the information of the current user.
   *
   * @returns {Promise<Result<UserSelfView>>} A promise that resolves to the user's information.
   */
  getSelf = async (): Promise<Result<UserSelfView>> => {
    const queryResult = await this.actor.get_self();
    return convertToResult<UserSelfView>(queryResult);
  };

  /**
   * Retrieves the self principal.
   *
   * @returns {Promise<Result<Principal>>} A promise that resolves to a Result containing the self principal.
   */
  getSelfPrincipal = async (): Promise<Result<Principal>> => {
    const queryResult = await this.actor.get_own_id();
    return convertToSuccessResult<Principal>(queryResult);
  };

  /**
   * Retrieves the portals associated with a user.
   *
   * @param {Principal} userId - The ID of the user.
   * @returns {Promise<Result<PortalView[]>>} A promise that resolves to the success result containing the user's portals.
   */
  getUserPortals = async (userId: Principal): Promise<Result<PortalView[]>> => {
    const queryResult = await this.actor.get_user_portals(userId);
    return convertToSuccessResult(queryResult);
  };

  /**
   * Retrieves the principal by username.
   *
   * @param {string} username - The username of the user.
   * @returns {Promise<Result<Principal>>} The result of the operation.
   */
  getPrinicaplByUsername = async (
    username: string,
  ): Promise<Result<Principal>> => {
    const queryResult = await this.actor.get_principal_for_user_name(username);
    if (queryResult.length === 0) {
      return convertToErrorResult<Principal>(
        'User not found',
        { NotFound: 'User not found' },
        [{ field: 'username', errors: ['User not found'] }],
      );
    } else {
      return convertToSuccessResult<Principal>(queryResult[0]);
    }
  };

  /**
   * Retrieves a user by their username.
   *
   * @param {string} username - The username of the user to retrieve.
   * @returns {Promise<Result<UserView>>} - A promise that resolves to the user's information.
   */
  getUser = async (username: string): Promise<Result<UserView>> => {
    const queryResult = await this.actor.get_user(username);
    return convertToResult<UserView>(queryResult);
  };

  /**
   * Retrieves a user by their principal.
   *
   * @param {Principal} userId - The principal of the user.
   * @returns {Promise<Result<UserView>>} - A promise that resolves to the user view.
   */
  getUserByPrincipal = async (
    userId: Principal,
  ): Promise<Result<UserView>> => {
    const queryResult = await this.actor.get_user_by_principal(userId);
    return convertToResult<UserView>(queryResult);
  };

  /**
   * Removes a follower from the user.
   *
   * @param {Principal} userId - The ID of the follower to be removed.
   * @returns {Promise<Result<UserView>>} - A promise that resolves to the result of the operation.
   */
  removeFollower = async (userId: Principal): Promise<Result<UserView>> => {
    const queryResult = await this.actor.remove_follower(userId);
    return convertToResult(queryResult);
  };

  /**
   * Unfollows a user.
   *
   * @param {Principal} userId - The ID of the user to unfollow.
   * @returns {Promise<Result<UserView>>} - A promise that resolves to the result of the unfollow operation.
   */
  unfollowUser = async (userId: Principal): Promise<Result<UserView>> => {
    const queryResult = await this.actor.unfollow_user(userId);
    return convertToResult(queryResult);
  };

  /**
   * Follows a user.
   *
   * @param {Principal} userId - The ID of the user to follow.
   * @returns {Promise<Result<UserView>>} A promise that resolves to the result of the follow operation.
   */
  followUser = async (userId: Principal): Promise<Result<UserView>> => {
    const queryResult = await this.actor.follow_user(userId);
    return convertToResult(queryResult);
  };

  /**
   * Toggle the follow status of a user.
   *
   * @param {Principal} userId - The ID of the user to follow.
   * @returns {Promise<Result<UserView>>} A promise that resolves to the result of the follow operation.
   */
  followUserToggle = async (userId: Principal): Promise<Result<UserView>> => {
    const queryResult = await this.actor.follow_user_toggle(userId);
    return convertToResult(queryResult);
  };

  /**
   * Retrieves a list of blocked users.
   *
   * @param {UserListPaged} query - The pagination information for the user list.
   * @returns {Promise<Result<UserFollowPaged>>} A promise that resolves to the success result of the query.
   */
  getBlockedUsers = async (
    query: UserListPaged,
  ): Promise<Result<UserFollowPaged>> => {
    const queryResult = await this.actor.get_user_blocked(query);
    return convertToSuccessResult(queryResult);
  };

  /**
   * Retrieves the followers of a user.
   *
   * @param {string} username - The username of the user.
   * @param {UserListPaged} query - The pagination information for the list of followers.
   * @returns {Promise<Result<UserFollowPaged>>} A promise that resolves to the success result of the query.
   */
  getUserFollowers = async (
    username: string,
    query: UserListPaged,
  ): Promise<Result<UserFollowPaged>> => {
    const queryResult = await this.actor.get_user_followers(username, query);
    return convertToSuccessResult(queryResult);
  };

  /**
   * Retrieves the list of users that the specified user is following.
   *
   * @param {string} username - The username of the user.
   * @param {UserListPaged} query - The pagination information for the user list.
   * @returns {Promise<Result<UserFollowPaged>>} A promise that resolves to the list of users the specified user is following.
   */
  getUserFollowing = async (
    username: string,
    query: UserListPaged,
  ): Promise<Result<UserFollowPaged>> => {
    const queryResult = await this.actor.get_user_following(username, query);
    return convertToSuccessResult(queryResult);
  };

  /**
   * Updates the user's bio.
   *
   * @param {string} bio - The new bio for the user.
   * @returns {Promise<Result<UserSelfView>>} A promise that resolves to the result of the update operation.
   */
  updateBio = async (bio: string): Promise<Result<UserSelfView>> => {
    const queryResult = await this.actor.user_set_profile_v2({ bio });
    if (queryResult.length === 0) {
      return convertToErrorResult<UserSelfView>(
        'User not found',
        { NotFound: 'User not found' },
        [{ field: 'username', errors: ['User not found'] }],
      );
    } else {
      return convertToSuccessResult<UserSelfView>(queryResult[0]);
    }
  };

  /**
   * Updates the avatar of the user.
   *
   * @param {string | undefined} avatarUri - The URI of the new avatar image. If not provided, the avatar will be removed.
   * @returns {Promise<Result<UserSelfView>>} A promise that resolves to the result of the update operation.
   */
  updateAvatar = async (avatarUri?: string): Promise<Result<UserSelfView>> => {
    const queryResult = await this.actor.user_set_profile_icon(
      avatarUri ? [{ Url: avatarUri }] : [],
    );
    if (queryResult.length === 0) {
      return convertToErrorResult<UserSelfView>(
        'User not found',
        { NotFound: 'User not found' },
        [{ field: 'username', errors: ['User not found'] }],
      );
    } else {
      return convertToSuccessResult<UserSelfView>(queryResult[0]);
    }
  };

  /**
   * Updates the cover photo of the user.
   *
   * @param {string | undefined} coverPhotoUri - The URI of the cover photo. If provided, the cover photo will be updated with the new URI. If not provided, the cover photo will be removed.
   * @returns {Promise<Result<UserSelfView>>} A promise that resolves to the result of the update operation.
   */
  updateCoverPhoto = async (
    coverPhotoUri?: string,
  ): Promise<Result<UserSelfView>> => {
    const queryResult = await this.actor.update_user_cover_photo(
      coverPhotoUri ? [coverPhotoUri] : [],
    );
    return convertToResult(queryResult);
  };

  /**
   * Updates the social links of the user.
   *
   * @param {SocialProfile[]} socialLinks - An array of social profiles containing the updated social links.
   * @returns {Promise<Result<UserSelfView>>} A promise that resolves to the result of the update operation.
   */
  updateSocialLinks = async (
    socialLinks: SocialProfile[],
  ): Promise<Result<UserSelfView>> => {
    const queryResult = await this.actor.update_social_presence(socialLinks);
    return convertToResult(queryResult);
  };

  /**
   * Updates the username of the user. Cost 50 DSCVR Points
   *
   * @param {string} username - The new username.
   * @returns {Promise<Result<UserSelfView>>} A promise that resolves to the result of the update operation.
   */
  updateUsername = async (username: string): Promise<Result<UserSelfView>> => {
    const queryResult = await this.actor.update_username({ username });
    return convertToResult(queryResult);
  };

  /**
   * Checks if a user is following another user.
   *
   * @param {Principal} userId - The ID of the user to check if they are being followed.
   * @returns {Promise<Result<boolean>>}  A promise that resolves to a success result indicating if the user is following or not.
   */
  isUserFollowing = async (userId: Principal): Promise<Result<boolean>> => {
    const queryResult = await this.actor.is_user_following(userId);
    return convertToSuccessResult(queryResult);
  };

  /**
   * Toggles the block status of a user.
   * 
   * @param {Principal} userId - The ID of the user to toggle the block status for.
   * @returns {Promise<Result<boolean>>} A promise that resolves to a Result<boolean> indicating the success of the operation.
   */
  blockUserToggle = async (userId: Principal): Promise<Result<boolean>> => {
    const queryResult = await this.actor.block_user_toggle(userId);
    if (queryResult.length === 0) {
      return convertToErrorResult<boolean>(
        'User not found',
        { NotFound: 'User not found' },
        [{ field: 'userId', errors: ['User not found'] }],
      );
    }
    return convertToSuccessResult(queryResult[0]);
  };

  /**
   * Finds a user based on the provided search query.
   * 
   * @param {UserSearchQuery} query - The search query used to find the user.
   * @returns {Promise<Result<UserSearchResult>>} A promise that resolves to a Result containing the search result.
   */
  findUser = async (query: UserSearchQuery): Promise<Result<UserSearchResult>> => {
    const queryResult = await this.actor.search_users(query);
    return convertToResult(queryResult);
  }
}
