<script>
    import { onMount } from "svelte";
    import importQuotes from "./importQuotes.js";

    import Pane from "./Pane.svelte";

    let url = "https://raw.githubusercontent.com/el3um4s/construct-plugins-and-addons/master/motivational-quotes/helpers/motivational-quotes.json"
    let id = "motivational-quote";
    let title = "Motivational Quote";
    let quote = null;
    let author = null;
    let listQuotes = [];
    let isVisible = true;

    onMount(async () => {
        await getQuotes();
    });

    function onNewQuote() {
        const randomQuote = listQuotes[Math.floor(Math.random()*listQuotes.length)];
        quote = randomQuote.quote;
        author = randomQuote.author;
    };

    async function getQuotes() {
        const list = await importQuotes(url);
        listQuotes = [...list];
        onNewQuote();
    } 

</script>


<Pane {id} {isVisible} on:newQuote={onNewQuote}>
    <span slot="title">{title}</span>
    <span slot="quote">{quote}</span>
    <span slot="author">{author}</span>
</Pane>