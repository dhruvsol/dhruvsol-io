<script lang="ts">
	import { BUILDER_LOG, THINKING_ALOUD } from '$lib';

	const posts = [...THINKING_ALOUD];
	const logs = [...BUILDER_LOG];
	function formatDate(date: Date) {
		return date.toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<section class="flex items-top flex-col items-center justify-center pt-20">
	<article class="max-w-3xl w-full text-white flex flex-col gap-10">
		<header class="text-left">
			<h1 class="text-3xl font-bold">Dhruvraj Solanki</h1>
			<p class="text-md text-gray-400">
				<a href="http"> @dhruvsol </a>
			</p>
		</header>
		<section>
			<h2 class="text-2xl font-semibold mb-4">About Me</h2>
			<p class="mb-4 leading-relaxed text-gray-400">
				I’m a software engineer exploring blockchain infrastructure and DeFi.<br /> As the founder
				of
				<a class="font-bold underline" href="https://github.com/brewlabshq" target="_blank">
					Brew Labs HQ
				</a>, where we build open source projects around solana validator client and tools.
			</p>
			<p class="mb-4 leading-relaxed text-gray-400">
				I operate <a class="font-bold underline" href="https://www.icestaking.com/" target="_blank"
					>IceStaking</a
				>, a high-performance Solana validator, and manage the
				<a class="font-bold underline" href="https://www.dynosol.io" target="_blank">dynoSOL</a> stake
				pool, to support ecosystem contributors.
			</p>
			<p class="leading-relaxed text-gray-400 italic">
				Note: The “sol” in my handle stands for Solanki, not Solana—and sadly I can’t airdrop free
				SOL. Also, I do not own dhruv.sol, but if you find him, send him my regards!
			</p>
		</section>

		<div class="relative my-8">
			<hr class="border-t border-gray-300" />

			<div class="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center">
				<div class="bg-primary px-2 text-gray-500">✕</div>
			</div>
		</div>

		<section class="">
			<header class="text-left">
				<h2 class="text-2xl font-semibold mb-4">Thinking Aloud</h2>
				<p class="text-md text-gray-400">
					A digital junk drawer of my brain — tweets, blogs, code rants, and mildly chaotic
					opinions. Mostly tech, occasionally coherent, always unfiltered. Proceed with curiosity
					(and low expectations).
				</p>
			</header>
			<ul class="mt-6 space-y-6">
				{#each posts as post (post.link)}
					<li class="rounded-lg list-disc">
						<div class="flex justify-start gap-2">
							<a
								href={post.link}
								target="_blank"
								rel="noopener noreferrer"
								class="text-xl font-semibold text-white hover:underline"
							>
								{post.header}
							</a>
							<p class="text-xs text-gray-500 mt-2">{formatDate(post.date)}</p>
						</div>
						<p class="text-sm text-gray-400 mt-1">{post.content}</p>
					</li>
				{/each}
			</ul>
		</section>
		<div class="relative my-8">
			<hr class="border-t border-gray-300" />

			<div class="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center">
				<div class="bg-primary px-2 text-gray-500">✕</div>
			</div>
		</div>
		<section class="">
			<header class="text-left">
				<h2 class="text-2xl font-semibold mb-4">Builder's Log</h2>
			</header>
			<ul class="mt-6 space-y-6">
				{#each logs as log (log.link)}
					<li class="rounded-lg list-disc">
						<div class="flex justify-start gap-2">
							<a
								href={log.link}
								target="_blank"
								rel="noopener noreferrer"
								class="text-xl font-semibold text-white hover:underline"
							>
								{log.title}
							</a>
							<p class="text-xs text-gray-500 mt-2">{formatDate(log.date)}</p>
						</div>
						<p class="text-sm text-gray-400 mt-1">{log.content}</p>
					</li>
				{/each}
			</ul>
		</section>
		<div class="relative my-8">
			<hr class="border-t border-gray-300" />

			<div class="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center">
				<div class="bg-primary px-2 text-gray-500">✕</div>
			</div>
		</div>
		<footer class="text-white">
			<header class="text-left">
				<h2 class="text-2xl font-semibold mb-4">Contract me</h2>
			</header>

			<div class="flex justify-start underline mb-10 gap-3">
				<a target="_blank" href="https://x.com/dhruvsol_">X</a>
				<a target="_blank" href="mailto:me@dhruvsol.io">Email</a>
				<a target="_blank" href="https://substack.com/@dhruvsol">Substack</a>
				<a target="_blank" href="https://github.com/dhruvsol">Github</a>
			</div>
		</footer>
	</article>
</section>
