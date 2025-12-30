<script>
	import PrideSwirl from '$lib/components/PrideSwirl.svelte';
	import HomeContent from '$lib/content/home.svx';
</script>

<div class="container">
	<div class="pride-panel">
		<PrideSwirl />
	</div>
	<div class="content">
		<HomeContent />
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
	}
</style>
