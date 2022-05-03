document.addEventListener("DOMContentLoaded", () => {
    
    // DOM elements
    const button = document.querySelector("button");
    const quote = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote cite");
  
    async function updateQuote() {

        // fetch a random quote from the Quotable API
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();

        if (response.ok) {  
            // update DOM elements
            quote.textContent = data.content;
            cite.textContent = data.author;
        } 
        else {
            quote.textContent = "An error occured";
            console.log(data);
        }
    }
  
    // attach an event listener to the button
    button.addEventListener("click", updateQuote);
  
    // call updateQuote once when page loads
    updateQuote();

    // random background
    var totalCount = 7;
    function ChangeIt() {
        var num = Math.ceil( Math.random() * totalCount );
        document.body.background = "images/"+num+".jpg";
        document.body.style.backgroundPosition = "center";
    }

    //refresh background on every page reload
    ChangeIt();
});  