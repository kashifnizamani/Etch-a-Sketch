

function createGrid(numberPerRow) {
    const cdiv = document.querySelector('.container');
    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const mod = numberPerRow + 1;
  
    for (let i = 1; i < total; i++) {
      const div = document.createElement('div');
  
      if (i % mod === 0) {
        div.style.cssText = "border: 0; height: 0; width: 100%";
      } else {
        div.style.width = (500 / numberPerRow) + "px";
        div.style.height = (500 / numberPerRow) + "px";
        div.style.border = "1px solid black";
      }
  
      cdiv.appendChild(div);
    }
  }
  
  createGrid(50);
