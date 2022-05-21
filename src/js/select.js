
// Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {

    
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownArrow = dropDownWrapper.querySelector('.dropdown__arrow');
    const dropDownList = dropDownWrapper.querySelector('.dropdown-list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInrup = dropDownWrapper.querySelector('.dropdown__input-hidden');


    // Клик по кнопке - открытие/закрытие дропдауна
    dropDownBtn.addEventListener('click', function () {
        dropDownList.classList.toggle('dropdown-list_visible');
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
            dropDownList.classList.remove('dropdown-list_visible');
            dropDownArrow.classList.remove('dropdown-active');
        })
    })

    // Клик снаружи дропдауна. Закрытие дропдауна
    document.addEventListener('click', function (e) {
        if (e.target !== dropDownBtn) {
            dropDownList.classList.remove('dropdown-list_visible');
            dropDownArrow.classList.remove('dropdown-active');
        }
    })

    // Закрытие при клике на esc
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            dropDownList.classList.remove('dropdown-list_visible');
            dropDownArrow.classList.remove('dropdown-active');
        }
    })
});


