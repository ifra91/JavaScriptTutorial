const quotes = document.querySelector("#quote");
const author = document.querySelector("#author")
const  quoBtn = document.querySelector("#quoBtn");

const generateQuotes = async() =>{
    try{
        const setHeader = {
        headers:{
            Accept: "application/json"
        }
    }
    const res = await fetch('https://motivational-spark-api.vercel.app/api/quotes/random', setHeader);
    const data = await res.json();
    quotes.innerHTML = data.quote;
    author.innerHTML = data.author;
    } catch(error){
        console.log(error);
    }  
}

quoBtn.addEventListener('click', generateQuotes);
generateQuotes();
