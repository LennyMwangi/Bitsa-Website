const officialsArray = [
  {
    name: "Ramsey Aaron",
    title: "President",
    yearOfService: "2021-2022",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur, dolore illum nam adipisci praesentium earum aliquam doloribus mollitia eius atque totam laborum veritatis",
    image: "/images/images.jpeg",
    id: 0,
  },
  {
    name: "Lucy Samuel",
    title: "Secretary",
    yearOfService: "2022-2023",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur, dolore illum nam adipisci praesentium earum aliquam doloribus mollitia eius atque totam laborum veritatis",
    image: "/images/images.jpeg",
    id: 1,
  },
  {
    name: "Moses Samson",
    title: "Treasurer",
    yearOfService: "2021-2022",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur, dolore illum nam adipisci praesentium earum aliquam doloribus mollitia eius atque totam laborum veritatis",
    image: "/images/images.jpeg",
    id: 2,
  },
  {
    name: "Vallery Rose",
    title: "Chaplain",
    yearOfService: "2022-2023",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur, dolore illum nam adipisci praesentium earum aliquam doloribus mollitia eius atque totam laborum veritatis",
    image: "/images/images.jpeg",
    id: 3,
  },
  {
    name: "Jane Rose",
    title: "BBIT Rep",
    yearOfService: "2021-2022",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur, dolore illum nam adipisci praesentium earum aliquam doloribus mollitia eius atque totam laborum veritatis",
    image: "/images/images.jpeg",
    id: 4,
  },
  {
    name: "Franklin Roberts",
    title: "Vice President",
    yearOfService: "2022-2023",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, consequuntur, dolore illum nam adipisci praesentium earum aliquam doloribus mollitia eius atque totam laborum veritatis",
    image: "/images/images.jpeg",
    id: 5,
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
  let count = 80;
  officialsArray.forEach((official) => {
    let parentDiv = document.createElement("div");
    parentDiv.classList.add("image_and_description");
    parentDiv.classList.add("flex");
    parentDiv.setAttribute("data-filter", `${official.yearOfService}`);
    parentDiv.innerHTML = `
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
            <p class="detail">${official.message.slice(0, count) + " ...."}</p >
            <button class="btn-more" id=${official.id}>More Details</button>
            </div>
          </div>
        </div>`;
    officialsWrapper.appendChild(parentDiv);
    let targetBtn =
      parentDiv.lastElementChild.lastElementChild.lastElementChild
        .lastElementChild;
    targetBtn.addEventListener("click", () => {
      readMore(official);
    });
  });
}

function readMore(official) {
  const officialContainer = document.querySelector(".officials-container");
  document.body.style.pointerEvents = "none";
  officialContainer.classList.remove("hide");
  officialContainer.style.pointerEvents = "all";
  officialContainer.innerHTML = `
    <button class="click"><i class="fa-sharp fa-solid fa-xmark"></i></button>
    <div class="official-info">
    <div class="name">${official.name}</div>
    <div class="flexed">
    <div class="image">
      <img src=${official.image} alt="this is an image">
    </div>
      <div class="paragraph">
        <p class="title">${official.title}</p>
        <p>${official.message}</p>
      </div>
    </div>
  </div>`;
  let closePopUp = officialContainer.firstElementChild;
  closePopUp.addEventListener("click", () => {
    officialContainer.classList.add("hide");
    document.body.style.pointerEvents = "all";
  });
}

displayOfficials();
officialsFilter();
