let arrlist = [];
let idnumber;
let priceamount;
let moneyprice = 0;

let fullLamount = document.getElementById("full_amount");
let fullitemsamount = document.getElementById("full_items");
let quantity = document.getElementById("quantity");

function getproduct(event) {
  x = event.target;

  let imgsrc = x.parentElement.children[0].getAttribute("src");
  idnumber = x.parentElement.children[1].textContent;
  priceamount = x.parentElement.children[4].textContent;

  productCartboximg = document.getElementsByClassName("productCartboximg");
  if (productCartboximg.length < 1) {
    if (x.textContent === "buy") {
      arrlist.push(idnumber);
      let productCart = document.getElementById("productCart");
      productCart.innerHTML += `<div class="productCartbox">
       <img  src="${imgsrc}"/>
       <p class="productCartboximg">${idnumber}</p>
       <p>${priceamount}</p>
      <button>clear</button>  
      
      <span onclick="decreasing(event)">-</span><span class="same">1</span><span onclick="increasing(event)">+</span>
      <p >full price: ${priceamount} </p> 
        </div>`;

      quantity.innerText = productCartboximg.length;
      fullamount();
      fullitems();
    }
  } else {
    if (arrlist.includes(idnumber)) {
      return;
    } else if (x.textContent === "buy") {
      arrlist.push(idnumber);
      productCart.innerHTML += `<div class="productCartbox">
              <img  src="${imgsrc}"/>
              <p class="productCartboximg">${idnumber}</p> <p>${priceamount}</p>
             <button>clear</button>
             <span onclick="decreasing(event)">-</span><span class="same">1</span><span onclick="increasing(event)">+</span>
             <p >full price: ${priceamount}</p> 
               </div>`;
      quantity.innerText = productCartboximg.length;
      fullamount();
      fullitems();
    }
  }
}

function clearproduct(event) {
  x = event.target;
  let itemnum = x.parentElement.children[1].textContent;

  if (x.textContent === "clear") {
    var index = arrlist.indexOf(itemnum);
    if (index !== -1) {
      arrlist.splice(index, 1);
    }
    x.parentElement.remove();
    quantity.innerText = productCartboximg.length;
    fullamount();
    fullitems();
  }
}

document.getElementById("same");

function decreasing(event) {
  let o = event.target;
  let testnum = o.parentElement.children[5].innerText;
  if (testnum > 1) {
    o.parentElement.children[5].innerText = parseInt(testnum) - 1;
    o.parentElement.children[7].innerText =
      "full price: " +
      (
        o.parentElement.children[5].innerText *
        parseFloat(o.parentElement.children[2].innerText)
      ).toFixed(2);
    //  if(testnum > 1 ) {
    //   testnum = testnum - 1
    //   o.parentElement.children[4].innerText = testnum
  }
  fullitems();
  fullamount();
}

function increasing(event) {
  let o = event.target;
  let testnum = o.parentElement.children[5].innerText;

  o.parentElement.children[5].innerText = parseInt(testnum) + 1;
  o.parentElement.children[7].innerText =
    "full price: " +
    (
      o.parentElement.children[5].innerText *
      parseFloat(o.parentElement.children[2].innerText)
    ).toFixed(2);
  // testnum = testnum + 1
  // // console.log(testnum)
  // // // o.parentElement.children[4].innerText = testnum
  // console.log(o.parentElement.children[4].innerText)
  fullitems();
  fullamount();
}

function fullamount() {
  let productCartboximg = document.getElementsByClassName("productCartboximg");
  if (productCartboximg.length >= 0) moneyprice = 0;
  for (let i = 0; i < productCartboximg.length; i++) {
    moneyprice +=
      parseFloat(productCartboximg[i].parentElement.children[2].textContent) *
      parseFloat(productCartboximg[i].parentElement.children[5].textContent);
  }
  fullLamount.innerText = moneyprice.toFixed(2);
}

function fullitems() {
  let productCartboximg = document.getElementsByClassName("productCartboximg");
  if (productCartboximg.length >= 0) fulllist = 0;
  for (let i = 0; i < productCartboximg.length; i++) {
    fulllist += parseFloat(
      productCartboximg[i].parentElement.children[5].textContent
    );
  }
  fullitemsamount.innerText = fulllist;
}


function orderconfirmed() {
  localStorage.setItem('full amount',moneyprice.toFixed(2))
  window.open("file:///C:/Users/gjijiashvili/Desktop/my_clock_shop/confirmPage.html", "_self")
}

function donepayment() {
  document.getElementById("confirmbox").innerHTML = `<div>
  <h1>your order is successfully confirmed</h1>
  <button onclick="backtomainpage()">Back to main Page</button>
  </div>`
}

function backtomainpage() {
window.open("file:///C:/Users/gjijiashvili/Desktop/my_clock_shop/index.html", "_self")
}

const myTimeoutt = setTimeout(getstoragevalue, 100);


function getstoragevalue() {
  let localmoney = localStorage.getItem("full amount")
  document.getElementById('paymentfullamount').innerText = "Full amount: " + localmoney + " $"
}

