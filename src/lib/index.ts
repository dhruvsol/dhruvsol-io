interface ThinkingAloud {
	type: string;
	link: string;
	header: string;
	content: string;
	date: Date;
}

export const THINKING_ALOUD: ThinkingAloud[] = [
	{
		type: 'github',
		content: 'A guide for setting up validators, blazingly fast.',
		date: new Date('2024-11-03'),
		header: 'Validator Jumpstart',
		link: 'https://github.com/brewlabshq/validator-jumpstart'
	},
	{
		type: 'blog',
		content: 'Voting Modifications and Validator Voting Behavior Study V 1.0',
		date: new Date('2025-04-12'),
		header: 'Voting Modifications & Voting',
		link: 'https://medium.com/@hrknsinst/voting-modifications-and-validator-voting-behavior-study-v-1-0-14098cd01d0c'
	}
].sort((a, b) => b.date.getTime() - a.date.getTime());

interface BuilderLog {
	title: string;
	content: string;
	date: Date;
	link: string;
}

export const BUILDER_LOG: BuilderLog[] = [
	{
		title: 'brewlabshq - Founder',
		content: 'Espresso for Infra - home for open-source projects.',
		date: new Date('2025-01-08'),
		link: 'https://github.com/brewlabshq/'
	},
	{
		title: 'dynoSOL - Core Team',
		content:
			'Stake for numbers and narratives - Stake your SOL with validators vetted by experts and on-chain performance',
		date: new Date('2025-05-08'),
		link: 'https://www.dynosol.io/'
	},
	{
		title: 'Ice Staking',
		content: 'High performance solana validator - Freeze your SOL for ice cold yields',
		date: new Date('2024-04-12'),
		link: 'https://www.icestaking.com/'
	},
	{
		title: 'Cubik - Co-Founder/CTO',
		content: 'Funding the future of @Solana, one builder at a time.',
		date: new Date('2023-02-01'),
		link: 'https://github.com/cubik-so/'
	},
	{
		title: 'Superteam Earn - Software Engineer',
		content:
			'An open source platform connecting crypto founders with elite talent to create bounties, and accelerate project completion',
		date: new Date('2023-01-01'),
		link: 'https://github.com/SuperteamDAO/earn'
	}
].sort((a, b) => b.date.getTime() - a.date.getTime());
