let picPrefix = "./assets/images/";
let blogList = [{
    type: {
        name: "知识库",
        code: 1,
    },


    pic: "https://cdn.nlark.com/yuque/0/2023/png/34813220/1692370272009-f059eea1-2122-4014-8e8c-20487f5bcb8f.png",
    title: "互联网资源合集",
    href: "https://www.yuque.com/xlu103/re",
    detail: "这里汇聚了互联网上许多高质量的内容和工具，包括:\n" +
        "● 📚 优质电子书资源\n" +
        "● 🌟 个人成长类学习资料\n" +
        "● 💡 创业和职场相关内容\n" +
        "● 🧰 实用工具和生产力软件\n" +
        "● 🎨 设计和创意灵感来源\n" +
        "● 🔎 学术和技术资料\n" +
        "这些资源原本散落在互联网的不同角落，我花时间搜集和整理，舍弃劣质内容，保留精华。\n" +
        "就像海滩上的贝壳，我希望把它们收集起来，免得这些宝贝被大海冲走。我会不断更新和完善这个合集，欢迎你经常来逛逛，挖掘有用的资源宝石。"
}, {
    type: {
        name: "知识库",
        code: 1,
    },
    pic: "https://cdn.nlark.com/yuque/0/2023/png/34813220/1692370271604-7e365726-cd30-4a24-8ed0-dcaa4db66c35.png?x-oss-process=image%2Fresize%2Cw_1336%2Climit_0",
    title: "代码人的疑难杂症",
    href: "https://www.yuque.com/xlu103/ynzz",
    detail: " 👋  欢迎来到【疑难杂症】知识库，冲冲冲！！！！\n" +
        "记录在软件开发过程中遇到疑难杂症，包括环境安装等等等等..."
},

    {
        type: {
            name: "知识库",
            code: 1,
        },
        pic: "https://cdn.nlark.com/yuque/0/2023/png/34813220/1692370269572-35f7f317-a261-428a-b2eb-bd933336fd39.png",
        title: "前 端 之 实 践 出 真 知",
        href: "https://www.yuque.com/xlu103/web",
        detail: "搞前端的"
    }
];

// 获取存放博客卡片的容器
let blogCardGroup = document.querySelector(".blog-card-group");

// 遍历blogList并生成HTML卡片
for (let blog of blogList) {
    let blogCard = document.createElement("div");
    blogCard.className = "blog-card";

    let banner = document.createElement("div");
    banner.className = "blog-card-banner";
    let bannerImg = document.createElement("img");
    bannerImg.src = blog.pic;

    bannerImg.alt = blog.title;
    bannerImg.width = "250";
    bannerImg.className = "blog-banner-img";
    banner.appendChild(bannerImg);
    blogCard.appendChild(banner);

    let contentWrapper = document.createElement("div");
    contentWrapper.className = "blog-content-wrapper";

    let typeBtn = document.createElement("button");
    typeBtn.className = "blog-topic text-tiny";
    typeBtn.textContent = blog.type.name;
    contentWrapper.appendChild(typeBtn);

    let titleLink = document.createElement("a");
    titleLink.href = blog.href;
    titleLink.className = "h3";
    titleLink.textContent = blog.title;
    let title = document.createElement("h3");
    title.appendChild(titleLink);
    contentWrapper.appendChild(title);

    let detail = document.createElement("p");
    detail.className = "blog-text";
    detail.textContent = blog.detail;
    contentWrapper.appendChild(detail);

    blogCard.appendChild(contentWrapper);
    blogCardGroup.appendChild(blogCard);
}