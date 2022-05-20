
const dropDownBtn = document.querySelector('.dropdown__button');
const dropDownArrow = document.querySelector('.dropdown__arrow');
const dropdownList = document.querySelector('.dropdown-list');
const dropDownListItems = dropdownList.querySelectorAll('.dropdown__list-item');
const dropDownInrup = document.querySelector('.dropdown__input-hidden');


// Клик по кнопке - открытие/закрытие дропдауна
dropDownBtn.addEventListener('click', function () {
    dropdownList.classList.toggle('dropdown-list_visible');
});

// Клик по кнопке - разворот стрелки
dropDownBtn.addEventListener('click', function () {
    dropDownArrow.classList.toggle('dropdown-active');
});

// Выбор элемента из списка / изменить активное / закрытие дропдауна
dropDownListItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
        e.stopPropagation();
        dropDownBtn.innerText = this.innerText;
        dropDownInrup.value = this.dataset.value;
        dropdownList.classList.remove('dropdown-list_visible');
        dropDownArrow.classList.remove('dropdown-active');
    })
})

// Клик снаружи дропдауна. Закрытие дропдауна
document.addEventListener('click', function (e) {
    if (e.target !== document.querySelector('.dropdown__button')) {
        dropdownList.classList.remove('dropdown-list_visible');
        dropDownArrow.classList.remove('dropdown-active');
    }
})

// Закрытие при клике на esc
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        dropdownList.classList.remove('dropdown-list_visible');
        dropDownArrow.classList.remove('dropdown-active');
    }
})