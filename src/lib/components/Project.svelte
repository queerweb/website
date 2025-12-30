<script>
	export let name = "Project Name";
	export let link = "#";
	export let description = "Project description goes here.";

	let isHovered = false;
	let mouseX = 0.5;
	let mouseY = 0.5;

	function handleMouseMove(e) {
		const rect = e.currentTarget.getBoundingClientRect();
		mouseX = (e.clientX - rect.left) / rect.width;
		mouseY = (e.clientY - rect.top) / rect.height;
	}

	$: rotateX = isHovered ? (mouseY - 0.5) * -25 : 0;
	$: rotateY = isHovered ? (mouseX - 0.5) * 25 : 0;
</script>

<a 
	href={link}
	class="project-card"
	on:mousemove={handleMouseMove}
	on:mouseenter={() => isHovered = true}
	on:mouseleave={() => isHovered = false}
	style="
		--rotate-x: {rotateX}deg;
		--rotate-y: {rotateY}deg;
	"
>
	<div class="card-content">
		<h3 class="project-name">{name}</h3>
		<p class="project-description">{description}</p>
	</div>
</a>

<style>
	.project-card {
		display: block;
		position: relative;
		width: calc(25% - 0.75rem);
		display: inline-block;
		padding: 1.5rem;
		background: #1e1e2e;
		border: 2px solid #313244;
		border-radius: 12px;
		text-decoration: none;
		overflow: hidden;
		transform-style: preserve-3d;
		transform: perspective(1000px) rotateX(var(--rotate-x)) rotateY(var(--rotate-y));
		transition: transform 0.2s ease-out, border-color 0.3s ease;
		box-sizing: border-box;
		margin: 0.25rem;
	}

	.project-card:hover {
		border-color: #89b4fa;
	}

	.card-content {
		position: relative;
		z-index: 1;
	}

	.project-name {
		margin: 0 0 0.75rem 0;
		font-size: 1.25rem;
		font-weight: 600;
		color: #cdd6f4;
		transition: color 0.3s ease;
	}

	.project-card:hover .project-name {
		color: #89b4fa;
	}

	.project-description {
		font-size: 0.9rem;
		color: #a6adc8;
		line-height: 1.5;
	}

</style>
