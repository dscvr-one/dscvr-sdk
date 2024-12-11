import { Principal } from '@dfinity/principal';
import {
  _SERVICE as BackendActor,
  ContentViewPage,
  CreatePortal,
  CreatePortalRole,
  GetPortalMemberV2Result,
  MemberListItemView,
  MemberView,
  PagedQuery,
  PortalInfo,
  PortalMemberQuery,
  PortalMemberView,
  PortalRule,
  PortalView,
  RoleView,
  UpdatePortal,
  UpdatePortalRole,
} from '../idl/dscvr.did';
import {
  convertToErrorResult,
  convertToResult,
  convertToSuccessResult,
} from '../utils';
import { Result } from '../types';

/**
 * Represents a module for interacting with portals.
 */
export class PortalModule {
  constructor(public actor: BackendActor) {}

  /**
   * Retrieves a portal view based on the provided portal slug.
   *
   * @param {string} portalSlug - The slug or short name of the portal to retrieve.
   * @returns {Promise<Result<PortalView>>} A promise that resolves to a Result containing the PortalView.
   */
  getPortal = async (portalSlug: string): Promise<Result<PortalView>> => {
    const queryResult = await this.actor.get_portal(portalSlug);
    return convertToResult(queryResult);
  };

  /**
   * Retrieves portal views based on the provided portal slugs.
   *
   * @param {string[]} portalSlugs - An array of portal slugs.
   * @returns {Promise<Result<PortalView[]>>} A promise that resolves to a Result containing an array of PortalView objects.
   */
  getPortals = async (portalSlugs: string[]): Promise<Result<PortalView[]>> => {
    const queryResult = await this.actor.get_portals(portalSlugs);
    return convertToResult(queryResult);
  };

  /**
   * Retrieves information about a portal.
   *
   * @param {bigint} portalId - The ID of the portal to retrieve information for.
   * @returns {Promise<Result<PortalInfo>>} A promise that resolves to a Result containing the portal information.
   */
  getPortalInfo = async (portalId: bigint): Promise<Result<PortalInfo>> => {
    const queryResult = await this.actor.get_portal_info(portalId);
    if (queryResult.length === 0) {
      return convertToErrorResult<PortalInfo>(
        'Portal not found',
        { NotFound: 'Portal not found' },
        [{ field: 'portalId', errors: ['Portal not found'] }],
      );
    }
    return convertToSuccessResult<PortalInfo>(queryResult[0]);
  };

  /**
   * Creates a portal.
   *
   * @param {CreatePortal} portal - The portal to create.
   * @returns {Promise<Result<PortalView>>} A promise that resolves to a Result containing the created PortalView.
   */
  createPortal = async (portal: CreatePortal): Promise<Result<PortalView>> => {
    const queryResult = await this.actor.create_portal(portal);
    return convertToResult(queryResult);
  };

  /**
   * Updates a portal.
   *
   * @param {UpdatePortal} update - The update object containing the changes to be made.
   * @returns {Promise<Result<PortalView>>} A promise that resolves to a Result object containing the updated PortalView.
   */
  updatePortal = async (update: UpdatePortal): Promise<Result<PortalView>> => {
    const queryResult = await this.actor.update_portal(update);
    return convertToResult(queryResult);
  };

  /**
   * Updates the icon of a portal.
   *
   * @param {bigint} portalId - The ID of the portal to update.
   * @param {string} icon_url - The URL of the new icon.
   * @returns {Promise<Result<PortalView>>} A promise that resolves to a Result containing the updated PortalView.
   */
  updatePortalIcon = async (
    portalId: bigint,
    icon_url: string,
  ): Promise<Result<PortalView>> => {
    const queryResult = await this.actor.update_portal_icon({
      id: portalId,
      icon_url: icon_url,
    });
    return convertToResult(queryResult);
  };

  /**
   * Updates the cover photo of a portal.
   *
   * @param {bigint} portalId - The ID of the portal.
   * @param {string} url - The URL of the new cover photo.
   * @returns {Promise<Result<PortalView>>} A promise that resolves to the updated portal view.
   */
  updatePortalCoverPhoto = async (
    portalId: bigint,
    url: string,
  ): Promise<Result<PortalView>> => {
    const queryResult = await this.actor.update_portal_info_cover_photo(
      portalId,
      [url],
    );
    return convertToResult(queryResult);
  };

  /**
   * Updates the rules of a portal.
   *
   * @param {bigint} portalId - The ID of the portal to update.
   * @param {PortalRule[]} rules - An array of PortalRule objects representing the new rules.
   * @returns {Promise<Result<PortalView>>} A Promise that resolves to a Result containing the updated PortalView.
   */
  updatePortalRules = async (
    portalId: bigint,
    rules: PortalRule[],
  ): Promise<Result<PortalView>> => {
    const queryResult = await this.actor.update_portal_info_rules(portalId, [
      rules,
    ]);
    return convertToResult(queryResult);
  };

  /**
   * Joins a portal with the specified portal ID.
   *
   * @param {bigint} portalId - The ID of the portal to join.
   * @returns {Promise<Result<PortalView>>} A promise that resolves to a Result containing the PortalView.
   */
  joinPortal = async (portalId: bigint): Promise<Result<PortalView>> => {
    const queryResult = await this.actor.join_portal(portalId);
    return convertToResult(queryResult);
  };

  /**
   * Leaves a portal.
   *
   * @param {bigint} portalId - The ID of the portal to leave.
   * @returns {Promise<Result<PortalView>>} A promise that resolves to a Result containing the PortalView.
   */
  leavePortal = async (portalId: bigint): Promise<Result<PortalView>> => {
    const queryResult = await this.actor.leave_portal(portalId);
    return convertToResult(queryResult);
  };

  /**
   * Follow portal toggle for the current user.
   *
   * @param {bigint} portalId - The ID of the portal to leave.
   * @returns {Promise<Result<PortalView>>} A promise that resolves to a Result containing the PortalView.
   */
  followPortalToggle = async (
    portalId: bigint,
  ): Promise<Result<PortalView>> => {
    const queryResult = await this.actor.follow_portal_toggle(portalId);
    return convertToResult(queryResult);
  };

  /**
   * Retrieves portal members based on the provided query.
   *
   * @param {PortalMemberQuery} query - The query parameters for retrieving portal members.
   * @returns {Promise<Result<GetPortalMemberV2Result>>} A promise that resolves to a Result containing the portal member information.
   */
  getPortalMembers = async (
    query: PortalMemberQuery,
  ): Promise<Result<GetPortalMemberV2Result>> => {
    const queryResult = await this.actor.get_portal_members_v2(query);
    return convertToSuccessResult(queryResult);
  };

  /**
   * Retrieves the roles associated with a portal.
   *
   * @param {bigint} portalId - The ID of the portal.
   * @returns {Promise<Result<RoleView[]>>} A promise that resolves to a Result containing an array of RoleView objects.
   */
  getPortalRoles = async (portalId: bigint): Promise<Result<RoleView[]>> => {
    const queryResult = await this.actor.get_portal_roles(portalId);
    return convertToSuccessResult(queryResult);
  };

  /**
   * Adds a portal role.
   *
   * @param {bigint} portalId - The ID of the portal.
   * @param {CreatePortalRole} role - The role to be created.
   * @returns {Promise<Result<RoleView>>} A promise that resolves to the result of adding the portal role.
   */
  addPortalRole = async (
    portalId: bigint,
    role: CreatePortalRole,
  ): Promise<Result<RoleView>> => {
    const queryResult = await this.actor.add_portal_role(portalId, role);
    return convertToResult(queryResult);
  };

  /**
   * Deletes a portal role.
   *
   * @param {bigint} roleId - The ID of the role to delete.
   * @returns {Promise<Result<RoleView>>} A promise that resolves to a Result containing the deleted RoleView.
   */
  deletePortalRole = async (roleId: bigint): Promise<Result<RoleView>> => {
    const queryResult = await this.actor.delete_portal_role(roleId);
    return convertToResult(queryResult);
  };

  /**
   * Updates the role of a portal.
   *
   * @param {UpdatePortalRole} update - The update object containing the new role information.
   * @returns {Promise<Result<RoleView>>} A promise that resolves to a Result object containing the updated RoleView.
   */
  updatePortalRole = async (
    update: UpdatePortalRole,
  ): Promise<Result<RoleView>> => {
    const queryResult = await this.actor.update_portal_role(update);
    return convertToResult(queryResult);
  };

  /**
   * Retrieves the roles of a user in a portal.
   *
   * @param {bigint} portalId - The ID of the portal.
   * @param {Principal} userId - The ID of the user.
   * @returns {Promise<Result<PortalMemberView>>} A promise that resolves to a Result containing the PortalMemberView if successful, or an error if the user is not found.
   */
  getUserPortalRoles = async (
    portalId: bigint,
    userId: Principal,
  ): Promise<Result<PortalMemberView>> => {
    const queryResult = await this.actor.get_user_portal_roles(
      portalId,
      userId,
    );
    if (queryResult.length === 0) {
      return convertToErrorResult<PortalMemberView>(
        'User not found',
        { NotFound: 'User not found' },
        [{ field: 'userId', errors: ['User not found'] }],
      );
    }
    return convertToSuccessResult<PortalMemberView>(queryResult[0]);
  };

  /**
   * Checks if a user is a member of a portal.
   * @param {bigint} portalId - The ID of the portal.
   * @param {Principal} userId - The ID of the user.
   * @returns {Promise<Result<boolean>>} A promise that resolves to a Result object containing a boolean value indicating whether the user is a member of the portal.
   */
  isUserPortalMember = async (
    portalId: bigint,
    userId: Principal,
  ): Promise<Result<boolean>> => {
    const results = await this.actor.get_user_portal_roles(portalId, userId);
    if (results.length === 0) {
      return convertToSuccessResult(false);
    }
    return convertToSuccessResult('Approved' in results[0].member.status);
  };

  /**
   * Adds a role to a member in a portal.
   *
   * @param {bigint} portalId - The ID of the portal.
   * @param {bigint} memberId - The ID of the member.
   * @param {bigint} roleId - The ID of the role.
   * @returns {Promise<Result<MemberView[]>>} A promise that resolves to a Result containing an array of MemberView objects.
   */
  addMemberRole = async (
    portalId: bigint,
    memberId: bigint,
    roleId: bigint,
  ): Promise<Result<MemberView[]>> => {
    const queryResult = await this.actor.add_member_role(portalId, [
      [memberId, roleId],
    ]);
    return convertToSuccessResult(queryResult);
  };

  /**
   * Adds multiple member roles to a portal.
   *
   * @param {bigint} portalId - The ID of the portal.
   * @param {[[bigint, bigint]]} memberRoles - An array of tuples representing the member ID and role ID.
   * @returns {Promise<Result<MemberView[]>>} A promise that resolves to a Result containing an array of MemberView objects.
   */
  addMemberRoleMany = async (
    portalId: bigint,
    memberRoles: [[bigint, bigint]],
  ): Promise<Result<MemberView[]>> => {
    const queryResult = await this.actor.add_member_role(portalId, memberRoles);
    return convertToSuccessResult(queryResult);
  };

  /**
   * Removes a role from a member in a portal.
   *
   * @param {bigint} portalId - The ID of the portal.
   * @param {bigint} memberId - The ID of the member.
   * @param {bigint} roleId - The ID of the role to be removed.
   * @returns {Promise<Result<MemberView[]>>} A promise that resolves to a Result containing an array of MemberView objects.
   */
  removeMemberRole = async (
    portalId: bigint,
    memberId: bigint,
    roleId: bigint,
  ): Promise<Result<MemberView[]>> => {
    const queryResult = await this.actor.remove_member_role(portalId, [
      [memberId, roleId],
    ]);
    return convertToSuccessResult(queryResult);
  };

  /**
   * Removes multiple member roles from a portal.
   *
   * @param {bigint} portalId - The ID of the portal.
   * @param {[[bigint, bigint]]} memberRoles - An array of tuples representing the member ID and role ID to be removed.
   * @returns {Promise<Result<MemberView[]>>} A promise that resolves to a Result containing an array of MemberView objects.
   */
  removeMemberRoleMany = async (
    portalId: bigint,
    memberRoles: [[bigint, bigint]],
  ): Promise<Result<MemberView[]>> => {
    const queryResult = await this.actor.remove_member_role(
      portalId,
      memberRoles,
    );
    return convertToSuccessResult(queryResult);
  };

  /**
   * Retrieves the members of a role.
   *
   * @param roleId - The ID of the role.
   * @returns {Promise<Result<MemberListItemView[]>>} A promise that resolves to a Result containing an array of MemberListItemView objects.
   */
  getRoleMembers = async (
    roleId: bigint,
  ): Promise<Result<MemberListItemView[]>> => {
    const queryResult = await this.actor.get_role_members(roleId);
    return convertToSuccessResult(queryResult);
  };

  /**
   * Retrieves the assignable roles for a given member.
   *
   * @param {bigint} memberId - The ID of the member.
   * @returns {Promise<Result<[MemberView, RoleView[]]>>} A promise that resolves to a tuple containing the member view and an array of role views.
   */
  getMemberAssignableRoles = async (
    memberId: bigint,
  ): Promise<Result<[MemberView, RoleView[]]>> => {
    const queryResult = await this.actor.get_assignable_portal_roles(memberId);
    if (queryResult.length === 0) {
      return convertToErrorResult<[MemberView, RoleView[]]>(
        'Member not found',
        { NotFound: 'Member not found' },
        [{ field: 'memberId', errors: ['Member not found'] }],
      );
    }
    return convertToSuccessResult<[MemberView, RoleView[]]>(queryResult[0]);
  };

  /**
   * Retrieves the portal content for a given slug (name) and query.
   *
   * @param {string} slug - The slug of the portal.
   * @param {PagedQuery} query - The query parameters for pagination.
   * @returns {Promise<Result<ContentViewPage>>} A promise that resolves to a Result containing the ContentViewPage.
   */
  getPortalContent = async (
    slug: string,
    query: PagedQuery,
  ): Promise<Result<ContentViewPage>> => {
    const queryResult = await this.actor.get_portal_content(slug, query);
    return convertToResult(queryResult);
  };

  /**
   * Retrieves the users own portals.
   * @returns {Promise<Result<PortalView[]>>} A promise that resolves to a Result containing an array of PortalView objects.
   */
  getSelfPortals = async (): Promise<Result<PortalView[]>> => {
    const queryResult = await this.actor.get_self_portals();
    return convertToSuccessResult(queryResult);
  };
}
