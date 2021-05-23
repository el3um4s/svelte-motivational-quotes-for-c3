<script>
    import Moveable from "svelte-moveable";
    const frame = {
        translate: [0, 0],
    };
    export let target;
</script>

<!-- https://daybrush.com/moveable/ -->
<Moveable
    target={target}
    draggable={true}
    throttleDrag={0}
    
    on:dragStart={({ detail: { set } }) => {
        set(frame.translate)
    }}
    on:drag={({ detail: { target, beforeTranslate }}) => {
        frame.translate = beforeTranslate;
        target.style.transform
            = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
    }}
    on:dragEnd={({ detail: { target, isDrag, clientX, clientY }}) => {}}

    resizable={true}
    throttleResize={0}
    on:resizeStart={({ detail: {target, set, setOrigin, dragStart }}) => {
        setOrigin(["%", "%"]);
        const style = window.getComputedStyle(target);
        const cssWidth = parseFloat(style.width);
        const cssHeight = parseFloat(style.height);
        set([cssWidth, cssHeight]);
        dragStart && dragStart.set(frame.translate);
    }}
    on:resize={({ detail: { target, width, height, drag }}) => {
        target.style.width = `${width}px`;
        target.style.height = `${height}px`;
        frame.translate = drag.beforeTranslate;
        target.style.transform = `translate(${drag.beforeTranslate[0]}px, ${drag.beforeTranslate[1]}px)`;
    }}
    on:resizeEnd={({ detail: { target, isDrag, clientX, clientY }}) => {}}
/>

<style>
:global(.moveable-control:not(:hover)){
    border-color:transparent!important;
    background:transparent!important;
}

:global(.moveable-line:not(:hover)){
    background:transparent!important;
}
</style>
