let imageArr = [
  "./images/cars.jpg",
  "./images/code_8.jpg",
  "./images/frozen_2.jpg",
  "./images/interstellar.jpg",
  "./images/jurassic_world.jpg",
  "./images/rabbi_jacob.jpg",
  "./images/rick_and_morty.jpg",
  "./images/spider_man.jpg",
  "./images/the_simpsons.jpg",
  "./images/toy_story_4.jpg",
  "./images/young_sheldon.jpg",
];

galery = document.querySelector("galery");
// image.forEach(p => {
//   document.querySelector(".gallery").innerHTML += `<img src="${p}"/>`;
// });

let currentPos = 0;
setImg = () => {
  if (++currentPos >= imageArr.length) currentPos = 0;
  p = imageArr[currentPos];
  document.querySelector(".gallery").innerHTML = `<img src="${p}"/>`;
};

setInterval(setImg, 1000);
