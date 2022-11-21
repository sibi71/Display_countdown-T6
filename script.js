let sec = 10;
let  elem = document.getElementById("timer");


function updatecountdown(){
    
    elem.innerHTML=sec < 10 ? "0" + sec : sec;
    
    if(sec < 1){

        elem.innerHTML = "<h1> Happy Developers Day </h1>";
        elem.style.transition="0.5s";
        elem.style.textTransform="uppercase";
        elem.style.transform="scale(1)";
        elem.style.fontSize="60px";
        elem.style.opacity= "0.7";
        elem.style.marginTop="-30%";
        elem.style.color="white";
        document.body.style.backgroundImage= `url("bg.jpg")`;
        document.body.style.backgroundPosition="center";
        document.body.style.backgroundRepeat="no-repeat";
        document.body.style.backgroundSize="cover";
        document.body.style.height="100vh";
        
        
    }   
    sec-- ;
    

    let counter = setTimeout(updatecountdown,1000);
    
    
}
updatecountdown();