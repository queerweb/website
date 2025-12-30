<script>
	export let link = "#";
	export let image = "";
	export let alt = "88x31 button";
</script>

<a href={link} class="button-88x31" target="_blank" rel="noopener noreferrer">
	<img src={image} {alt} width="88" height="31" />
</a>

<style>
	.button-88x31 {
		display: inline-block;
		line-height: 0;
		transition: transform 0.2s ease;
		margin-left: 4px;
		margin-bottom: 8px;
	}

	.button-88x31:hover {
		transform: scale(1.15);
	}

	.button-88x31 img {
		width: 88px;
		height: 31px;
		image-rendering: pixelated;
	}
</style>
