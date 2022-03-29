import React from "react"
import {SocialIcon} from "react-social-icons";

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
            getQuotesData()
        },[])

    function handleClick() {
        const randomNumber = Math.floor(Math.random() * allQuotes.length)
        const newQuoteText = allQuotes[randomNumber].quote
        const newQuoteAuthor = allQuotes[randomNumber].author  
        setQuote({
          text: newQuoteText,
          author: newQuoteAuthor
        })
    }

    return (
        <div id="quote-box">
            <div id="quote">
                <h1 id="text">{quote.text}</h1>
                <h1 id="author">{quote.author}</h1>
                <button id="new-quote" onClick={handleClick}>
                    New Quote
                </button>
            </div>
            <div id="social-links">
                <SocialIcon url="https://twitter.com/intent/tweet" bgColor="#777">
                    <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="blank"></a>
                </SocialIcon>
            </div>
        </div>
    )
}