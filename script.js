
const createBtn = document.querySelector(".button");


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
        div.style.width = (600 / numberPerRow) + "px";
        div.style.height = (600 / numberPerRow) + "px";
        div.style.border = "1px solid black";
      }
  
      container.appendChild(div);
    }
    let square = document.querySelectorAll('.square');
square.forEach(square => {
  square.addEventListener('mouseover', () => {

      square.style.backgroundColor = RGBcolor();

  });
});
   
    
  }
  
  createGrid(16);

  function RGBcolor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    let randomcolor = "rgb(" + R + "," + G + "," + B + ")";  
     return randomcolor;
  }
  
createBtn.addEventListener("click", ()=> {
   
 let size = prompt("provide the grid size between 1 and 100");
  if(size > 0 && size <= 100){
   const elements =  document.querySelectorAll(".square");
   elements.forEach(element => element.remove()
   )
   
    createGrid(Number(size));
  }
  else{
    alert("please provide a valid size")

  }
   
})



  


