# JS-scrape
### Scraping with JavaScript
#### Scraping the trending repos  on GitHub.


## Data format needed
- name
- description
- programming Language
- stars

## Selectors wanted for the scraper
- name: "h3"

- description: "py-1 p"

- programming Language: ".f6.text-gray.mt-2 .d-inline-block.mr-3 [itemprop=programmingLanguage]"

- stars: ".f6.text-gray.mt-2 a"


## Set the time frame.
```JS
const keyword = 'monthly'
```


## OUPUT
```JSON
{
  "Repositories": [
    {
      "name": "alibaba / flutter-go",
      "description": "flutter 开发者帮助 APP，包含 flutter 常用 140+ 组件的demo 演示与中文文档",
      "programming_Language": "Dart",
      "stars": "6,423"
    },
    {
      "name": "eranyanay / 1m-go-websockets",
      "description": "handling 1M websockets connections in Go",
      "programming_Language": "Go",
      "stars": "1,303"
    },
    {
      "name": "didi / DoraemonKit",
      "description": "简称 \"DoKit\" 。一款功能齐全的客户端（ iOS 、Android ）研发助手，你值得拥有。",
      "programming_Language": "Java",
      "stars": "3,001"
    },
    {
      "name": "pomber / git-history",
      "description": "Quickly browse the history of any GitHub file",
      "programming_Language": "JavaScript",
      "stars": "7,314"
    },
    {
      "name": "uber / ludwig",
      "description": "Ludwig is a toolbox built on top of TensorFlow that allows to train and test deep learning models without the need to write code.",
      "programming_Language": "Python",
      "stars": "1,942"
    },
    {
      "name": "trimstray / nginx-quick-reference",
      "description": "⚡ This notes describes how to improve Nginx performance, security and other important things; ssllabs A+ 100%.",
      "stars": "4,769"
    },
    {
      "name": "EBazarov / nsfw_data_source_urls",
      "description": "Collection of NSFW images URLs for the purposes of training an NSFW Image Classifier",
      "stars": "447"
    },
    {
      "name": "agalwood / Motrix",
      "description": "A full-featured download manager.",
      "programming_Language": "JavaScript",
      "stars": "2,300"
    },
    {
      "name": "NVlabs / stylegan",
      "description": "StyleGAN - Official TensorFlow Implementation",
      "programming_Language": "Python",
      "stars": "2,187"
    },
    {
      "name": "alexkimxyz / nsfw_data_scrapper",
      "description": "Collection of scripts to aggregate image data for the purposes of training an NSFW Image Classifier",
      "programming_Language": "Shell",
      "stars": "7,656"
    },
    {
      "name": "WOA-Project / WoA-Installer",
      "description": "The tool that will help you install Windows ARM64 with ease!",
      "programming_Language": "C#",
      "stars": "551"
    },
    {
      "name": "brightmart / nlp_chinese_corpus",
      "description": "大规模中文自然语言处理语料 Large Scale Chinese Corpus for NLP",
      "stars": "896"
    },
    {
      "name": "toddmotto / public-apis",
      "description": "A collective list of free APIs for use in software and web development.",
      "programming_Language": "Python",
      "stars": "50,871"
    },
    {
      "name": "imthenachoman / How-To-Secure-A-Linux-Server",
      "description": "An evolving how-to guide for securing a Linux server.",
      "stars": "1,456"
    },
    {
      "name": "zserge / lorca",
      "description": "Build cross-platform modern desktop apps in Go + HTML5",
      "programming_Language": "Go",
      "stars": "3,489"
    },
    {
      "name": "kleampa / not-paid",
      "description": "Client did not pay? Add opacity to the body tag and decrease it every day until their site completely fades away",
      "programming_Language": "JavaScript",
      "stars": "5,077"
    },
    {
      "name": "Snailclimb / JavaGuide",
      "description": "【Java学习+面试指南】 一份涵盖大部分Java程序员所需要掌握的核心知识。",
      "programming_Language": "Java",
      "stars": "23,811"
    },
    {
      "name": "patr0nus / DeskGap",
      "description": "A cross-platform desktop app framework based on Node.js and the system webview",
      "programming_Language": "C++",
      "stars": "405"
    },
    {
      "name": "b3log / vditor",
      "description": "♏ 一款浏览器端的 Markdown 编辑器。",
      "programming_Language": "TypeScript",
      "stars": "1,189"
    },
    {
      "name": "doocs / advanced-java",
      "description": "😮 互联网 Java 工程师进阶知识完全扫盲",
      "programming_Language": "Java",
      "stars": "9,009"
    },
    {
      "name": "kamranahmedse / developer-roadmap",
      "description": "Roadmap to becoming a web developer in 2019",
      "stars": "73,132"
    },
    {
      "name": "kmario23 / deep-learning-drizzle",
      "description": "Drench yourself in Deep Learning, Reinforcement Learning, Machine Learning, Computer Vision, and NLP by learning from these exciting lectures!!",
      "stars": "2,971"
    },
    {
      "name": "transloadit / uppy",
      "description": "The next open source file uploader for web browsers 🐶",
      "programming_Language": "JavaScript",
      "stars": "13,977"
    },
    {
      "name": "instantpage / instant.page",
      "description": "Make your site’s pages instant in 1 minute and improve your conversion rate by 1%",
      "programming_Language": "JavaScript",
      "stars": "1,896"
    },
    {
      "name": "didi / chameleon",
      "description": "🦎 一套代码运行多端，一端所见即多端所见",
      "programming_Language": "JavaScript",
      "stars": "2,154"
    }
  ]
}

```
