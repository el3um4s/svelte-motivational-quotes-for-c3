<script>
    import { createEventDispatcher } from "svelte";

    import Button from "./Button.svelte";
    
    const dispatch = createEventDispatcher();

    function close() {
        dispatch("close");
    }

    function newQuote() {
        dispatch("newQuote");
    }
</script>

<ui-caption>  
    <span class="pane-caption-text"><slot>TITLE</slot></span>
    <Button title="New Quote" on:click={newQuote}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path d="M11,4C13.05,4 15.09,4.77 16.65,6.33C19.78,9.46 19.77,14.5 16.64,17.64C14.81,19.5 12.3,20.24 9.91,19.92L10.44,17.96C12.15,18.12 13.93,17.54 15.24,16.23C17.58,13.89 17.58,10.09 15.24,7.75C14.06,6.57 12.53,6 11,6V10.58L6.04,5.63L11,0.68V4M5.34,17.65C2.7,15 2.3,11 4.11,7.94L5.59,9.41C4.5,11.64 4.91,14.39 6.75,16.23C7.27,16.75 7.87,17.16 8.5,17.45L8,19.4C7,19 6.12,18.43 5.34,17.65Z"></path>
        </svg>
    </Button>
    <Button title="Close" on:click={close}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="  #b8b8b8" height="48" viewBox="0 0 24 24" width="48">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
    </Button>
</ui-caption>
