const  search =  document.getElementById("search"); 

search.onclick =   function(){
    let input =   document.getElementById("input"); 

    input.style.visibility =   "visible";
}



let  noti  =  document.querySelector(".product") 

noti.addEventListener("click", function(){

    alert("out of  stock")
})


let  shopnow  =  document.querySelector("#shop-now"); 

shopnow.herf = 'product.html';