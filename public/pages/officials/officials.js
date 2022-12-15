const officialsArray = [
  {
    name: "Ramsey Aaron",
    title: "President",
    yearOfService: "2021-2022",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur, dolore illum nam adipisci praesentium earum aliquam doloribus mollitia eius atque totam laborum veritatis",
    image: "images.jpeg",
  },
  {
    name: "Lucy Samuel",
    title: "Secretary",
    yearOfService: "2022-2023",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur, dolore illum nam adipisci praesentium earum aliquam doloribus mollitia eius atque totam laborum veritatis",
    image: "images.jpeg",
  },
  {
    name: "Moses Samson",
    title: "Treasurer",
    yearOfService: "2021-2022",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur, dolore illum nam adipisci praesentium earum aliquam doloribus mollitia eius atque totam laborum veritatis",
    image: "images.jpeg",
  },
  {
    name: "Vallery Rose",
    title: "Chaplain",
    yearOfService: "2022-2023",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur, dolore illum nam adipisci praesentium earum aliquam doloribus mollitia eius atque totam laborum veritatis",
    image: "images.jpeg",
  },
  {
    name: "Jane Rose",
    title: "BBIT Rep",
    yearOfService: "2021-2022",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur, dolore illum nam adipisci praesentium earum aliquam doloribus mollitia eius atque totam laborum veritatis",
    image: "images.jpeg",
  },
  {
    name: "Franklin Roberts",
    title: "Vice President",
    yearOfService: "2022-2023",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur, dolore illum nam adipisci praesentium earum aliquam doloribus mollitia eius atque totam laborum veritatis",
    image: "images.jpeg",
  },
];

function officialsFilter() {
  const filterButtons = document.querySelectorAll(".year");
  const cardItems = document.querySelectorAll(".image_and_description");

  filterButtons.forEach((btn) => {
    btn.onclick = function () {
      filterButtons.forEach((btn) => {
        btn.className = "year";
      });
      btn.className = "active";
      const value = btn.textContent;
      cardItems.forEach((cardItem) => {
        cardItem.style.display = "none";
        if (
          cardItem.getAttribute("data-filter") == value.toLowerCase() ||
          value == "All"
        ) {
          cardItem.style.display = "flex";
        }
      });
    };
  });
}
const officialsWrapper = document.querySelector(".wrapper");

function displayOfficials() {
  let displayOfficial = officialsArray.map((official) => {
    return `<div class="image_and_description flex" data-filter=${
      official.yearOfService
    }>
        <div>
          <div class="image">
            <img src=${official.image} alt="image of a person" />
          </div>
          <div class="icons">
            <button><i class="fa fa-trash" aria-hidden="true"></i></button>
            <button>
              <i class="fa fa-info-circle" aria-hidden="true"></i>
            </button>
            <button><i class="fa fa-pencil" aria-hidden="true"></i></button>
          </div>
        </div>
        <div class="description">
          <div class="name_and_details">
            <div class="name">
              <p>${official.name}</p>
            </div>
            <div class="title">
              <p>${official.title}</p>
              <span class="service-year">${official.yearOfService}</span>
            </div>
            <div class="details">
            <p class="detail">${official.message.slice(0, 152) + " ...."}</p >
            <button class="btn-more">More Details</button>
            </div>
          </div>
        </div>
      </div>
      `;
  });
  displayOfficial = displayOfficial.join("");
  officialsWrapper.innerHTML = displayOfficial;
}

displayOfficials();
officialsFilter();
