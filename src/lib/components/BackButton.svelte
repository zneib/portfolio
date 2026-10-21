<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<span>{@render children()}</span>

<style>
	span {
		margin: 20px 0 0 20px;
		border: 2px solid black;
		padding: 5px 10px;
	}
	@media (prefers-color-scheme: dark) {
		span {
			border: 2px solid var(--gray-six);
		}
	}
</style>
