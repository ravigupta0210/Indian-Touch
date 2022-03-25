const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "BAMBOO BASKET",
    price: 250,
    colors: [
      {
        
        img: "./img/png-clipart-japan-basket-weaving-bamboo-bamboo-craft-bamboo-leaves-fine-thumbnail.png",
      },
    ],
  },
  {
    id: 2,
    title: "Pottery",
    price: 65000,
    colors: [
      {
        img: "./img/512.png",
      },
      
    ],
  },
  {
    id: 3,
    title: "Leather Items",
    price: 1250,
    colors: [
      {
        
        img: "./img/Leather Crafts.png",
      },
     
    ],
  },
  {
    id: 4,
    title: "Woodwork",
    price: 1500,
    colors: [
      {
        
        img: "./img/woodcarving2.png",
      },
      
    ],
  },
  {
    id: 5,
    title: "Brass Handicrafts",
    price: 950,
    colors: [
      {
        img: "./img/brass-handicrafts-500x500.png",
      },
      
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});