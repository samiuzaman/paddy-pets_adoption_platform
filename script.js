// Show Dynamic Category Button Start Here
const loadAllCategories = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await response.json();
  displayAllCategories(data.categories);
};
const displayAllCategories = (categories) => {
  categories.forEach((categorie) => {
    const { category_icon, category } = categorie;
    const categoryButtonContainer = document.getElementById(
      "category-btn-container"
    );
    const div = document.createElement("div");
    div.innerHTML = `
    <button
          class="btn h-20 px-16 text-2xl text-black font-bold border-[#0E7A8126] hover:border-2 hover:border-darkCyan hover:bg-[#0e798138] hover:rounded-full delay-200 focus:border-2 focus:border-darkCyan focus:bg-[#0e798138] focus:rounded-full"
        >
          <img src="${category_icon}"> ${category}
        </button>
    `;
    categoryButtonContainer.appendChild(div);
  });
};

loadAllCategories();
// Show Dynamic Category Button End Here

// Dynamic Cards Section Code Start Here
const loadAllCards = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/peddy/pets"
  );
  const data = await response.json();
  displayAllCards(data.pets);
};
const displayAllCards = (petsCard) => {
  petsCard.forEach((card) => {
    const { image, pet_name, breed, date_of_birth, gender, price } = card;
    console.log(card);
    const cardContainer = document.getElementById("cards-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="min-w-72 border p-4 rounded-xl">
              <img class="mb-5 w-full" src= ${image} />
              <h3 class="font-[Inter] font-bold text-xl text-black mb-2">
                ${pet_name}
              </h3>
              <p class="text-darkGray text-base font-normal mb-2">
                Breed: ${breed}
              </p>
              <p class="text-darkGray text-base font-normal mb-2">
                Birth: ${date_of_birth}
              </p>
              <p class="text-darkGray text-base font-normal mb-2">
                Gender: ${gender}
              </p>
              <p class="text-darkGray text-base font-normal mb-4">
                Price : ${price}$
              </p>
              <hr class="mb-4" />

              <div class="flex justify-between gap-3">
                <button
                  class="btn btn-outline text-base text-darkCyan hover:bg-darkCyan font-semibold border-[#0E7A8126]"
                >
                  <i class="text-xl px-1 fa-regular fa-thumbs-up"></i>
                </button>
                <button
                  class="btn btn-outline text-base text-darkCyan hover:bg-darkCyan font-semibold border-[#0E7A8126]"
                >
                  Adopt
                </button>
                <button onclick="customModal.showModal()"
                  class="btn btn-outline text-base text-darkCyan hover:bg-darkCyan font-semibold border-[#0E7A8126]"
                >
                  Details
                </button>
              </div>
            </div>
    `;
    cardContainer.appendChild(div);
  });
  
};

loadAllCards();
// Dynamic Cards Section Code End Here
