<script>
    import color from "./color-store.js";
    export let backgroundColor = "white";

    chrome.storage.sync.get("backgroundColor", ({ backgroundColor }) => {
        $color.backgroundColor = backgroundColor;
    });

    async function setColor(){
        $color.backgroundColor = backgroundColor;
        chrome.storage.sync.set({ backgroundColor });
  
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: setPageBackgroundColor,
        });
    };

    function setPageBackgroundColor() {
        // document.body.style.backgroundColor = backgroundColor;
        chrome.storage.sync.get("backgroundColor", ({ backgroundColor }) => {
            document.body.style.backgroundColor = backgroundColor;
        });
    }

</script>

<button style="background-color:{backgroundColor}" on:click="{setColor}"></button>

<style>
    button {
        height: 30px;
        width: 30px;
        outline: none;
        margin: 10px;
        border: none;
        border-radius: 2px;
    }

    button:hover {
        box-shadow: 0 0 0 2px white, 0 0 0 4px black;
    }
</style>
