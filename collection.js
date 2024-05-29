let search=document.getElementById("search");
let products = document.getElementById("products")
let productList = products.querySelectorAll("div")

search.addEventListener("keyup", function(e){
    let enteredValue = e.target.value.toUpperCase()
    for(i=0;i<productList.length;i=i+1){
        let productName=productList[i].querySelector("p").textContent
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[i].style.display="none"
        }else{
            productList[i].style.display="block"
        }
    }
})