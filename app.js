const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

const scroll = new LocomotiveScroll({
  el: document.querySelector('#mov'),
  smooth: true
});

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});



const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const movieItems = document.querySelectorAll('.movie-list-item');
    movieItems.forEach(item => {
        const title = item.querySelector('.movie-list-item-title').textContent.toLowerCase();
        const description = item.querySelector('.movie-list-item-desc').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) { 
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

document.getElementsByClassName('fas fa-home').addEventListener('click+',()=>{
  window.location.href = "index.html";
})


