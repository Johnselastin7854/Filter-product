let products = {
    data: [
      {
        productName: "Regular White T-Shirt",
        category: "Topwear",
        price: "30",
        image: "https://media.istockphoto.com/id/482948743/photo/blank-white-t-shirt-front-with-clipping-path.jpg?s=612x612&w=0&k=20&c=cJG_B0mOIG42FKtC_rqIeZCClYOj7UCFNNs9WTkYEEE=",
      },
      {
        productName: "Beige Short Skirt",
        category: "Bottomwear",
        price: "49",
        image: "https://www.na-kd.com/globalassets/nakd_frilled_mini_skirt_1017-001654-0005_01c.jpg?ref=8945DF61C1",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "99",
        image: "https://media.gettyimages.com/id/481616102/photo/apple-watch-sport.jpg?s=612x612&w=gi&k=20&c=y0vleYzoJnMML_SoO_Dbq5g4c3AyAgwBnADRTQHCTXY=",
      },
      {
        productName: "Basic Knitted Top",
        category: "Topwear",
        price: "29",
        image: "https://www.vila.com/dw/image/v2/BDTC_PRD/on/demandware.static/-/Sites-pim-catalog/default/dw71ed53d6/pim-static/VL/14082783/14082783_WhiteAlyssum_003.jpg?sw=900&sh=1200",
      },
      {
        productName: "Black Leather Jacket",
        category: "Jacket",
        price: "129",
        image: "https://media.istockphoto.com/id/885931726/photo/classic-black-leather-bikers-jacket-with-lining-shot-from-the-front-and-the-back-isolated-on.jpg?s=612x612&w=0&k=20&c=RIK79l_iwY--DXrpNHW_uNgzZqQKPHK7bnmtvBVXNfY=",
      },
      {
        productName: "Stylish Pink Trousers",
        category: "Bottomwear",
        price: "89",
        image: "https://assets.ajio.com/medias/sys_master/root/20210327/wCC1/605f6bf8aeb269a9e32b7ecc/-473Wx593H-462215392-pink-MODEL.jpg",
      },
      {
        productName: "Brown Men's Jacket",
        category: "Jacket",
        price: "189",
        image: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3dc48640b55a4ec98857ae61014771ff_9366/essentials-down-jacket.jpg",
      },
      {
        productName: "Comfy Gray Pants",
        category: "Bottomwear",
        price: "49",
        image: "https://www.beyoung.in/blog/wp-content/uploads/2022/04/Grey-Pant-with-Amry-Green-Shirts-853x1024.jpg",
      },
    ],
  };
  
  
  for (let i  of products.data){
   
   
  //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    
    //price
    let price = document.createElement("h6");
   price.classList.add("product-price")
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
    // console.log(card)
  }
  
  // parameter passed from button (Parameter same as category)
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };