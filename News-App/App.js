const API_KEY = "8eac3e01839c49a79994fb5fe00bf541";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load',()=> fetchNews("India"));

async function fetchNews(query){
    const res=await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data=await res.json();
    // console.log(data);
    bindData(data.articles);
}

function bindData(articles){
    const cardContainer=document.getElementById('cards-container');
    const newsCardTemplate=document.getElementById('template-news-card');

    cardContainer.innerHTML='';
 
    articles.forEach(article=>{
        if(!article.urlToImage) return;
        const cardClone=newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone,article);
        cardContainer.appendChild(cardClone);
    }); 
}

function fillDataInCard(cardClone,article){
    const newsImg=cardClone.querySelector('#news-img');
    const newsTitle=cardClone.querySelector('#news-title');
    const newsSource=cardClone.querySelector('#news-source');
    const newsDesc=cardClone.querySelector('#news-desc');

    newsImg.src=article.urlToImage;
    newsTitle.innerHTML=article.title;
    newsDesc.innerHTML=article.description;

    // const Date=new Date(article.publishedAt).toLocaleString("en-Us",{
    //     timeZone:"Asia/Jakarta"
    // });

    newsSource.innerHTML=`${article.source.name}`;

    cardClone.firstElementChild.addEventListener('click',()=>{
        window.open(article.url,"_blank");
    });
}

function onNavItemClick(id){
    fetchNews(id);
    

}