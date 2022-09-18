function openNav() {
    document.getElementById("myNav").style.width = "100%";
    ShowModal();
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  const modal = document.querySelector("#modal");

  const ShowModal =()=> {
      // modal.classList.toggle("overlay");
      let body = document.getElementById("body");
      body.style.overflow = "hidden";
      // if (!modal.classList.contains("overlay")) {
      //     // Disable scroll
      //     body.style.overflow = "hidden";
      // } else {
      //     // Enable scroll
      //     body.style.overflow = "auto";
      // }
  };