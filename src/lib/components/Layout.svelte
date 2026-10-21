<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<main>
	{@render children()}
</main>

<style>
	main {
		width: 100%;
		padding: 50px 100px;
		display: inline-block;
	}
	main > :global(h3) {
		color: #000;
		margin-top: 50px;
		margin-bottom: 20px;
	}
	@media (max-width: 768px) {
		main {
			width: 100vw;
			padding: 10px 20px;
		}
	}
	@media (prefers-color-scheme: dark) {
		main > :global(h3) {
			color: var(--gray-nine);
		}
	}
</style>
