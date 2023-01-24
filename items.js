let myshop;

fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((items) => {
    myshop = items;
  });

function myGreeting() {
  console.log(myshop);
  let productAPI = document.getElementById("productAPI");
  productAPI.innerHTML = myshop
    .map(
      (item) =>
        `
        <div  id=${item.id} class="productAPIbox">
  <img src="${item.image}" />
  <p>${item.id}</p>
  <p>${item.title}</p> 
  <p>${item.category}</p>
  <p>${item.price}</p> 
       <button>buy</button>
        </div>
       
        `
    )
    .join("");
}

const myTimeout = setTimeout(myGreeting, 1500);

function inpsearch() {
  let searchbar = document.getElementById("searchbar");
  let findgenre = myshop.map((filtereditems) => {
    if (
      filtereditems.title
        .toUpperCase()
        .includes(searchbar.value.toUpperCase()) ||
      filtereditems.category
        .toUpperCase()
        .includes(searchbar.value.toUpperCase())
    ) {
      return `<div  id=${filtereditems.id} class="productAPIbox">
      <img src="${filtereditems.image}" />
      <p>${filtereditems.id}</p>
      <p>${filtereditems.title}</p> 
      <p>${filtereditems.category}</p>
      <p>${filtereditems.price}</p> 
           <button>buy</button>
            </div>`;
    }
  });
  document.getElementById("pricerange").value = "0"
  let rangevalue = document.getElementById("pricerange").value;
  document.getElementById("pricefrom").innerText =
    "price from: " + rangevalue + " $";
  document.getElementById("productAPI").innerHTML = findgenre.join("");
  let checkboxclass = document.getElementsByClassName("checkboxclass");
  console.log(searchbar.value.length);
  if (
    document.getElementsByClassName("productAPIbox").length < 19 &&
    searchbar.value.length != 0
  ) {
    checkboxclass[0].checked = false;
    checkboxclass[0].disabled = false;
    checkboxclass[1].checked = false;
    checkboxclass[2].checked = false;
    checkboxclass[3].checked = false;
    checkboxclass[4].checked = false;
    console.log(document.getElementsByClassName("productAPIbox").length);
  } else {
    checkboxclass[0].disabled = true;
    checkboxclass[0].checked = true;
    checkboxclass[1].checked = false;
    checkboxclass[2].checked = false;
    checkboxclass[3].checked = false;
    checkboxclass[4].checked = false;
  }
  if (document.getElementsByClassName("productAPIbox").length < 1) {
    document.getElementById("productAPI").innerHTML = `<h1>no result<h1>`;
  }
}

function allcategorise() {
  let checkboxclass = document.getElementsByClassName("checkboxclass");
  if (checkboxclass[0].checked == true) {
    myGreeting();
    document.getElementById("pricerange").value = "0"
    let rangevalue = document.getElementById("pricerange").value;
  document.getElementById("pricefrom").innerText =
    "price from: " + rangevalue + " $";
    document.getElementById("searchbar").value = "";
    checkboxclass[0].disabled = true;
    checkboxclass[1].checked = false;
    checkboxclass[2].checked = false;
    checkboxclass[3].checked = false;
    checkboxclass[4].checked = false;
  }

  for (let x in checkboxclass) {
    console.log(x);
  }
}

function categorise() {
  let checkboxclass = document.getElementsByClassName("checkboxclass");
  let checkboxarr = [];
  for (let i = 1; i < checkboxclass.length; i++) {
    if (checkboxclass[i].checked == true) {
      console.log(true);
      console.log(checkboxclass[i].getAttribute("name"));

      checkboxarr.push(checkboxclass[i].getAttribute("name"));
    } else {
      checkboxarr.push("false");
      console.log(false);
    }
  }

  let findgenre = myshop.map((movie) => {
    if (
      movie.category == checkboxarr[0] ||
      movie.category == checkboxarr[1] ||
      movie.category == checkboxarr[2] ||
      movie.category == checkboxarr[3]
    ) {
      checkboxclass[0].disabled = false;
      checkboxclass[0].checked = false;
      return `<div  id=${movie.id} class="productAPIbox">
      <img src="${movie.image}" />
      <p>${movie.id}</p>
      <p>${movie.title}</p> 
      <p>${movie.category}</p>
      <p>${movie.price}</p> 
           <button>buy</button>
            </div>`;
    }
  });
  document.getElementById("pricerange").value = "0"
  let rangevalue = document.getElementById("pricerange").value;
  document.getElementById("pricefrom").innerText =
    "price from: " + rangevalue + " $";
  document.getElementById("productAPI").innerHTML = findgenre.join("");
  console.log(checkboxarr.length);
  if (
    checkboxarr[0] == "false" &&
    checkboxarr[1] == "false" &&
    checkboxarr[2] == "false" &&
    checkboxarr[3] == "false"
  ) {
    myGreeting();
    checkboxclass[0].disabled = true;
    checkboxclass[0].checked = true;
  }
}

function changingprice() {
  let rangevalue = document.getElementById("pricerange").value;
  document.getElementById("pricefrom").innerText =
    "price from: " + rangevalue + " $";
  let findgenre = myshop.map((movie) => {
    if (parseFloat(movie.price) > parseFloat(rangevalue)) {
      console.log(parseFloat(movie.price));
      console.log(parseFloat(rangevalue));
      return `<div  id=${movie.id} class="productAPIbox">
        <img src="${movie.image}" />
        <p>${movie.id}</p>
        <p>${movie.title}</p> 
        <p>${movie.category}</p>
        <p>${movie.price}</p> 
             <button>buy</button>
              </div>`;
    }
  });

  document.getElementById("productAPI").innerHTML = findgenre.join("");
  let checkboxclass = document.getElementsByClassName("checkboxclass");
  checkboxclass[0].disabled = false;
  checkboxclass[0].checked = false;
  checkboxclass[1].checked = false;
  checkboxclass[2].checked = false;
  checkboxclass[3].checked = false;
  checkboxclass[4].checked = false;
}

/*
<p>${item.id}<p> 
       <p>${item.price}</p> 
       <p>${item.category}</p> 
       <p>${item.description}</p> 
       <p>${item.rating.count}</p> 
       <p>${item.rating.rate}</p> 
       <p>${item.title}</p> 
*/
