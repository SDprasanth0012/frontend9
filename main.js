document.addEventListener("DOMContentLoaded", () => {
    const shareIcon = document.getElementById("share-icon");
    const shareIconHidden = document.getElementById("share-icon-hidden");
    const shareContainer = document.getElementById("share-container");
    const triangle = document.getElementById("triangle");
  
    shareIcon.addEventListener("click", () => {
      shareContainer.classList.toggle("active");
    });
  
    shareIconHidden.addEventListener("click", () => {
      shareContainer.classList.remove("active");
    });
  });
  console.log("helloworld")