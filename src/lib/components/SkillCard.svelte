<script lang="ts">
	import svelte from '#lib/assets/svelte.svg';
	import react from '#lib/assets/react.svg';
	import node from '#lib/assets/node.svg';
	import typescript from '#lib/assets/typescript.svg';
	import javascript from '#lib/assets/javascript.svg';
	import css from '#lib/assets/css.svg';
	import html from '#lib/assets/html.svg';
	import swift from '#lib/assets/swift.svg';

	type SkillCardProps = {
		image?: string;
		name: string;
	};

	let { image, name }: SkillCardProps = $props();

	const images: Record<string, string> = {
		'node.js': node,
		'svelte / sveltekit': svelte,
		'react / next.js': react,
		javascript,
		typescript,
		html,
		css,
		'swift / swiftui': swift
	};
</script>

<div class="card">
	<img
		src={image ? images[image] : undefined}
		alt="Tech Icon"
		width="25"
		height="25"
		loading="lazy"
		decoding="async"
		style="color: transparent"
	/>
	<span class="name">{name}</span>
</div>

<style>
	.card {
		display: flex;
		align-items: center;
		color: var(--gray-two);
		background: var(--gray-nine);
		width: auto;
		border-radius: 5px;
		padding: 5px 10px;
		margin: 10px 25px 0 0;
	}
	@media (max-width: 768px) {
		.card {
			margin: 5px;
		}
	}
	@media (prefers-color-scheme: dark) {
		.card {
			color: var(--gray-nine);
			background: var(--gray-five);
		}
	}
	.name {
		margin: 0 5px;
	}
</style>
