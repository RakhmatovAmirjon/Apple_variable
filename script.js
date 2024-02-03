let images = {
    natural: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846363993",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845699471",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845702182",
    ],
    blue: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846360609",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845698306",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845699408",
    ],
    white: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846367180",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845703044",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845705417",
    ],
    black: [
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846357018",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium_AV1_GEO_US?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845694671",
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium_AV2?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692845694625",
    ],
  };

let btns = document.querySelectorAll(".color-btn")
let pic = document.querySelector("img")
let btnLeft = document.querySelector("#change-slider1")
let btnRight = document.querySelector("#change-slider2")

let temp = "natural";
let idx = 0

btns.forEach((btn) => {
  btn.onclick = () => {
    temp = btn.getAttribute("data-color")

    pic.setAttribute("src", images[temp][0])
  }
});

btnRight.onclick = (e) => {
  let arr = images[temp];
  
  if (idx < arr.length - 1) {
    idx++;
    btnLeft.style.display = "block";
  }

  if (idx === arr.length - 1) {
    btnRight.style.display = "none";
  }

  pic.setAttribute("src", arr[idx]);
}

btnLeft.onclick = (e) => {
  let arr = images[temp]
  if (idx > 0) {
    idx--
    btnRight.style.display = "block"

  }

  if (idx === 0) {
    btnLeft.style.display = "none";
  }

  pic.setAttribute("src", arr[idx])
}