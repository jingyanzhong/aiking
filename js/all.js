const productList = document.querySelector('.productList');
const aiModel = document.getElementsByName('aiModel');
const category = document.getElementsByName('category');
const topBtn = document.querySelector('.topBtn');
const moblieMenuBtn = document.querySelector('.moblieList');
const moblieMenuCloseBtn = document.querySelector('.closeIcon');
const pagination = document.querySelector('.pagination');
const filterListDom = document.querySelector('.filterList');
const filterListAllBtn = document.querySelectorAll('.filterList button');
const sortBtn = document.querySelector('#sort');
const sortContent = document.querySelector('.sortBtnContent');
const searchDom = document.querySelector('#search');
const filterBtnDom = document.querySelector('.filterBtn');
const filterContentDom = document.querySelector('.filterBtnContent');

const api = 'https://2023-engineer-camp.zeabur.app';
let worksData = []
let pagesData = {}
const data = {
    type: '',
    sort: 0,
    page: 1,
    search: ''
}

getData(data);
function getData({ type, sort, page, search }) {
    const apiUrl = `${api}/api/v1/works?sort=${sort}&page=${page}&${type ? `type=${type}&` : ''}${search ? `search=${search}` : ''}`
    axios.get(apiUrl)
        .then(res => {
            worksData = res.data.ai_works.data;
            pagesData = res.data.ai_works.page;
            showPage(pagesData);
            showWorks(worksData);
        })
}

function showWorks(data) {
    const dataLen = data.length;
    let str = '';
    for (i = 0; i < dataLen; i++) {
        str += `<li>
        <div class="productImg">
        <img src="${data[i].imageUrl}" alt="${data[i].title}">
        </div>
        <div class="productInfo">
            <h4>${data[i].title}</h4>
            <p class="productText">${data[i].description}</p>
            <hr>
            <p class="fw-b">AI模型<span>${data[i].model}</span></p>
            <hr>
            <p>#${data[i].type}<a href="${data[i].link}"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true" alt="分享icon"></a></p>
        </div>
        </li>`
    };
    productList.innerHTML = str;

}

function showPage(page) {
    let str = '';
    for (let i = 1; i <= page.total_pages; i++) {
        if (page.current_page == i) {
            str += `<li class="active" data-page="${i}">${i}</li>`
        } else {
            str += `<li data-page="${i}">${i}</li>`
        }
    }
    str += `<li class="next" data-page="${page.has_next ? Number(page.current_page) + 1 : page.total_pages}"></li>`
    pagination.innerHTML = str;
}

function switchPage(e) {
    e.preventDefault();
    if (e.target.nodeName !== "LI") {
        return
    }
    data.page = e.target.dataset.page;
    getData(data);
}

function categoryFilter(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'BUTTON') {
        return
    }
    const nowBtn = e.target;
    // 取消篩選項目的checked
    aiModel.forEach(item => {
        item.checked = false;
    })
    category.forEach(item => {
        item.checked = false;
    })
    
    filterListAllBtn.forEach(item => {
        item.removeAttribute('class');
    });
    nowBtn.setAttribute('class', 'active');
    nowBtn.textContent === '全部' ? data.type = '' : data.type = nowBtn.textContent;
    data.page = 1;
    getData(data);
}

function openSort() {
    if (sortContent.style.display === 'block') {
        sortContent.setAttribute('style', 'display:none');
    } else {
        sortContent.setAttribute('style', 'display:block');
    }
}

function sort(e) {
    e.preventDefault();
    e.target.value === '由新到舊' ? data.sort = 0 : data.sort = 1;
    sortBtn.innerHTML = `${e.target.value}<img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/keyboard%20arrow%20down.png?raw=true" alt="下拉選單箭頭">`;
    getData(data);
}

function search(e) {
    if (e.keyCode === 13) {
        data.search = searchDom.value;
        data.page = 1;
    }
    getData(data);
}

function openFilter() {
    if (filterContentDom.style.display === 'block') {
        filterContentDom.setAttribute('style', 'display:none');
    } else {
        filterContentDom.setAttribute('style', 'display:block');
    }
}

function filter() {
    filterListAllBtn.forEach(item => {
        item.removeAttribute('class');
    });
    for (let i = 0; i < category.length; i++) {
        if (category[i].checked) {
            category[i].value === '所有類型' ? data.type = '' : data.type = category[i].value;
        }
    };
    getData(data);
}

function openMenu(e) {
    e.preventDefault();
    const menuDom = document.querySelector('header nav ul');
    const menuFooter = document.querySelector('.moblieFooter');
    const hiddenM = document.querySelector('.hidden-m');
    menuDom.style.display = 'flex';
    menuFooter.style.display = 'block';
    moblieMenuCloseBtn.style.display = 'block';
    moblieMenuBtn.style.display = 'none';
    hiddenM.style.display = 'none';
}

function closeMenu(e) {
    e.preventDefault();
    const menuDom = document.querySelector('header nav ul');
    const menuFooter = document.querySelector('.moblieFooter');
    const hiddenM = document.querySelector('.hidden-m');
    menuDom.style.display = 'none';
    menuFooter.style.display = 'none';
    moblieMenuCloseBtn.style.display = 'none';
    moblieMenuBtn.style.display = 'block';
    hiddenM.style.display = 'block';
}

function backToTop(e) {
    e.preventDefault();
    var d = document,
        dd = d.documentElement,
        db = d.body,
        top = dd.scrollTop || db.scrollTop,
        step = Math.floor(top / 30);
    (function () {
        top -= step;
        if (top > -step) {
            dd.scrollTop == 0 ? db.scrollTop = top : dd.scrollTop = top;
            setTimeout(arguments.callee, 20);
        }
    })();
}

pagination.addEventListener('click', switchPage);
filterListDom.addEventListener('click', categoryFilter);
sortBtn.addEventListener('click', openSort);
sortContent.addEventListener('change', sort);
searchDom.addEventListener('keydown', search);
filterBtnDom.addEventListener('click', openFilter);
filterContentDom.addEventListener('change', filter);
topBtn.addEventListener('click', backToTop);
moblieMenuBtn.addEventListener('click', openMenu);
moblieMenuCloseBtn.addEventListener('click', closeMenu);