<script>
    let linkGithub = "https://github.com/el3um4s/svelte-motivational-quotes-for-c3";
    let linkPatreon = "https://patreon.com/el3um4s";
    let linkPaypal = "https://www.paypal.me/el3um4s";
</script>

<div class="popup">
    <div class="item title center">
        <h3>Motivational Quotes</h3>
    </div>
    <div class="item info center">
        <p><em>Shows a motivational quote when you launch Construct 3.</em></p>
    </div>
    <hr>
    <div class="item info">
        <p>This Chrome extension is a test project. I wanted to try and create something with <a href="https://svelte.dev/" target="_blank">Svelte</a> and <a href="https://www.construct.net" target="_blank">Construct 3</a>.</p>
        <p>I uploaded the source code to <a href="{linkGithub}" target="_blank">GitHub</a>.</p>
        <p>If you like you can support my experiments with <a href="{linkPatreon}" target="_blank">Patreon</a> or <a href="{linkPaypal}" target="_blank">Paypal</a>.</p>
    </div>
</div>

<style>

.popup{
    position: absolute;
    top: 0px;
    left: 0px;
    padding:0px;
    margin: 0px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: normal;
    align-items: normal;
    align-content: normal;
}

.center {
    text-align: center;
}

.item {
    display: block;
    flex-grow: 0;
    flex-shrink: 1;
    flex-basis: auto;
    align-self: auto;
    order: 0;
}

.title {
    font-style: normal;
    font-size: large;
    background-color: #ED6E0F;
}

.info {
    padding: 8px;
    font-style: normal;
    font-size: medium;
}

a {
    color: #794218;
    font-weight: bold;
}

hr {
    border-color: #ED6E0F;
    width: 100%;
}
</style>