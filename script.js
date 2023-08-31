const filled = document.getElementById("filled");
const runBtn = document.getElementById("runBtn");

class DivFiller {
  constructor(color, info) {
    this.color = color;
    this.info = info;
    this.filled = 0;
  }
  fillFn1() {
    console.log("this div just filled with the color", this.color);
  }
  fillFn2() {
    console.log("this div just filled with the color", this.color);
  }
  fillFn3() {
    console.log("this div just filled with the color", this.color);
  }
  fillFn4() {
    console.log("this div just filled with the color", this.color);
  }
  fillFn5() {
    console.log("this div just filled with the color", this.color);
  }
  fillFn6() {
    console.log("this div just filled with the color", this.color);
  }

  timesFilled() {
    this.filled++;
    console.log(this.info, "times filled is ", this.filled);
  }
}

var filler = new DivFiller("bg-warning", "lorem ipsum1");
var filler2 = new DivFiller("bg-primary", "lorem ipsum2");
var filler3 = new DivFiller("bg-success", "lorem ipsum2");
var filler4 = new DivFiller("bg-danger", "lorem ipsum2");
var filler5 = new DivFiller("bg-info", "lorem ipsum2");
var filler6 = new DivFiller("bg-secondary", "lorem ipsum2");

console.log(filler);
console.log(filler2);

filler.fillFn1();
filler2.fillFn2();

const colorsArr = [
  filler.color,
  filler2.color,
  filler3.color,
  filler4.color,
  filler5.color,
  filler6.color,
];
console.log(colorsArr);

for (const element of colorsArr) {
  console.log(element);
}

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colorsArr.length);
  console.log(randomIndex);
  const item = colorsArr[randomIndex];
  filled.classList.toggle(item);
};

const result = getRandomColor(colorsArr);
console.log(result);
