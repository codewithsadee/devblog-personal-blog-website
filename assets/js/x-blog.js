let picPrefix = "./assets/images/";
let blogList = [{
    type: {
        name: "知识库",
        code: 1,
    },
    pic: "互联网资源合集.png",
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
}];

// 获取存放博客卡片的容器
let blogCardGroup = document.querySelector(".blog-card-group");

// 遍历blogList并生成HTML卡片
for (let blog of blogList) {
    let blogCard = document.createElement("div");
    blogCard.className = "blog-card";

    let banner = document.createElement("div");
    banner.className = "blog-card-banner";
    let bannerImg = document.createElement("img");
    bannerImg.src = picPrefix + blog.pic;
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