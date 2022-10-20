function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


  function backOpen(x){
    let heightBox=document.querySelector(x);
   if(heightBox.style.height==="40rem"){
    heightBox.style.height="20rem";
   }else{
    heightBox.style.height="40rem";
   }
}


