const navBarEl = document.querySelector(".navbar");
console.log(navBarEl.offsetHeight);
const buttomContainerEl = document.querySelector(".bottom-nav")
console.log(buttomContainerEl.offsetTop);
window.addEventListener("scroll",()=>{
    if (window.scrollY > buttomContainerEl.offsetTop - 
        navBarEl.offsetHeight - 20){
            navBarEl.classList.add("active");
    }else{
        navBarEl.classList.remove("active");
    }
})