'use strict'

const wrapMainpage = document.querySelector('.warp')
const toggleBtn = document.querySelector('.toggle__button')
const sideBar= document.querySelector('.sidebar');


const page1 =  {
    title: "For their Easter basket",
    paragraph: "Surprise some bunny you love this holiday with an egg-cellent Starbucks Card.",
    button: "Send an eGift",
    image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-83500.jpg",
    }

const page2 =  {
    title: "Brighten your day",
    paragraph: "Enjoy a cheery Strawberry Coconut Drink, Paradise Drink or Dragon DrinkTM/MC Starbucks Refreshers® beverage.",
    button: "Order now",
    image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-83265.jpg",
    }

const page3 =  {
    title: "Full spring ahead",
    paragraph: "Take on today with a protein-packed Bacon, Gouda & Egg Sandwich on an artisan roll.",
    button: "Send an eGift",
    image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-83502.jpg",
    }

const page4 =  {
    title: "Delivery from our place to yours",
    paragraph: "Keep doing you, we're on the way. Place your Starbucks order for delivery - now on DoorDash. See the DoorDash app for availability and restrictions.",
    button: "Order now",
    image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-83264.png",
    }
    
const page5 =  {
    title: "Earn even more with Starbucks Rewards and TD",
    paragraph: "Link your Starbucks® Rewards account with eligible TD Cards* to start earning 50% more Stars when you order on the Starbucks app. Conditions apply.",
    button: "Start earning more",
    image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-83505.png",
    }

const page6 =  {
    title: "Learn what's new at Starbucks",
    paragraph: "Check out the latest news and stories about our partners (employees), stores and communities",
    button: "Order now",
    image: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/143-82735.jpg",
    }

    
const pages = [page1, page2, page3, page4, page5, page6]
const rightImg = [];
const leftImg = [];


pages.map((a, i) => {
    (i+1)%2 === 0 ? leftImg.push(a) : rightImg.push(a)
})    

console.log(rightImg[0])

const printMainPage = function (p, q) {

for(let i = 0; i < rightImg.length; i++) {
    
    const html = 
    `<div class="Article__main first">
    <div class="Article article right${i}">
        <div class="Article container">
            <h1 class="Article title">${p[i].title}</h1>
            <p class="Article para">${p[i].paragraph}</p>
            <button class="Article btn">${p[i].button}</button>
        </div>
    </div>
    <div class="Article image right${i}">
        <img class="Article-image" src="${p[i].image}" alt="">
    </div>
</div>

<div class="Article__main second">
            <div class="Article image left${i}">
                    <img class="Article-image" src="${q[i].image}" alt="">
            </div>
            <div class="Article article left${i}">
                <div class="Article container">
                    <h1 class="Article title">${q[i].title}</h1>
                    <p class="Article para">${q[i].paragraph}</p>
                    <button class="Article btn">${q[i].button}</button>
                </div>
            </div>
        </div>
`

    wrapMainpage.insertAdjacentHTML('beforeend', html)
    }
}

printMainPage(rightImg, leftImg);

const hideScrollBar = () => {
    if (sideBar.classList.contains('toggle')) {
        document.body.style.overflow = 'auto'
        wrapMainpage.classList.remove('hidden')
    } else {
        document.body.style.overflow = 'hidden'
        wrapMainpage.classList.add('hidden')
    }
}

toggleBtn.addEventListener('click', () => {
    sideBar.classList.toggle('toggle');
    hideScrollBar();
})


