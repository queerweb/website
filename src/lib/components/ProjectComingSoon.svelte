<script>
	export let name = "Project Name";
	export let description = "Project description goes here.";

	let isHovered = false;
	let mouseX = 0.5;
	let mouseY = 0.5;

	function handleMouseMove(e) {
		const rect = e.currentTarget.getBoundingClientRect();
		mouseX = (e.clientX - rect.left) / rect.width;
		mouseY = (e.clientY - rect.top) / rect.height;
	}

	function handleClick(e) {
		e.preventDefault();
		alert("Coming soon!");
	}

	$: rotateX = isHovered ? (mouseY - 0.5) * -25 : 0;
	$: rotateY = isHovered ? (mouseX - 0.5) * 25 : 0;
</script>

<button 
	class="project-card"
	on:mousemove={handleMouseMove}
	on:mouseenter={() => isHovered = true}
	on:mouseleave={() => isHovered = false}
	on:click={handleClick}
	style="
		--rotate-x: {rotateX}deg;
		--rotate-y: {rotateY}deg;
	"
>
	<div class="card-content">
		<h3 class="project-name">{name}</h3>
		<p class="project-description">{description}</p>
	</div>
</button>

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
		cursor: pointer;
		opacity: 0.5;
		filter: grayscale(100%);
		font-family: inherit;
		text-align: left;
	}

	.project-card:hover {
		border-color: #6c7086;
	}

	.card-content {
		position: relative;
		z-index: 1;
	}

	.project-name {
		margin: 0 0 0.75rem 0;
		font-size: 1.25rem;
		font-weight: 600;
		color: #6c7086;
		transition: color 0.3s ease;
	}

	.project-card:hover .project-name {
		color: #6c7086;
	}

	.project-description {
		font-size: 0.9rem;
		color: #6c7086;
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		.project-card {
			width: 100%;
			margin: 0.5rem 0;
			transform: none;
		}
	}
</style>
