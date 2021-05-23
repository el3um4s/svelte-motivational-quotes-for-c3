<script>
    import MoveablePane from "./MoveablePane.svelte";
    import Caption from "./Caption/Caption.svelte";
    
    export let id = "motivational-quote";
    export let title = "Motivational Quote";
    export let isVisible = true;
    
    let target;

    function onClose() { isVisible = false; }
    // function onNewQuote() { console.log("new quote")};
</script>


{#if isVisible}
    <MoveablePane {target}></MoveablePane>

    <ui-pane
            captioned 
            role="complementary" 
            id="{id}" 
            class="motivationalquote target"
            bind:this={target}
            >
        <Caption on:close={onClose} on:newQuote><slot name="title">{title}</slot></Caption>
        <ui-body row2>
            {#if $$slots.quote}
                <blockquote class="quote">
                    <slot name="quote"></slot>
                </blockquote>
            {/if}
            {#if $$slots.author}
                <div class="author">
                    <slot name="author"></slot>
                </div>
            {/if}
        </ui-body>
    </ui-pane>
{/if}


<style>
    ui-pane {
        position: absolute;
        width: 360px;
        height: 150px;
        top: 50px;
        left: 50px;
        z-index: 1;
        border-radius: var(--window-border-size);
        box-shadow: 0 7px 7px 0 rgba(0,0,0,.26);
        resize: both;
    }
    
    .author {
        text-align: right;
        padding: 1em;
    }
</style>