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
    const { image, pet_name, breed, date_of_birth, gender, price, petId } =
      card;

    const cardContainer = document.getElementById("cards-container");
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="min-w-72 border p-4 rounded-xl">
              <img class="mb-5 w-full rounded-lg" src= ${image} />
              <h3 class="font-[Inter] font-bold text-xl text-black mb-2">
                 ${pet_name}
              </h3>
              <div class="flex items-center ">
              <p class="flex items-center text-darkGray text-base font-normal mb-2">
               <figure class="w-5 h-5"><svg fill="#5A5A5A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></g></svg></figure>
              Breed: ${breed}</div>
              </p>
              <p class="text-darkGray text-base font-normal mb-2">
               <i class="fa-regular fa-calendar"></i> Birth: ${date_of_birth}
              </p>
              <p class="text-darkGray text-base font-normal mb-2">
               <i class="fas fa-venus"></i> Gender: ${gender}
              </p>
              <p class="text-darkGray text-base font-normal mb-4">
              <i class="fa-solid fa-dollar-sign"></i> Price : ${price}$
              </p>
              <hr class="mb-4" />

              <div class="flex justify-between gap-3">
                <button onclick="likesPost('${image}')"
                  class="btn btn-outline text-base text-darkCyan hover:bg-darkCyan font-semibold border-[#0E7A8126]"
                >
                  <i class="text-xl px-1 fa-regular fa-thumbs-up"></i>
                </button>
                <button
                  class="btn btn-outline text-base text-darkCyan hover:bg-darkCyan font-semibold border-[#0E7A8126]"
                >
                  Adopt
                </button>
                <button onclick="loadModals('${petId}')"
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
// Dynamic Cards Section Code End Here

// Likes Post List Section Code Start Here
const likesPost = (image) => {
  const likesImagesContainer = document.getElementById(
    "likes-images-container"
  );
  const div = document.createElement("div");
  div.innerHTML = `
  <img class="rounded-lg mb-4 h-28" src=${image}>
  `;
  likesImagesContainer.appendChild(div);
};
// Likes Post List Section Code End Here

// Dynamic Modal Section Code Start Here
const loadModals = async (petId) => {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/peddy/pet/${petId}`
  );
  const data = await response.json();
  const { image, pet_name, breed, date_of_birth, gender, price } = data.petData;
  const modalContainer = document.getElementById("modal-container");
  const div = document.createElement("div");
  div.innerHTML = `<dialog id="customModal" class="modal">
    <div class="modal-box w-11/12 max-w-3xl">
    <div>
    <img class="max-h-64 w-full rounded-lg mb-5  object-fill" src=${image} />
    <h3 class="font-[Inter] font-bold text-xl text-black mb-2">
                 ${pet_name}
              </h3>
              
              <div class="columns-2 mb-3">
              <div class="flex items-center mb-1">
              <figure class="w-5 h-5"><svg fill="#5A5A5A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></g></svg></figure>
              <p class="text-darkGray text-base font-normal">
              Breed: ${breed}
              </p>
              </div>

              <p class="text-darkGray text-base font-normal mb-1">
               <i class="fas fa-venus"></i> Gender: ${gender}
              </p>

              <p class="text-darkGray text-base font-normal mb-1">
              <i class="fas fa-syringe"></i> Vaccinated status: Partially
              </p>
              

              <p class="text-darkGray text-base font-normal mb-1">
               <i class="fa-regular fa-calendar"></i> Birth: ${date_of_birth}
              </p>

              <p class="text-darkGray text-base font-normal mb-1">
              <i class="fa-solid fa-dollar-sign"></i> Price : ${price}$
              </p>
              
              
              </div>
              </div>
            <hr class="mb-4" />
            <h3 class="text-lg text-black font-bold mb-3">
            Details Information
            </h3>
            <p class="text-darkGray text-base font-normal mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using is that it has a more-or-less normal distribution
              of letters, as opposed to using.
              </p>
          

          <div class="">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button onclick="${(document.getElementById(
                "modal-container"
              ).innerHTML = "")}"
                class="w-full btn btn-block border border-darkCyan bg-[#0e798138] hover:bg-darkCyan hover:text-white text-2xl text-darkCyan font-bold"
              >
                Cancel
                </button>
            </form>
            </div>
          </div>
      </dialog>`;
  modalContainer.appendChild(div);
  customModal.showModal();
};
// Dynamic Modal Section Code End Here
loadAllCards();
