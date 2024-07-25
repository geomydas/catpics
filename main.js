(function () {
  const requestCats = async () => {
    try {
      const request = await fetch("/.netlify/functions/getCat");
      const response = await request.json();

      document.getElementById("cats-container").innerHTML =
        createCatElements(response).join("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const createCatElements = (catList) => {
    return catList.map((cat) => {
      const catPicUrl = cat.url;
      const catName = cat.breeds[0].name;
      const catDescription = cat.breeds[0].description;
      const catLocation = cat.breeds[0].origin;

      return `
        <li class="cat-card">
            <img src=${catPicUrl} alt="" class="catimage" />
            <div class="cat-info">
              <p class="catbreed">${catName}</p>
              <p class="catdescription">${catDescription}</p>
              <p class="catlocation">${catLocation}</p>
            </di>
        </li>
      `;
    });
  };

  requestCats();
})();