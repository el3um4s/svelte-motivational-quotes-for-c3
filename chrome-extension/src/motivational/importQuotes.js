import words from "./words.js";

export default async function importQuotes(url) {
    try {
        const quotes =  await fetch(url);
        const response = await quotes.json();
        const listQuotes = response.quotes;
        return listQuotes; 
    } catch (error) {
        const listQuotes = words.motivationalQuotes;
        return listQuotes; 
    }
};
