import {
  Actor,
  type ActorMethod,
  type ActorSubclass,
  type Identity,
} from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';
import type { Principal } from '@dfinity/principal';
import { getAgent } from './agent';
import { idlFactory } from './idl/dscvr.did.idl';
import type { _SERVICE as BackendActor } from './idl/dscvr.did';

export const getBackendActor = ({
  identity,
  canisterId,
}: {
  identity: Identity;
  canisterId: string | Principal;
}): BackendActor => {
  const actor = createActor<BackendActor>({
    canisterId: canisterId,
    idlFactory: idlFactory,
    identity,
  });
  return actor;
};

const createActor = <T = Record<string, ActorMethod>>({
  canisterId,
  idlFactory,
  identity,
}: {
  canisterId: string | Principal;
  idlFactory: IDL.InterfaceFactory;
  identity: Identity;
}): ActorSubclass<T> => {
  const agent = getAgent({ identity });
  return Actor.createActor(idlFactory, {
    agent,
    canisterId,
  });
};
