<script lang="ts">
	type ProjectCardProps = {
		name: string;
		description: string;
		href: string;
		tags?: string[];
	};

	let { name, description, href, tags = [] }: ProjectCardProps = $props();
</script>

<a class="card" {href} target="_blank" rel="noopener noreferrer">
	<h4 class="name">{name}</h4>
	<p class="description">{description}</p>
	{#if tags.length}
		<ul class="tags">
			{#each tags as tag}
				<li>{tag}</li>
			{/each}
		</ul>
	{/if}
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;
		color: var(--gray-two);
		background: var(--gray-nine);
		border-radius: 5px;
		padding: 15px 20px;
		margin: 10px 25px 0 0;
		width: 100%;
		max-width: 350px;
		text-decoration: none;
		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease;
	}
	.card:hover,
	.card:focus-visible {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}
	@media (max-width: 768px) {
		.card {
			margin: 5px 0;
			max-width: none;
		}
	}
	@media (prefers-color-scheme: dark) {
		.card {
			color: var(--gray-nine);
			background: var(--gray-five);
		}
	}
	.name {
		margin: 0 0 5px;
		font-size: 18px;
	}
	.description {
		margin: 0;
		font-size: 14px;
	}
	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		list-style: none;
		padding: 0;
		margin: 10px 0 0;
		font-size: 12px;
	}
	.tags li {
		border: 1px solid currentColor;
		border-radius: 5px;
		padding: 1px 6px;
	}
</style>
