const buttons = document.querySelectorAll(".btn");
const overview =  document.querySelector(".area-overview")
const work =  document.querySelector(".work-area")

buttons.forEach(button =>{

   button.addEventListener("click", ()=>{
    const IsOverview = button.classList.contains("btn-overview");
    

    if(IsOverview)
    {
       
        
        work.classList.contains("page-active") ? work.classList.remove("page-active") : "";
    overview.classList.contains("page-active") ? "" : overview.classList.add("page-active");
    
    }
    else
    {   overview.classList.contains("page-active") ? overview.classList.remove("page-active")  : "";
        work.classList.contains("page-active") ? "" : work.classList.add("page-active");
    }
    resetButtons();
    button.classList.add("about-active");
   });
});

function resetButtons()
{
    buttons.forEach(button =>{

        button.classList.contains("about-active") ? button.classList.remove("about-active") : "";
     });
}