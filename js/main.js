const menuNavegador = document.querySelector(".menuNavbar");
const btnCloseNavbar = document.querySelector(".toggleMenu")

const menuUser = document.querySelector(".userControls");
const btnCloseUser = document.querySelector("#closeUser")

const menuShopping = document.querySelector(".shoping_cart");
const btnCloseShops = document.querySelector(".toggleShop");

//aside
const asideContent = document.querySelector("#product_details");
const btnCloseAside  = document.querySelector("#closeAside");


btnCloseUser.addEventListener("click",toggleNavegacionUser,false);
btnCloseNavbar.addEventListener("click",toggleNavegacionNavegador,false);
btnCloseShops.addEventListener("click",toggleShopCart,false)
btnCloseAside.addEventListener("click",closeAsideProducts)

addShopsList()

function openAsideProducts(){
    if(!menuShopping.classList.contains("close")){
        menuShopping.classList.add("close")
        btnCloseShops.classList.remove("actived")
    }
    asideContent.classList.remove("close")
}

function closeAsideProducts(){
    asideContent.classList.add("close")
}

function toggleNavegacionUser(){
    if(!menuShopping.classList.contains("close")){
        menuShopping.classList.add("close")
        btnCloseShops.classList.remove("actived")
    }
    btnCloseUser.classList.toggle("actived")
    menuUser.classList.toggle("close")
}

function toggleNavegacionNavegador(){
    if(menuNavegador.classList.contains("close")){
        document.querySelector("html").style.overflow="hidden"
    }else{
        document.querySelector("html").style.overflow=""
    }
    btnCloseNavbar.classList.toggle("actived")
    menuNavegador.classList.toggle("close")
}

function toggleShopCart(){
    if(!menuUser.classList.contains("close")){
        menuUser.classList.add("close")
        btnCloseUser.classList.remove("actived")
    }
    btnCloseShops.classList.toggle("actived")
    menuShopping.classList.toggle("close")
}

function addShopsList(){
    const products= [
        {
            title:"uno prueba",
            img:"https://previews.123rf.com/images/talex/talex1604/talex160400038/55679975-educaci%C3%B3n-plana-icono-por-folleto-cartel-sitio-web-como-prueba-l%C3%A1piz-y-cron%C3%B3metro-.jpg?fj=1",
            price:"$33.333"
        },
        {
            title:"dos prueba",
            img:"https://previews.123rf.com/images/talex/talex1604/talex160400038/55679975-educaci%C3%B3n-plana-icono-por-folleto-cartel-sitio-web-como-prueba-l%C3%A1piz-y-cron%C3%B3metro-.jpg?fj=1",
            price:"$2.323"
        },
        {
            title:"tres prueba",
            img:"https://previews.123rf.com/images/talex/talex1604/talex160400038/55679975-educaci%C3%B3n-plana-icono-por-folleto-cartel-sitio-web-como-prueba-l%C3%A1piz-y-cron%C3%B3metro-.jpg?fj=1",
            price:"$332.333"
        },
        {
            title:"tres prueba",
            img:"https://previews.123rf.com/images/talex/talex1604/talex160400038/55679975-educaci%C3%B3n-plana-icono-por-folleto-cartel-sitio-web-como-prueba-l%C3%A1piz-y-cron%C3%B3metro-.jpg?fj=1",
            price:"$332.333"
        },
        {
            title:"tres prueba",
            img:"https://previews.123rf.com/images/talex/talex1604/talex160400038/55679975-educaci%C3%B3n-plana-icono-por-folleto-cartel-sitio-web-como-prueba-l%C3%A1piz-y-cron%C3%B3metro-.jpg?fj=1",
            price:"$332.333"
        }
    ];

    for(product of products){
        const productCard = document.createElement("div");
        productCard.classList.add("product_shop");

        
        const productInformation =document.createElement("article");
        productInformation.classList.add("information");

        const productTitle = document.createElement("h4");
        productTitle.innerText=product.title;

        const productPrice = document.createElement("p");
        productPrice.innerText=product.price;

        const shopButton = document.createElement("span");
        shopButton.classList.add("material-symbols-outlined")
        shopButton.classList.add("pay_shop");
        shopButton.innerText="shopping_cart_checkout";

        productInformation.appendChild(productTitle) 
        productInformation.appendChild(productPrice)
        productInformation.appendChild(shopButton);

        const productFigure = document.createElement("figure");
        
        const productImg = document.createElement("img");
        productImg.setAttribute("src",product.img);

        productFigure.appendChild(productImg);
        productImg.addEventListener("click",openAsideProducts)

        productCard.appendChild(productInformation);
        productCard.appendChild(productFigure);

        menuShopping.appendChild(productCard)

    }
}



