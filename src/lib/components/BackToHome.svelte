<script>
	let isHovered = false;
</script>

<a 
	href="/"
	class="backToHome"
	on:mouseenter={() => isHovered = true}
	on:mouseleave={() => isHovered = false}
>
	<span class="arrow" class:hovered={isHovered}>←</span>
	Back to Home
</a>

<style>
	.backToHome {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 1.5rem;
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 600;
		color: #cdd6f4;
		transition: color 0.3s ease;
	}

	.backToHome:hover {
		color: #89b4fa;
	}

	.arrow {
		transition: transform 0.2s ease;
	}

	.arrow.hovered {
		transform: translateX(-3px);
	}
</style>
