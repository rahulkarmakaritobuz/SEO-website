// Navbar mouse scrolling lock
const luxbar = document.getElementById("luxbar");

luxbar.onmouseover = function(){
   document.body.style.overflowY = "hidden";
};

luxbar.onmouseout = function(){
   document.body.style.overflowY = "auto";
};

//Form validation
let validateEmail=(mail) =>{
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
     {
       return (true)
     }
       alert("You have entered an invalid email address!")
       return (false)
   }

let formBoxSubmit = () =>{
    const name=document.getElementById('formBox-name').value.trim();
    const email=document.getElementById('formBox-email').value.trim();
    let nameStatus=true;
    if(name==="" || name===null){
        alert("Please provide a name");
        nameStatus=false;
    }
    console.log(email);
    let emailStatus=validateEmail(email);
    console.log(emailStatus);
    if(nameStatus===true && emailStatus===true){
        let status=document.getElementById('suscribe');
        status.innerHTML="Your data successfully submitted!";

        setTimeout(function (){
            status.innerHTML="";
        },5000);
    }
}

let speedCheckSubmit = ()=>{
    const link=document.getElementById('speedCheck-url').value.trim();
    const email=document.getElementById('speedCheck-email').value.trim();
    // console.log(new URL(link));
    let linkDetails;
    try{
        linkDetails=new URL(link);
    }
    catch(erron){
        alert("Invalid URL!");
    }
    let emailStatus=validateEmail(email);
    if(linkDetails!==undefined && emailStatus===true){
        let status=document.getElementById('submitStatus');
        status.innerHTML="Your data successfully submitted!";

        setTimeout(function (){
            status.innerHTML="";
        },5000);
    }    
}

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: "2",
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
