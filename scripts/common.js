const $q = (selector) => document.querySelector(selector);

function loadUsers() {
  return fetch("http://localhost:8083/api/users/").then((response) =>
    response.json()
  );
}

function fillUsersDropDown(users) {
  for (const user of users) {
    const option = document.createElement("option");
    option.value = user.id;
    option.innerText = user.name;
    usersDropDownList.appendChild(option);
  }
}

function loadCategories() {
  return fetch("http://localhost:8083/api/categories/").then((response) =>
    response.json()
  );
}

function fillCategoriesDropDown(categories) {
  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category.id;
    option.innerText = category.name;
    categoriesDropDownList.appendChild(option);
  }
}
