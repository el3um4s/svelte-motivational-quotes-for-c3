<script>
    export let title = null;
    export let id = null;
</script>

<ui-close-button {title} {id} on:click>
    <slot></slot>
</ui-close-button>