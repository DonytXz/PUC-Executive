let val = getParam("name");
// console.log(val);
conditionalRender(val);

function getParam(paramName) {
  let parameters = new URLSearchParams(window.location.search);
  return parameters.get(paramName);
}

function initHtml(title, imgSrc) {
  let productTitle = document.getElementById("title-product");
  let img = document.getElementById("img-product");
  productTitle.innerText = title
  img.src = imgSrc;  
  
}

function conditionalRender(name) {
  switch (name) {
    case "red-blouse":
        initHtml("Red blouse", "./img/1.0.jpg");
      break;
    case "black-blouse":
      initHtml("Black blouse", "./img/2.0.jpg");
      break;
    case "brown-shirt":
      initHtml("Brown shirt", "./img/3.jpg");
      break;
    case "orange-blouse":
      initHtml("Orange blouse", "./img/4.0.jpg");
      break;
    case "top-gray":
      initHtml("Top Gray", "./img/5.jpg");
      break;
    default:
      break;
  }
}
