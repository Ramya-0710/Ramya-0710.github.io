const products = [ 
      {
        name:"Laptop",
        price:800,
        category:"Electronics",
        imgUrl:"https://picsum.photos/id/1/300/350",
      },
      { 
        name:"Smartphone",
        price:600,
        category:"Electronics",
        imgUrl:"https://picsum.photos/id/2/300/350", 
      },
        {
        name:"Desk Chair",
        price:120,
        category:"Furniture",
        imgUrl:"https://picsum.photos/id/3/300/350",
        },
        {
        name:"Coffee Maker",
        price:80,
        category:"Appliances",
        imgUrl:"https://picsum.photos/id/4/300/350",
        },
        {
        name:"Headphones",
        price:150,
        category:"Electronics",
        imgUrl:"https://picsum.photos/id/5/300/350",
        },
        {
        name:"Running Shoes",
        price:100,  
        category:"Footwear",
        imgUrl:"https://picsum.photos/id/6/300/350",
        },
    ];
    function displayProducts() {
        let str=`<div class="row">`;
        products.map(e=>{
            str=str+`
            <div class="box">
           <img src=${e.imgUrl}/>
           <h3>${e.name}</h3>
            <p>${e.price}</p>
            <h5>${e.category}</h5>
            <button>Add to Cart</button>
            <h5>                </h5>
            </div>`
        })
        str=str+`</div>`;
        root.innerHTML=str;
        
    }
