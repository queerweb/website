<script>
	let mouseX = 0.5;
	let mouseY = 0.5;
	let isHovering = false;

	const quotes = [
		"You're telling me a queer coded this?",
		"Made with love (and with pride).",
		"Trangender for everyone.",
		"Happy New Years!",
		"The A is for Asexual (or Aromantic).",
		"Trans rights or we bites.",
		"You are perfect.",
		"Every month is pride month.",
		"Being gay is natural. Being homophobic is not.",
		"We're here, We're queer, deal with it.",
		"Trans women are women.",
		"Trans men are men.",
		"Trans rights NOW!",
		"Privacy is a fundamental human right.",
		"Gender affirming care saves lives."
	];

	let quoteIndex = Math.floor(Math.random() * quotes.length);
	$: quote = quotes[quoteIndex];

	function rotateQuote() {
		quoteIndex = (quoteIndex + 1) % quotes.length;
	}

	function handleMouseMove(e) {
		const rect = e.currentTarget.getBoundingClientRect();
		mouseX = (e.clientX - rect.left) / rect.width;
		mouseY = (e.clientY - rect.top) / rect.height;
	}

	$: swirlAngle = isHovering ? (mouseX - 0.5) * 15 : 0;
	$: swirlIntensity = isHovering ? 1 : 0;
</script>

<div 
	class="pride-panel"
	on:mousemove={handleMouseMove}
	on:mouseenter={() => isHovering = true}
	on:mouseleave={() => isHovering = false}
	on:click={rotateQuote}
	role="button"
	tabindex="0"
	on:keydown={(e) => e.key === 'Enter' && rotateQuote()}
>
	<div class="swirl-container" style="
		--swirl-x: {mouseX * 100}%;
		--swirl-y: {mouseY * 100}%;
		--swirl-angle: {swirlAngle}deg;
		--swirl-intensity: {swirlIntensity};
	">
		{#each Array(12) as _, i}
			<div 
				class="swirl-layer" 
				style="
					--layer: {i};
					--rotation: {swirlAngle * (1 + i * 0.08)}deg;
					--scale: {1 + (isHovering ? Math.sin(i * 0.5) * 0.05 : 0)};
				"
			>
				<div class="stripe red"></div>
				<div class="stripe orange"></div>
				<div class="stripe yellow"></div>
				<div class="stripe green"></div>
				<div class="stripe blue"></div>
				<div class="stripe purple"></div>
			</div>
		{/each}
	</div>
	<p class="centered-text">{quote}</p>
</div>

<style>
	.pride-panel {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		cursor: crosshair;
		border-right: 10px solid #313244;
		box-sizing: border-box;
	}

	.swirl-container {
		width: 100%;
		height: 100%;
		position: relative;
		transform-origin: var(--swirl-x) var(--swirl-y);
	}

	.swirl-layer {
		position: absolute;
		top: -25%;
		left: 0;
		width: 100%;
		height: 150%;
		display: flex;
		flex-direction: row;
		transform-origin: var(--swirl-x) var(--swirl-y);
		transform: rotate(var(--rotation)) scale(var(--scale));
		transition: transform 0.15s ease-out;
		opacity: calc(1 - var(--layer) * 0.07);
	}

	.stripe {
		flex: 1;
		height: 100%;
	}

	.red { background-color: #e78284; }
	.orange { background-color: #ef9f76; }
	.yellow { background-color: #e5c890; }
	.green { background-color: #a6d189; }
	.blue { background-color: #8caaee; }
	.purple { background-color: #ca9ee6; }

	.centered-text {
		position: absolute;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		margin: 0;
		width: 80%;
		font-size: 2.2rem;
		font-weight: bold;
		text-align: center;
		background: linear-gradient(
			90deg,
			#e78284,
			#ef9f76,
			#e5c890,
			#a6d189,
			#8caaee,
			#ca9ee6,
			#e78284
		);
		background-size: 200% 100%;
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
		animation: rainbow-shift 8s linear infinite;
		-webkit-text-stroke: 1px rgba(30, 30, 46, 0.5);
	}

	@keyframes rainbow-shift {
		0% { background-position: 0% 50%; }
		100% { background-position: 200% 50%; }
	}
</style>
