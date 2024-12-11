import { Identity } from '@dfinity/agent';
import { getBackendActor } from './actor';
import type { _SERVICE as BackendActor } from './idl/dscvr.did';
import { ContentModule, PortalModule, UserModule } from './modules';

/**
 * Represents the DSCVRProtocol class.
 * This class provides access to various modules and functionalities of the DSCVR SDK.
 */
export class DSCVRProtocol {
  public identity: Identity;
  public actor: BackendActor;

  /**
   * Represents the user module.
   */
  public user: UserModule;

  /**
   * Represents the content module.
   */
  public content: ContentModule;

  /**
   * Represents the portal module.
   */
  public portal: PortalModule;

  constructor(
    identity: Identity,
    canisterId: string = 'h2bch-3yaaa-aaaab-qaama-cai',
  ) {
    this.identity = identity;

    this.actor = getBackendActor({
      identity: this.identity,
      canisterId: canisterId,
    });

    this.user = new UserModule(this.actor);
    this.content = new ContentModule(this.actor);
    this.portal = new PortalModule(this.actor);
  }
}
