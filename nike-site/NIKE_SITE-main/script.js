const wrapper=document.querySelector(".sliderWrapper");
const menuItems=document.querySelectorAll(".menuItem");
const buyButton=document.querySelectorAll(".buyButton");
const productButton=document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const closeButton=document.querySelector(".close");
const products=[
{
    id:1,
    title:"AIR FORCE",
    price:160,
    colors:[
        {
            code:"rgb(7, 26, 66)",
            img:"images/air.jpg",
        },
        {
            code:"darkcyan",
            img:"images/air.jpg",
        },
    ],
},
{
    id:2,
    title:"AIR JORDAN",
    price:150,
    colors:[
        {
            code:"white",
            img:"images/jordan.webp",
        },
        {
            code:"orange",
            img:"images/jordan.webp",
        },
    ],
},
{
    id:3,
    title:"BLAZER",
    price:120,
    colors:[
        {
            code:"black",
            img:"images/blazer.jpg",
        },
        {
            code:"white",
            img:"images/blazer.jpg",
        },
    ],
},
{
    id:4,
    title:"CRATER",
    price:125,
    colors:[
        {
            code:"green",
            img:"images/crater.jpg",
        },
        {
            code:"pink",
            img:"images/crater.jpg",
        },
    ],
},
{
    id:5,
    title:"HIPPIE",
    price:130,
    colors:[
        {
            code:"black",
            img:"images/hippie.avif",
        },
        {
            code:"white",
            img:"images/hippie.avif",
        },
    ],
},
];

let chosenProduct=products[0];

const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSizes=document.querySelectorAll(".size");

menuItems.forEach((item,index) => {
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translateX(${-100*index}vw)`;

        chosenProduct=products[index];
        currentProductImg.src=chosenProduct.colors[0].img;
        currentProductTitle.textContent=chosenProduct.title;
        currentProductPrice.textContent="$"+chosenProduct.price;
        currentProductColors.textContent=chosenProduct.color;
    });
});

currentProductSizes.forEach((size,index)=>{
size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white";
    size.style.color="black"; 
        });
    size.style.backgroundColor="black";
    size.style.color="white";
})
})

buyButton.forEach((item,index)=>{

        item.addEventListener("click",()=>{
            window.scrollBy(0,1100);
             
});
});

productButton.addEventListener("click",()=>{
    payment.style.display="flex";
});

closeButton.addEventListener("click",()=>{
    payment.style.display="none";
});




    
    

