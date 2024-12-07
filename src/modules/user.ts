import { Principal } from '@dfinity/principal';
import {
  _SERVICE as BackendActor,
  UserListPaged,
  UserSelfView,
  UserView,
} from '../idl/dscvr.did';
import {
  convertToErrorResult,
  convertToResult,
  convertToSuccessResult,
} from '../utils';

export class UserModule {
  constructor(public actor: BackendActor) {}

  getSelf = async () => {
    const queryResult = await this.actor.get_self();
    return convertToResult<UserSelfView>(queryResult);
  };

  getUserPortals = async (userId: Principal) => {
    const queryResult = await this.actor.get_user_portals(userId);
    return convertToSuccessResult(queryResult);
  };

  getPrinicaplByUsername = async (username: string) => {
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

  getUser = async (username: string) => {
    const queryResult = await this.actor.get_user(username);
    return convertToResult<UserView>(queryResult);
  };

  getUserByPrincipal = async (principal: Principal) => {
    const queryResult = await this.actor.get_user_by_principal(principal);
    return convertToResult<UserView>(queryResult);
  };

  removeFollower = async (userId: Principal) => {
    const queryResult = await this.actor.remove_follower(userId);
    return convertToResult(queryResult);
  };

  unfollowUser = async (userId: Principal) => {
    const queryResult = await this.actor.unfollow_user(userId);
    return convertToResult(queryResult);
  };

  followUser = async (userId: Principal) => {
    const queryResult = await this.actor.follow_user(userId);
    return convertToResult(queryResult);
  };

  getBlockedUsers = async (page: UserListPaged) => {
    const queryResult = await this.actor.get_user_blocked(page);
    return convertToSuccessResult(queryResult);
  };

  getUserFollowers = async (username: string, page: UserListPaged) => {
    const queryResult = await this.actor.get_user_followers(username, page);
    return convertToSuccessResult(queryResult);
  };

  getUserFollowing = async (username: string, page: UserListPaged) => {
    const queryResult = await this.actor.get_user_following(username, page);
    return convertToSuccessResult(queryResult);
  };

  isUserFollowing = async (userId: Principal) => {
    const queryResult = await this.actor.is_user_following(userId);
    return convertToSuccessResult(queryResult);
  };
}
