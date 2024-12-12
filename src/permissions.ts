import {
    PortalInfoView,
    PortalView,
  } from "./idl/dscvr.did";
  
  export const PermissionFlags = {
    ADMIN: 1, // unused
    MANAGE_ROLES: 2,
    MANAGE_MEMBERS: 4,
    REMOVE_CONTENT: 8, // unused
    BAN_MEMBER: 16,
    MODERATE_CONTENT: 64,
    VIEW_CONTENT: 128,
    CREATE_CONTENT_POST: 256,
    CREATE_CONTENT_COMMENT: 512,
    POLL_VOTE_CONTENT: 1024,
    KICK_MEMBER: 2048,
    CREATE_GOVERNANCE_POLL: 8192,
    REACT_CONTENT: 16_384,
    DISLIKE_CONTENT: 32_768,
    INVITE_MEMBER: 65_536,
  };
  
  export const PermissionGroups = {
    PORTAL_MANAGER:
      PermissionFlags.MANAGE_MEMBERS |
      PermissionFlags.MANAGE_ROLES |
      PermissionFlags.BAN_MEMBER,
    PORTAL_SETTINGS_MANAGER:
      PermissionFlags.MANAGE_MEMBERS |
      PermissionFlags.MANAGE_ROLES |
      PermissionFlags.BAN_MEMBER |
      PermissionFlags.MODERATE_CONTENT,
  };
  
  export const Permissions = [
    {
      name: "Manage Roles",
      description: "Gives users the ability to create and modify roles.",
      flag: PermissionFlags.MANAGE_ROLES,
    },
    {
      name: "Manage Members",
      description: "Gives users the ability to assign roles to users.",
      flag: PermissionFlags.MANAGE_MEMBERS,
    },
    {
      name: "Moderate Content",
      description:
        "Gives users the ability to pin posts, remove content (put it in the all portal) and flag content is NSFW.",
      flag: PermissionFlags.MODERATE_CONTENT,
    },
    {
      name: "Ban Members",
      description:
        "Gives users the ability to ban users from the portal.  These users will not be able to see or interact with the portal at all and they will have all their roles removed.",
      flag: PermissionFlags.BAN_MEMBER,
    },
    {
      name: "React to Content",
      description: "Gives users the ability to react to content.",
      flag: PermissionFlags.REACT_CONTENT,
    },
    {
      name: "Dislike Content",
      description: "Gives users the ability to dislike content.",
      flag: PermissionFlags.DISLIKE_CONTENT,
    },
    {
      name: "Poll Vote",
      description: "Gives users the ability to vote on polls.",
      flag: PermissionFlags.POLL_VOTE_CONTENT,
    },
    {
      name: "Comment",
      description: "Gives users the ability to write comments.",
      flag: PermissionFlags.CREATE_CONTENT_COMMENT,
    },
    {
      name: "Post",
      description: "Gives users the ability to post content.",
      flag: PermissionFlags.CREATE_CONTENT_POST,
    },
    {
      name: "View Content",
      description: "Gives users the ability to view content.",
      flag: PermissionFlags.VIEW_CONTENT,
    },
    {
      name: "Invite Members",
      description: "Gives users the ability to invite members.",
      flag: PermissionFlags.INVITE_MEMBER,
    },
  ];
  
  export const isPortalManager = (portal: PortalView | PortalInfoView) => {
    return (PermissionGroups.PORTAL_MANAGER & Number(portal.perm)) > 0;
  };
  
  export const canInvite = (portalView: PortalView) => {
    return hasPermission(portalView.perm, PermissionFlags.INVITE_MEMBER);
  };
  
  export const isPrivate = (permissions: bigint) => {
    return !hasPermission(permissions, PermissionFlags.VIEW_CONTENT) && !hasPermission(permissions, PermissionFlags.REACT_CONTENT);
  };
  
  /**
   *
   * @param permissions
   * @param flags
   */
  export const hasPermission = (permissions: bigint, flags: number) => {
    return (Number(permissions) & flags) == flags;
  };
  
  /**
   *
   * @param permissions
   * @param flags
   */
  export const hasPermissionGroup = (permissions: bigint, flags: number) => {
    return (Number(permissions) & flags) > 0;
  };
  
  interface Permission {
    flag: number;
  }
  
  export class PermissionBuilder {
    private flags: number[];
  
    constructor(permissions: Permission[] | null = null) {
      this.flags = [];
  
      if (permissions != null) {
        for (const perm of permissions) {
          this.addPermission(perm);
        }
      }
    }
  
    addPermission(perm: Permission): void {
      this.addFlag(perm.flag);
    }
  
    addFlag(flag: number): void {
      this.flags.push(flag);
    }
  
    removeFlag(flag: number): void {
      const index = this.flags.indexOf(flag);
      if (index > -1) this.flags.splice(index, 1);
    }
  
    containsFlag(flag: number): boolean {
      return this.flags.includes(flag);
    }
  
    static getFromValue(val: number): Permission[] {
      return Permissions.filter((x) => {
        return (x.flag & val) > 0;
      });
    }
  
    compute(): number {
      if (this.flags.length === 0) return 0;
  
      return this.flags.reduce((x, y) => x | y);
    }
  }
  
  export const computePermissionFlag = (flags: number[]): bigint => {
    return BigInt(flags.reduce((x, y) => x | y));
  };