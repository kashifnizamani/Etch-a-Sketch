
const createBtn = document.createElement("button");
createBtn.textContent = "Create New Grid";
const body = document.querySelector(".container");
body.appendChild(createBtn);


function createGrid(numberPerRow) {
    const container = document.querySelector('.container');
    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const mod = numberPerRow + 1;
  
    for (let i = 1; i < total; i++) {
      const div = document.createElement('div');
      div.classList.add("square");
      if (i % mod === 0) {
        div.style.cssText = "border: 0; height: 0; width: 100%";
      } else {
        div.style.width = (700 / numberPerRow) + "px";
        div.style.height = (700 / numberPerRow) + "px";
        div.style.border = "1px solid black";
      }
  
      container.appendChild(div);
    }
   
    
  }
  
  createGrid(50);

  function RGBcolor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let randomcolor = "rgb(" + R + "," + G + "," + B + ")";  
     return randomcolor;
  }
  

  const elements = document.querySelectorAll('.square');

  elements.forEach(element => {
    element.addEventListener('mouseover', () => {

        element.style.backgroundColor = RGBcolor();

    });
});


  


