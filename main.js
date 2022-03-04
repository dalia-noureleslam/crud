
//Declaration
var productNameInp = document.getElementById("productNameInp");
var productPriceInp = document.getElementById("productPriceInp");
var productCategoryInp = document.getElementById("productCategoryInp");
var productDescInp = document.getElementById("productDescInp");


//localstorage
var productContainer;
console.log(localStorage.getItem("ourProducts"));

if (localStorage.getItem("ourProducts") != null) {
  productContainer = JSON.parse(localStorage.getItem("ourProducts"));
  displayproduct()
}
else {
  productContainer = []
}
function addproduct() {



  var product = {

    name: productNameInp.value,
    price: productPriceInp.value,
    category: productCategoryInp.value,
    desc: productDescInp.value
  }
  productContainer.push(product);
  localStorage.setItem("ourProducts", JSON.stringify(productContainer))
  displayproduct()
  clear();
}

function displayproduct() {
  var temp = ``;
  for (var i = 0; i < productContainer.length; i++) {
    temp += `   <tr>
  <td>${i}</td>
  <td>${productContainer[i].name}</td>
  <td>${productContainer[i].price}</td>
  <td>${productContainer[i].category}</td>
  <td>${productContainer[i].desc}</td>
  <td><button onclick="update(${i})" class="btn btn-warning">Update</button></td>
  <td><button onclick="deleteproduct(${i})" class="btn btn-danger">Delete</button></td>
  </tr>`

  }
  document.getElementById("tableData").innerHTML = temp
}

function clear() {

  productNameInp.value = "";
  productPriceInp.value = "";
  productCategoryInp.value = "";
  productDescInp.value = "";
}
function updateproduct() {

}

function deleteproduct(index) {
  productContainer.splice(index, 1)
  displayproduct()

}

function search() {

}

