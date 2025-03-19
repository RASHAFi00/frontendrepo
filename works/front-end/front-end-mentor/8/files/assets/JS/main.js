var state = 0;
var match = 1;
var mobile = null, desktop = null;

if(window.innerWidth <= 768){
   mobile = true;
   desktop = !mobile;
}
else{
   mobile = false;
   desktop = !mobile;
}
// shareOptions : (full-width)
// profile      : (gray-back)
// profile-info : (hide)
// ul           : (ballon) / (horizontial)

const profile = document.querySelector(".profile");
const shareOptions = document.querySelector(".share-options");
const profileInfo = document.querySelector(".profile-info");
const share = document.querySelector(".share-options ul");

const shareButton = document.querySelector(".share-button");


shareButton.addEventListener('click', ()=>{
   if(state)
      state = 0;
   else state = 1;
   shareButton.classList.toggle("active");

   if(mobile){
      profile.classList.toggle("gray-back");
      profileInfo.classList.toggle("hide");
      shareOptions.classList.toggle("full-width");

      share.classList.toggle("horizontial");
   }
   else{
      share.classList.toggle("ballon");
   }
});
function transform() {
   if(state && !match){
      console.log("Transforming to " + mobile);
      profile.classList.toggle("gray-back");
      profileInfo.classList.toggle("hide");
      shareOptions.classList.toggle("full-width");

      share.classList.toggle("horizontial");

      share.classList.toggle("ballon");

      match = 1;
   }
};
function viewMode(){

   if((window.innerWidth > 768) && mobile){
      mobile = false;
      desktop = !mobile;
      if(state) match = 0;
      console.log("Desktop Mode "  + match + state);
      console.log(mobile + '/' + desktop);
   }
   if((window.innerWidth <= 768) && desktop){
      mobile = true;
      desktop = !mobile;
      if(state) match = 0;
      console.log("Mobile Mode "  + match + state);
      console.log(mobile + '/' + desktop);
      
      
   }
}
window.addEventListener('resize', viewMode);
window.addEventListener('resize', transform);
