<script>
	import Popup from "./popup/Popup.svelte";
</script>

<Popup></Popup>

<style>
	:global(html,body){
        width: 256px;
        height: auto;
        font-size: medium;
		padding: 0px;
		margin: 0px;
		background-color: #F4ECE1;
		color: #1F1B0F;
	}
	:global(body){
		position: absolute;
		height: auto;
	}
</style>