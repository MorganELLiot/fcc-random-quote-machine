import React from "react"

export default function Quote() {

    const [allQuotes, setAllQuotes] = React.useState([])
    const [quote, setQuote] = React.useState({})

    const getQuotesData = async () => {
        const res = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
        const data = await res.json();
        const randomNumber = Math.floor(Math.random() * allQuotes.length)
        setAllQuotes(data.quotes);
        setQuote({
            text: data.quotes[randomNumber].quote,
            author: data.quotes[randomNumber].author
        })
    }

        React.useEffect(() => { 
            console.log("effect ran")
            getQuotesData()
        },[])

    function handleClick() {
        const randomNumber = Math.floor(Math.random() * allQuotes.length)
        const newQuoteText = allQuotes[randomNumber].quote
        const newQuoteAuthor = allQuotes[randomNumber].author  
        setQuote(prevQuote => ({
          text: newQuoteText,
          author: newQuoteAuthor
        }))
    }

    return (
        <div id="quote-box">
            <h1 id="text">{quote.text}</h1>
            <h1 id="author">{quote.author}</h1>
            <button id="new-quote" onClick={handleClick}>
                New Quote
            </button>
        </div>
    )
}