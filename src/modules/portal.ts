import { Principal } from '@dfinity/principal';
import {
  _SERVICE as BackendActor,
  CreatePortal,
  CreatePortalRole,
  PortalMemberQuery,
  PortalRule,
  UpdatePortal,
  UpdatePortalRole,
} from '../idl/dscvr.did';
import { convertToResult, convertToSuccessResult } from '../utils';

export class PortalModule {
  constructor(public actor: BackendActor) {}
  getPortal = async (portalSlug: string) => {
    const queryResult = await this.actor.get_portal(portalSlug);
    return convertToResult(queryResult);
  };

  getPortals = async (portalSlugs: string[]) => {
    const queryResult = await this.actor.get_portals(portalSlugs);
    return convertToResult(queryResult);
  };

  getPortalInfo = async (portalId: bigint) => {
    const queryResult = await this.actor.get_portal_info(portalId);
    return convertToSuccessResult(queryResult);
  };

  createPortal = async (portal: CreatePortal) => {
    const queryResult = await this.actor.create_portal(portal);
    return convertToResult(queryResult);
  };

  updatePortal = async (update: UpdatePortal) => {
    const queryResult = await this.actor.update_portal(update);
    return convertToResult(queryResult);
  };

  updatePortalIcon = async (portalId: bigint, icon_url: string) => {
    const queryResult = await this.actor.update_portal_icon({
      id: portalId,
      icon_url: icon_url,
    });
    return convertToResult(queryResult);
  };

  updatePortalCoverPhoto = async (portalId: bigint, url: string) => {
    const queryResult = await this.actor.update_portal_info_cover_photo(
      portalId,
      [url],
    );
    return convertToResult(queryResult);
  };

  updatePortalRules = async (portalId: bigint, rules: PortalRule[]) => {
    const queryResult = await this.actor.update_portal_info_rules(portalId, [
      rules,
    ]);
    return convertToResult(queryResult);
  };

  joinPortal = async (portalId: bigint) => {
    const queryResult = await this.actor.join_portal(portalId);
    return convertToResult(queryResult);
  };

  leavePortal = async (portalId: bigint) => {
    const queryResult = await this.actor.leave_portal(portalId);
    return convertToResult(queryResult);
  };

  getPortalMembers = async (query: PortalMemberQuery) => {
    const queryResult = await this.actor.get_portal_members_v2(query);
    return convertToSuccessResult(queryResult);
  };

  getPortalRoles = async (portalId: bigint) => {
    const queryResult = await this.actor.get_portal_roles(portalId);
    return convertToSuccessResult(queryResult);
  };

  addPortalRole = async (portalId: bigint, role: CreatePortalRole) => {
    const queryResult = await this.actor.add_portal_role(portalId, role);
    return convertToResult(queryResult);
  };

  deletePortalRole = async (roleId: bigint) => {
    const queryResult = await this.actor.delete_portal_role(roleId);
    return convertToResult(queryResult);
  };

  updatePortalRole = async (update: UpdatePortalRole) => {
    const queryResult = await this.actor.update_portal_role(update);
    return convertToResult(queryResult);
  };

  getUserPortalRoles = async (portalId: bigint, userId: Principal) => {
    const queryResult = await this.actor.get_user_portal_roles(
      portalId,
      userId,
    );
    return convertToSuccessResult(queryResult);
  };

  isUserPortalMember = async (portalId: bigint, userId: Principal) => {
    const results = await this.actor.get_user_portal_roles(portalId, userId);
    if (results.length === 0) {
      return convertToSuccessResult(false);
    }
    return convertToSuccessResult('Approved' in results[0].member.status);
  };
}
