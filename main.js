(function () {
  const requestCats = async () => {
    try {
      const request = await fetch("/.netlify/functions/getCat");
      const response = await request.json();

      console.log("Response from function:", response); // Log the response to check its format

      if (Array.isArray(response)) {
        document.getElementById("cats-container").innerHTML =
          createCatElements(response).join("");
      } else {
        console.error("Response is not an array:", response);
      }
    } catch (error) {
      console.log("Error fetching data:", error.message);
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
              <details class="catdescription-details">
                <summary class="catdescription-summary">Cat Description</summary>
                  <p class="catdescription">${catDescription}</p>
              </details>
              <p class="catlocation">${catLocation}</p>
            </div>
        </li>
      `;
    });
  };

  requestCats();
})();