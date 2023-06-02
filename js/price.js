const fqaList = document.querySelector('.fqaList');
const addIcon = document.querySelectorAll('.addIcon');
const removeIcon = document.querySelectorAll('.removeIcon');

function toggleFqa(e) {
    if (e.target.nodeName == 'LI') {
        const dataNum = e.target.dataset.num;
        if (e.target.children[1].style.display === 'block') {
            showAddIcon(dataNum);
            e.target.removeAttribute('class');
            e.target.children[1].removeAttribute('style');
        } else {
            showRemoveIcon(dataNum);
            e.target.setAttribute('class', 'active');
            e.target.children[1].setAttribute('style', 'display:block');
        }
    } else if(e.target.nodeName == 'H4') {
        const dataNum = e.target.parentElement.dataset.num;
        if (e.target.nextElementSibling.style.display === 'block') {
            showAddIcon(dataNum);
            e.target.parentElement.removeAttribute('class');
            e.target.nextElementSibling.removeAttribute('style');
        } else {
            showRemoveIcon(dataNum);
            e.target.parentElement.setAttribute('class', 'active');
            e.target.nextElementSibling.setAttribute('style', 'display:block');
        }
    } else if(e.target.nodeName == 'IMG') {
        const dataNum = e.target.parentElement.parentElement.dataset.num;
        if (e.target.parentElement.nextElementSibling.style.display === 'block') {
            showAddIcon(dataNum);
            e.target.parentElement.parentElement.removeAttribute('class');
            e.target.parentElement.nextElementSibling.removeAttribute('style');
        } else {
            showRemoveIcon(dataNum);
            e.target.parentElement.parentElement.setAttribute('class', 'active');
            e.target.parentElement.nextElementSibling.setAttribute('style', 'display:block');
        }
    }
}

function showAddIcon(num) {
    addIcon.forEach((item, index) => {
        index + 1 == num ? item.setAttribute('style', 'display:block') : '';
    })
    removeIcon.forEach((item, index) => {
        index + 1 == num ? item.setAttribute('style', 'display:none') : '';
    })
}

function showRemoveIcon(num) {
    addIcon.forEach((item, index) => {
        index + 1 == num ? item.setAttribute('style', 'display:none') : '';
    })
    removeIcon.forEach((item, index) => {
        index + 1 == num ? item.setAttribute('style', 'display:block') : '';
    })
}

fqaList.addEventListener('click', toggleFqa);