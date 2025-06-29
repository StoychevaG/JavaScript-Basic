function areaOfFigures(forms, num1, num2) {
    if (forms === "square") {
      let areaSquare = num1 * num1
    console.log(areaSquare);
    } else if (forms ==="rectangle") {
        let areaRectangle = num1 * num2
    console.log(areaRectangle);
  } else if (forms === "circle") {
    let circleArea = Math.PI * num1 * num1;
    console.log(circleArea.toFixed(3));
  } else if (forms === "triangle") {
    let triangleArea = num1 * num2 / 2;
    console.log(triangleArea.toFixed(3));
  }
}
areaOfFigures("triangle", 4.5,20);
