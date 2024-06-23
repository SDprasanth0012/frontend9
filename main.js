let flag =true;
const shareBtn = document.querySelector(".share-btn");
const shareBlock = document.querySelector(".share")
shareBtn.addEventListener('click', (event)=>{
    if(flag){
        shareBlock.style.display="none";
        flag = false;
    }
    else{
        shareBlock.style.display="flex";
        flag = true;
    }
})