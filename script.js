const wrapper = document.querySelector(".wrapper");
const divFlex = document.querySelector(".d-flex");
const aside = document.createElement("aside");
const main = document.createElement("main");
const category = document.createElement("div");
const card = document.createElement("div");
divFlex.append(aside);
divFlex.prepend(main);

const nameForCategories = {
    computer: "Комп'ютери",
    smartphone: "Смартфони",
    laptop: "Ноутбуки",
    tablet: "Планшети",
}

function showCategoriesList(category) {
    let listCategories = [];
    for (let key in nameForCategories) {
        listCategories.push(`<ul>
                <li>${nameForCategories[key]}</li>
            </ul>`)
    }
    aside.innerHTML = `${listCategories.join("")}`;


}
showCategoriesList(nameForCategories);
aside.classList.add("side-bar");

const ul = aside.childNodes;
console.log(ul);
ul.forEach((li, index) => {
    li.dataset.index = `${index}`;
    console.log(li);
}  )

const firstLi = document.querySelector(`[data-index="0"]`);

firstLi.addEventListener("click", () => {
    showCategoryItemsList(computer);

})

const computer = {
        artline: "Компьютер Artline Gaming X51 v07 (X51v07)",
        asus: "Компьютер Asus S500MC-5114000460",
        lenovo: "Компьютер Lenovo IdeaCentre G5 Gaming",
        artline1: "Компьютер ARTLINE Overlord H1v57w",
        qube: "Компьютер QUBE Игровой QB R i5",
        cobra: "Компьютер COBRA Advanced (A36.16.S4.166S.6142) ",
    };

const smartphone = {
        apple12: "Мобильный телефон Apple iPhone 14 128GB Starlight",
        apple13: "Мобильный телефон Apple iPhone 12 64GB Blue",
        apple14: "Мобильный телефон Apple iPhone 13 256GB Blue",
    };
const laptop = {
        acer: "Ноутбук Acer Aspire 7 A715-42G-R3EZ",
        apple: "Ноутбук Apple MacBook Air 13",
        asus: "Ноутбук ASUS TUF Gaming",
    };
const tablet = {
        lenovo: "Планшет Lenovo Yoga Tab 11 LTE 256GB",
        samsung: "Планшет Samsung Galaxy Tab A8 10.5",
        apple: "Планшет Apple iPad Pro 11\" M2",
    };


function showCategoryItemsList(obj) {
    const categoryItemsList = [];
    for (let key in obj) {
        categoryItemsList.push(`<div>
            <img src="images/${obj[key].replaceAll(" ", "")}.jfif">
            <h3>${obj[key]}</h3>
            </div>`)
    }
main.innerHTML = `${categoryItemsList.join("")}`

}



// const categoryItems = {
//     appliances: {
//         dishWasher: "Посудомийні машини",
//         washer: "Пральні машини",
//         fridge: "Холодильники",
//     },
//     computer: {
//         computer: "Комп'ютери",
//         laptop: "Ноутбуки",
//         tablet: "Планшети"
//     },
//     household: {
//         dish: "Посуд",
//         homeTextile: "Домашній текстиль",
//         furniture: "Меблі",
//     },
//     smartphone: {
//         apple: "Смартфони Apple",
//         huawei: "Смартфони Huawei",
//         samsung: "Смартфони Samsung",
//     },
// }



// function showCategoriesItems() {
//     let items = [];
//     for (let key in categoryItems) {
//         items.push(`<div>
//             <img src="images/${Object.keys(categoryItems)}/${Object.keys(categoryItems)[key]}.jfiff" alt="${Object.keys(categoryItems)}">
//             <h2>${Object.keys(categoryItems)}</h2>
//         </div>
// `)
//     }
//     main.innerHTML = `${items.join("")}`;
// }
// showCategoriesItems(categoryItems);