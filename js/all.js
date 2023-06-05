const productsDom = document.querySelector('.productList');
const filterListDom = document.querySelector('.filterList');
const filterListAllBtnDom = document.querySelectorAll('.filterList button');
const searchDom = document.querySelector('#search');
const filterBtnDom = document.querySelector('.filterBtn');
const filterContentDom = document.querySelector('.filterBtnContent');
const sortBtnDom = document.querySelector('#sort');
const sortContentDom = document.querySelector('.sortBtnContent');
const aiModel = document.getElementsByName('aiModel');
const category = document.getElementsByName('category');
const pagination = document.querySelector('.pagination');
const topBtn = document.querySelector('.topBtn');
const moblieMenuBtn = document.querySelector('.moblieList');
const moblieMenuCloseBtn = document.querySelector('.closeIcon');

let data = [
    {
        tittle: 'Chatbot Builder',
        content: '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
        ai: 'AI 模型',
        aiName: '卡卡',
        category: '聊天',
        img: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool1.png?raw=true'
    },
    {
        tittle: 'Image Recognition Platform',
        content: '專業的圖像識別平台，識別圖像、分類、標記等。',
        ai: 'AI 模型',
        aiName: '杰杰',
        category: '影像識別',
        img: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool2.png?raw=true'
    },
    {
        tittle: 'Language Translation API',
        content: 'Language Translation API',
        ai: 'AI 模型',
        aiName: '琪琪',
        category: '翻譯',
        img: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool3.png?raw=true'
    },
    {
        tittle: 'Sentiment Analysis API',
        content: '自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。',
        ai: 'AI 模型',
        aiName: '昊昊',
        category: '行銷',
        img: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool4.png?raw=true'
    },
    {
        tittle: 'Fraud Detection Platform',
        content: '預防詐騙活動，適用於銀行、金融、電商等。',
        ai: 'AI 模型',
        aiName: '卡卡',
        category: '客服',
        img: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool5.png?raw=true'
    },
    {
        tittle: 'Voice Assistant SDK',
        content: '通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。',
        ai: 'AI 模型',
        aiName: '生產力',
        category: '生產力',
        img: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool6.png?raw=true'
    },
    {
        tittle: 'Chatbot Builder02',
        content: '建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。',
        ai: 'AI 模型',
        aiName: '卡卡',
        category: '聊天',
        img: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool1.png?raw=true'
    },
    {
        tittle: 'Image Recognition Platform02',
        content: '專業的圖像識別平台，識別圖像、分類、標記等。',
        ai: 'AI 模型',
        aiName: '杰杰',
        category: '影像識別',
        img: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool2.png?raw=true'
    },
    {
        tittle: 'Language Translation API02',
        content: 'Language Translation API',
        ai: 'AI 模型',
        aiName: '琪琪',
        category: '翻譯',
        img: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool3.png?raw=true'
    },
    {
        tittle: 'Sentiment Analysis API02',
        content: '自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。',
        ai: 'AI 模型',
        aiName: '昊昊',
        category: '行銷',
        img: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool4.png?raw=true'
    },
    {
        tittle: 'Fraud Detection Platform02',
        content: '預防詐騙活動，適用於銀行、金融、電商等。',
        ai: 'AI 模型',
        aiName: '卡卡',
        category: '客服',
        img: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool5.png?raw=true'
    },
    {
        tittle: 'Voice Assistant SDK02',
        content: '通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。',
        ai: 'AI 模型',
        aiName: '生產力',
        category: '生產力',
        img: 'https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool6.png?raw=true'
    }
];
let fData = data;

page(fData, 1);
function getData(d) {
    const filterData = d;
    const dataLength = filterData.length;
    let str = '';
    for (i = 0; i < dataLength; i++) {
        str += `<li>
        <div class="productImg">
        <img src="${filterData[i].img}" alt="${filterData[i].tittle}">
        </div>
        <div class="productInfo">
            <h4>${filterData[i].tittle}</h4>
            <p class="productText">${filterData[i].content}</p>
            <hr>
            <p class="fw-b">${filterData[i].ai}<span>${filterData[i].aiName}</span></p>
            <hr>
            <p>#${filterData[i].category}<a href="#"><img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/icons/share.png?raw=true" alt="分享icon"></a></p>
        </div>
        </li>`
    };
    productsDom.innerHTML = str;
}

function page (data, nowPage) {
    const dataTotal = data.length;
    const totalPage = Math.ceil(dataTotal / 6);
    const prepage = 6;
    let currentPage = nowPage;
    if(currentPage > totalPage){
        currentPage = totalPage;   
    }
    const minData = (currentPage * prepage) - prepage;
    const maxData = (currentPage * prepage) - 1;

    const filterdata = [];
     data.forEach((item, index) => {
        if(index >= minData && index <= maxData) {
            filterdata.push(item);
        }
     })

    const page = {
        totalPage,
        prepage,
        currentPage
    }

    getData(filterdata);
    showPage(page);
    // console.log(totalPage)
}

function showPage (p) {
    let str = '';
    for(let i = 1; i <= p.totalPage; i++){
        if(p.currentPage === i){
            str += `<li class="active" data-page="${i}">${i}</li>`
        } else {
            str += `<li data-page="${i}">${i}</li>`
        }
    }
    str += `<li class="next" data-page="${p.currentPage === p.totalPage ? Number(p.currentPage) : Number(p.currentPage) + 1}"></li>`
    pagination.innerHTML = str;
}

function switchPage (e) {
    e.preventDefault();
    console.log(e.target.nodeName);
    if(e.target.nodeName !== "LI"){
        return
    }
    const p = Number(e.target.dataset.page);
    page(fData, p)
}

function filter() {
    removeActive();
    let aiModelValue = null;
    let categoryValue = null;
    for (let i = 0; i < aiModel.length; i++) {
        if (aiModel[i].checked) {
            aiModelValue = aiModel[i].value;
        }
    };
    for (let i = 0; i < category.length; i++) {
        if (category[i].checked) {
            categoryValue = category[i].value;
        }
    };
    let filterData = data.filter(item => {
        if (aiModelValue !== null && categoryValue !== null) {
            if (aiModelValue === '所有模型' && categoryValue === '所有類型') {
                return item
            } else if (aiModelValue === '所有模型' && item.category === categoryValue) {
                return item
            } else if (item.aiName === aiModelValue && categoryValue === '所有類型') {
                return item
            } else if (item.aiName === aiModelValue && item.category === categoryValue) {
                return item
            }
        } else if (aiModelValue !== null) {
            if (aiModelValue === '所有模型') {
                return item
            } else if (item.aiName === aiModelValue) {
                return item
            }
        } else if (categoryValue !== null) {
            if (categoryValue === '所有類型') {
                return item
            } else if (item.category === categoryValue) {
                return item
            }
        }
    })
    fData = filterData;
    page(filterData, 1);
}

function categoryFilter(e) {
    const thisBtn = e.target;
    const nowCategory = e.target.textContent
    // 取消篩選項目的checked
    aiModel.forEach(item => {
        item.checked = false;
    })
    category.forEach(item => {
        item.checked = false;
    })

    removeActive();
    thisBtn.setAttribute('class', 'active');
    let filterData = data.filter(item => {
        if (nowCategory === '全部') {
            return item
        } else {
            return item.category === nowCategory
        }
    })
    fData = filterData;
    page(filterData, 1);
};

function openSort() {
    if (sortContentDom.style.display === 'block') {
        sortContentDom.setAttribute('style', 'display:none');
    } else {
        sortContentDom.setAttribute('style', 'display:block');
    }
}

function sort(e) {
    sortBtnDom.textContent = e.target.value;
}

function search() {
    let valueLowerCase = searchDom.value.toLowerCase();
    let searchFilter = data.filter(item => {
        if (item.tittle.toLowerCase().includes(valueLowerCase) || item.content.toLowerCase().includes(valueLowerCase) || item.ai.toLowerCase().includes(valueLowerCase) || item.aiName.toLowerCase().includes(valueLowerCase) || item.category.toLowerCase().includes(valueLowerCase)) {
            return item
        }
    });
    page(searchFilter, 1);
}

function openModel() {
    if (filterContentDom.style.display === 'block') {
        filterContentDom.setAttribute('style', 'display:none');
    } else {
        filterContentDom.setAttribute('style', 'display:block');
    }
}

function removeActive() {
    filterListAllBtnDom.forEach(item => {
        item.removeAttribute('class');
    });
}

function openMenu() {
    const menuDom = document.querySelector('header nav ul');
    const menuFooter = document.querySelector('.moblieFooter');
    const hiddenM = document.querySelector('.hidden-m');
    menuDom.style.display = 'flex';
    menuFooter.style.display = 'block';
    moblieMenuCloseBtn.style.display = 'block';
    moblieMenuBtn.style.display = 'none';
    hiddenM.style.display = 'none';
}

function closeMenu() {
    const menuDom = document.querySelector('header nav ul');
    const menuFooter = document.querySelector('.moblieFooter');
    const hiddenM = document.querySelector('.hidden-m');
    menuDom.style.display = 'none';
    menuFooter.style.display = 'none';
    moblieMenuCloseBtn.style.display = 'none';
    moblieMenuBtn.style.display = 'block';
    hiddenM.style.display = 'block';
}

function backToTop() {
	var d = document,
	dd = d.documentElement,
	db = d.body,
	top = dd.scrollTop || db.scrollTop,
	step = Math.floor(top / 30);
	(function() {
		top -= step;
		if (top > -step) {
			dd.scrollTop == 0 ? db.scrollTop = top: dd.scrollTop = top;
			setTimeout(arguments.callee, 20);
		}
	})();
}

filterListDom.addEventListener('click', categoryFilter);
sortBtnDom.addEventListener('click', openSort);
sortContentDom.addEventListener('change', sort);
searchDom.addEventListener('change', search);
filterBtnDom.addEventListener('click', openModel);
filterContentDom.addEventListener('change', filter);
pagination.addEventListener('click', switchPage);
topBtn.addEventListener('click', backToTop);
moblieMenuBtn.addEventListener('click', openMenu);
moblieMenuCloseBtn.addEventListener('click', closeMenu);