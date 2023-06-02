const fqaList = document.querySelector('.fqaList');

function toggleFqa(e) {
    if (e.target.nodeName == 'LI') {
        if (e.target.children[1].style.display === 'block') {
            e.target.removeAttribute('class');
            e.target.children[1].removeAttribute('style');
        } else {
            e.target.setAttribute('class', 'active');
            e.target.children[1].setAttribute('style', 'display:block');
        }
    } else if(e.target.nodeName == 'H4') {
        if (e.target.nextElementSibling.style.display === 'block') {
            e.target.parentElement.removeAttribute('class');
            e.target.nextElementSibling.removeAttribute('style');
        } else {
            e.target.parentElement.setAttribute('class', 'active');
            e.target.nextElementSibling.setAttribute('style', 'display:block');
        }
    } else if(e.target.nodeName == 'IMG') {
        if (e.target.parentElement.nextElementSibling.style.display === 'block') {
            e.target.parentElement.parentElement.removeAttribute('class');
            e.target.parentElement.nextElementSibling.removeAttribute('style');
        } else {
            e.target.parentElement.parentElement.setAttribute('class', 'active');
            e.target.parentElement.nextElementSibling.setAttribute('style', 'display:block');
        }
    }
}

fqaList.addEventListener('click', toggleFqa);