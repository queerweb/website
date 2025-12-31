<script>
	import PrideSwirl from '$lib/components/PrideSwirl.svelte';
	import Content from '$lib/content/faq.svx';
</script>

<div class="container">
	<div class="pride-panel">
		<PrideSwirl />
	</div>
	<div class="content">
		<Content />
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #1e1e2e;
		color: #cdd6f4;
		font-family: system-ui, -apple-system, sans-serif;
		min-height: 100vh;
	}

	:global(a) {
		color: #89b4fa;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	:global(a:hover) {
		color: #b4befe;
		text-decoration: underline;
	}

	:global(a:visited) {
		color: #cba6f7;
	}

	.container {
		display: flex;
		min-height: 100vh;
		width: 100%;
	}

	.pride-panel {
		width: 40%;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
	}

	.content {
		width: 60%;
		margin-left: 40%;
		padding: 0rem 2rem;
		overflow-y: auto;
		min-height: 100vh;
		background-color: #1e1e2e;
		margin-bottom: 25px;
	}

	@media (max-width: 768px) {
		.pride-panel {
			display: none;
		}

		.content {
			width: 100%;
			margin-left: 0;
		}
	}
</style>
