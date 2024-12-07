import { HttpAgent, Identity } from '@dfinity/agent';
import { isNullish } from './utils';

let agents: Record<string, HttpAgent> | undefined | null = undefined;

export const getAgent = ({ identity }: { identity: Identity }): HttpAgent => {
	const key = identity.getPrincipal().toText();
	if (isNullish(agents) || isNullish(agents[key])) {
		const agent = createAgent({ identity });
		agents = {
			...(agents ?? {}),
			[key]: agent
		};
		return agent;
	}
	return agents[key];
};

export const createAgent = ({
	identity,
	verifyQuerySignatures = false
}: {
	identity: Identity;
	verifyQuerySignatures?: boolean;
}): HttpAgent => HttpAgent.createSync({
	identity,
	host: 'https://edge1-proxy.dscvr.cloud',
	verifyQuerySignatures,
});
	

export const clearAgents = () => (agents = null);