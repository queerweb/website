<script>
	export let name = "Person Name";
	export let description = "Person description goes here.";
	export let image = "";
	export let link = "#";

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
	class="person-card"
	on:mousemove={handleMouseMove}
	on:mouseenter={() => isHovered = true}
	on:mouseleave={() => isHovered = false}
	style="
		--rotate-x: {rotateX}deg;
		--rotate-y: {rotateY}deg;
	"
>
	<div class="card-content">
		{#if image}
			<img src={image} alt={name} class="person-image" />
		{/if}
		<h3 class="person-name">{name}</h3>
		<p class="person-description">{description}</p>
	</div>
</a>

<style>
	.person-card {
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
		text-align: center;
	}

	.person-card:hover {
		border-color: #89b4fa;
	}

	.card-content {
		position: relative;
		z-index: 1;
	}

	.person-image {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 0.75rem;
		border: 2px solid #313244;
	}

	.person-name {
		margin: 0 0 0.25rem 0;
		font-size: 1.25rem;
		font-weight: 600;
		color: #cdd6f4;
		transition: color 0.3s ease;
	}

	.person-card:hover .person-name {
		color: #89b4fa;
	}

	.person-description {
		margin: 0;
		font-size: 0.9rem;
		color: #a6adc8;
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		.person-card {
			width: 100%;
			margin: 0.5rem 0;
			transform: none;
		}
	}
</style>
