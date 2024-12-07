import { Identity } from '@dfinity/agent';
import { getBackendActor } from './actor';
import type { _SERVICE as BackendActor } from './idl/dscvr.did';
import { UserModule } from './modules/user';
import { ContentModule } from './modules/content';
import { PortalModule } from './modules/portal';

export class DSCVRProtocol {
  public identity: Identity;
  public actor: BackendActor;
  public user: UserModule;
  public content: ContentModule;
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
