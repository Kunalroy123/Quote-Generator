const btn1 = document.getElementById('btn1');
const quotes = document.getElementById('quotes');
const authors = document.getElementById('authors');
const body = document.body;


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


btn1.addEventListener('click', function() {
    fetchUrl();
})

const base_url = "https://quotes-api-self.vercel.app/quote";

async function fetchUrl() {
    try {
        let response = await fetch(base_url);
        console.log(response);
        let data = await response.json();
        
        // Check if data is valid before updating the DOM
        if (data && data.quote && data.author) {
            quotes.innerText = `" ${data.quote} "`;
            authors.innerText = data.author;
        }

        body.style.backgroundColor = getRandomColor(); 

    } catch (error) {
        console.error("Error fetching quote: ", error);
    }
}
fetchUrl();


function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quotes.innerText + " --- by " + authors.innerText, "Tweet Window", "width=600", "height=300");
};


 

