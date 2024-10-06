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


