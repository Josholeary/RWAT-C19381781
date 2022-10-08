//array of images
let catsImages = [
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
	"https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no"
];



let catVideo = "https://youtu.be/jUD_hvfERfI";

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catsImages.length)
    imgs[i].src = catsImages[randomImg]
}

//replace iframes with cat video
const iframe = document.getElementsByTagName("iframe");
    for( let i = 0; i < iframe.length; i++)
    {
        iframe[i].src = catVideo;
    }

//do the same for headers
const h1 = document.getElementsByTagName("h1");
for (let i = 0; i < h1.length; i++){
    h1[i].innerText = "Cats are awesome.";
    h1[i].style.color = "red"
}

const  h2 = document.getElementsByTagName("h2");
for (let i = 0; i < h2.length; i++)
{
    h2[i].innerText = "Cats are breathtaking.";
    h2[i].style.color = "blue"
}

const  h3 = document.getElementsByTagName("h3");
for (let i = 0; i < h3.length; i++)
{
    h3[i].innerText = "Cats are stupendous.";
    h3[i].style.color = "green"
}

const  h4 = document.getElementsByTagName("h4");
for (let i = 0; i < h4.length; i++)
{
    h4[i].innerText = "Cats are extraordinary.";
    h4[i].style.color = "orange"
}

const  h5 = document.getElementsByTagName("h5");
for (let i = 0; i < h5.length; i++)
{
    h5[i].innerText = "Cats are incredible.";
    h5[i].style.color = "purple"
}

const  h6 = document.getElementsByTagName("h6");
for (let i = 0; i < h6.length; i++)
{
    h6[i].innerText = "Cats are magnificent.";
    h6[i].style.color = "yellow"
}

//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "ฅ^•ﻌ•^ฅ";
}

//and span too
const span = document.getElementsByTagName("span");
for (let i = 0; i< span.length; i++)
{
    span[i].innerText = "Big fluffy cats."
}

//cats in politics for list elements
const list = document.getElementsByTagName("ul");
for (let i = 0; i< list.length; i++)
{
    list[i].innerText = "Cat for government.";
}

const tables = document.getElementsByTagName("table");
for (let i=0; i<tables.length; i++)
{
    tables[i].innerText = "This is our table now MEOWWWW!! =＾● ⋏ ●＾=";
}





