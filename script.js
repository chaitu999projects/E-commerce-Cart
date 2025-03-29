const productData = [
  {
    id: 1,
    name: "Fire Boltt Ninja 2",
    img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
    amt: 1599,
    seller: "Boltt Store",
    catagory: "Watch",
  },

  {
    id: 2,
    name: "Noise Pulse Go",
    img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
    amt: 1300,
    seller: "Noise Store",
    catagory: "Watch",
  },

  {
    id: 3,
    name: "boAt Xtend Pro",
    img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
    amt: 2799,
    seller: "Rajesh Watchs",
    catagory: "Watch",
  },
  {
    id: 4,
    name: "Lenovo Tab M8",
    img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
    amt: 9270,
    seller: "Stonehenge Retail",
    catagory: "Tablets",
  },
  {
    id: 5,
    name: "Honor PAD X8",
    img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
    amt: 12999,
    seller: "Honor india",
    catagory: "Tablets",
  },

  {
    id: 6,
    name: "IKALL N9 ",
    img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
    amt: 3999,
    seller: "IKALL Store",
    catagory: "Tablets",
  },

  {
    id: 7,
    name: "Oppo Pad Air",
    img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
    amt: 15999,
    seller: "Oppo Store",
    catagory: "Tablets",
  },
  {
    id: 8,
    name: "Acer EK220Q",
    img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
    amt: 6249,
    seller: "Accer Store",
    catagory: "Monitors",
  },
  {
    id: 9,
    name: "Samsung 24",
    img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
    amt: 9799,
    seller: "Samsung Store",
    catagory: "Monitors",
  },

  {
    id: 10,
    name: "ZEBRONICS AC32FHD ",
    img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
    amt: 12799,
    seller: "ZEBRONICS Store",
    catagory: "Monitors",
  },
];

//for images or cards
const productSection = document.getElementById("productSection");
//For input or user search ...
const userInput = document.getElementById("txtSearch");

//Items Only One Item Adding after Iterates all items or card using for of loop bellow
let mainFunction = function productsOfCart(prjData) {
  let imgId = "img" + prjData.id;
  //card Container
  let cardContainer = document.createElement("div");
  cardContainer.classList.add("product");
  productSection.appendChild(cardContainer);

  //cardBody
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img");
  cardContainer.appendChild(imgContainer);

  //image
  let imgEle = document.createElement("img");
  imgEle.id = imgId;
  imgEle.setAttribute("src", prjData.img);
  imgEle.setAttribute("alt", prjData.name);
  imgContainer.appendChild(imgEle);

  //prooductsDetails container
  let detailsConatiner = document.createElement("div");
  detailsConatiner.classList.add("product-details");
  cardContainer.appendChild(detailsConatiner);

  //spanEle1
  let spanEle1 = document.createElement("span");
  spanEle1.classList.add("name");
  spanEle1.textContent = prjData.name;
  detailsConatiner.appendChild(spanEle1);

  //spanEle2
  let spanEle2 = document.createElement("span");
  spanEle2.classList.add("amt");
  spanEle2.textContent = `Rs. ${prjData.amt}`;
  detailsConatiner.appendChild(spanEle2);

  //spanEle3
  let spanEle3 = document.createElement("span");
  spanEle3.classList.add("seller");
  spanEle3.textContent = prjData.seller;
  detailsConatiner.appendChild(spanEle3);

  //console.log(productSection);
};

//If any letter match the entered letter a to z or A to  Z 1 to any display the product...........
function filterProducts() {

  const searchQuery = userInput.value.trim().toLowerCase();
  productSection.innerHTML = ""; // Clear current results

  const filteredProducts = productData.filter((product) => {
    return (product.name.toLowerCase().includes(searchQuery) || product.seller.toLowerCase().includes(searchQuery));
  });

  filteredProducts.forEach((product) => mainFunction(product));
}
userInput.addEventListener("input", filterProducts);



let categoryList =  document.getElementById('categoryList');

// Function to filter products by category
function filterByCategory(category) {
    productSection.innerHTML = ""; // Clear current results
  
    let filteredProducts = productData;

    if (category !== "all") {
      filteredProducts = productData.filter(
        (product) => product.catagory.toLowerCase() === category.toLowerCase()
      );
    }
  
    filteredProducts.forEach((product) => mainFunction(product));
  }
  
  // Handle category clicks
  categoryList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const selectedCategory = e.target.getAttribute("value");
      filterByCategory(selectedCategory);
    }
  });

  //input type range id tekes using DOM
  const priceRange = document.querySelector("#priceRange");
  
  //class tekes using DOM
  const priceValue = document.querySelector(".priceValue");
  //If user incresing or decreasing the price showing how many items in that price
  function setPricesRange() {
    const priceList = productData.map((product) => product.amt);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
    
    // Set initial slider values
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice; // Default to max price
    priceValue.textContent = "Rs." + maxPrice;
  
    // Filter products when slider changes
    priceRange.addEventListener("input", (e) => {
      const selectedPrice = parseInt(e.target.value);
      priceValue.textContent = "Rs." + selectedPrice;
  
      // Clear and re-render products based on price
      productSection.innerHTML = "";
      const filteredProducts = productData.filter(
        (product) => product.amt <= selectedPrice
      );
      filteredProducts.forEach((product) => mainFunction(product));
    });
  }


  //Repitation products
  for (let itemsOfData of productData) {
    mainFunction(itemsOfData);
  }

  //filter products
  filterProducts();
  
  // Initial load (show all products)
  filterByCategory("all");
//setPricerange
  setPricesRange();



