<script lang="ts">
	import BackButton from '#lib/components/BackButton.svelte';
</script>

<section class="page">
	<a href="/">
		<BackButton>Back</BackButton>
	</a>
	<section class="post-wrapper">
		<div style="text-align: center; margin: 20px auto">Guides</div>
		<a href="https://mapkitlabs.com" target="_blank">
			<div class="post-info">MapKitLabs - A visual playground with examples on how to use MapKitJS with Svelte</div>
		</a>
	</section>
</section>

<style>
	.page {
		height: 100vh;
		height: 100dvh;
		padding-top: 25px;
	}

	.post-wrapper {
		margin: 0 auto;
	}
	@media screen and (min-width: 375px) {
		.post-wrapper {
			width: 80%;
		}
	}
	@media screen and (min-width: 1080px) {
		.post-wrapper {
			width: 50%;
		}
	}

	.post-info {
		margin: 0 auto;
		background-color: #fff;
		border: 2px solid var(--gray-five);
		border-radius: 5px;
		padding: 10px;
	}
	.post-info:hover {
		border: 2px solid var(--gray-six);
		cursor: pointer;
	}
	@media (prefers-color-scheme: dark) {
		.post-info {
			background-color: var(--gray-five);
			border: 2px solid var(--gray-seven);
		}
	}
</style>
