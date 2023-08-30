function loadBlogCard() {
    const hero = document.getElementById('hero');
    const blogCardGroup = document.getElementById('blog-card-group');

    if (hero.getBoundingClientRect().top < window.innerHeight) {
        // 模拟加载新内容的延迟
        setTimeout(() => {
            blogCardGroup.classList.add('show');
            blogCardGroup.style.marginTop = "0";
            blogCardGroup.style.marginLeft = "0";
        }, 10);
    } else {
        setTimeout(() => {
            blogCardGroup.classList.remove('show');
            blogCardGroup.style.marginTop = "5vw";
            blogCardGroup.style.marginLeft = "5vw";
        }, 10);
    }
}

// 监听页面滚动事件
window.addEventListener('scroll', () => {
    loadBlogCard();
});
window.addEventListener('load', () => {
    loadBlogCard();
});


const hero = document.getElementById('img-box');

const heroX = 20;
let intervalEvent = null;
hero.addEventListener('mouseenter', () => {
    // 鼠标移入的时候，hero的margin从左、上、右、下随机的移动，100ms改变一次
    intervalEvent = setInterval(() => {
        hero.style.margin = `${Math.random() * heroX}px ${Math.random() * heroX}px ${Math.random() * heroX}px ${Math.random() * heroX}px`
    }, 100);
});

// 鼠标移出时，恢复到默认状态，取消随机移动
hero.addEventListener('mouseleave', () => {
    clearInterval(intervalEvent);
    setTimeout(() => {
            hero.style.margin = "0px"
        },
        0);
});


// 一直重复打字机效果在myName上
function typeWriter(text, element, speed) {
    let currentIndex = 0;
    const timer = setInterval(() => {
        element.textContent = text.slice(0, currentIndex) + "_";
        currentIndex++;
        if (currentIndex >= text.length) {
            clearInterval(timer);
            element.textContent = text;
        }
    }, speed);
}

const myNameElement = document.getElementById("my-name");
const myNameTest = "Hi, I'm Xlu Stout"


setInterval(() => {
    typeWriter(myNameTest, myNameElement, 100)
}, 2000);


