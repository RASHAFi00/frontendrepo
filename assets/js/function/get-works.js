



document.addEventListener("click", function (event) {
   const clickedPiece = event.target.closest(".work-piece");
   if (clickedPiece) {
      let directory = clickedPiece.getAttribute("data-directory");
      if (directory) {
         window.open(`https://rashafi00.github.io/frontendrepo/works/front-end/front-end-mentor/${directory}`, "_blank");
      }
   }
});

const displayInterface = document.querySelector("#works-interface-1");


var folderNum = 1;
var path = null;
const jsonPath = "https://rashafi00.github.io/frontendrepo/works/front-end/front-end-mentor/";
var contentPath = null;
var dataPiece = null;
var RUN = true;


async function fetchData(jsonToPath) {
   while (RUN) {
      path = `${jsonToPath}${folderNum}/piece.json`;

      try {
         const response = await fetch(path);
         if (response.ok) {
            dataPiece = await response.json();
            contentPath = ``
            displayWorks(dataPiece, folderNum);
         } else {
            console.log("Error Fetching Data : " + folderNum);
            RUN = false;
         }
      } catch (error) {
         console.log("Network error or other issue: " + error);
         RUN = false;
      }

      folderNum += 1;
   }
}

fetchData(jsonPath);

var workPiece = null;

function displayWorks(jsonObj, folder) {

   workPiece =
      `<div class="work-piece" id="work-piece">

         <div class="tags">
         ${jsonObj["tags"].map(item => ` <span class="${item}"> ${item} </span> `).join('')}
         </div>
   
         <div class="hide-overlay">
            <div class="img-disp">
               <img src="works/front-end/front-end-mentor/${folder}/${jsonObj["cover-img"]}" alt="" srcset="" id="piece-preview">
            </div>
         </div>
   
         <div class="work-piece-info">
            <h4 id="piece-title">${jsonObj["title"]}</h4>
            <p id="piece-description">${jsonObj["subtitle"]}</p>
         </div>
   
      </div>`
      ;


   displayInterface.insertAdjacentHTML('beforeend', workPiece);

   const lastAddedPiece = displayInterface.querySelector(".work-piece:last-child");
   lastAddedPiece.setAttribute("data-directory", `${folder}/${jsonObj["host-directory"]}`);

};

