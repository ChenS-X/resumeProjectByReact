import logo from "/logo.svg";
import logo_dark from "/logo_dark.svg";
// import arrow_up_dark from "./arrow-up-dark.png";
// import arrow_up_light from "./arrow-up-light.png";
// import bg from "./bg.jpeg";
// import moon from "./moon.png";
// import sun from "./sun.png";
// import menu from "./menu.png";
// import menu_dark from "./menu_dark.png";
// import close from "./close.png";
// import close_dark from "./close_dark.png";
import avatar from "./avatar.webp";
// import sayHi from "./sayHi.png";
// import download from "./download.png";
// import download_dark from "./download_dark.png";
// import code from "./code.png";
// import code_dark from "./code_dark.png";
// import education from "./education.png";
// import education_dark from "./education_dark.png";
// import project from "./project.png";
// import project_dark from "./project_dark.png";
import vscode from "./vscode.webp";
import sourceTree from "./sourceTree.webp";
import git from "./git.webp";
import apipost from "./apipost.webp";
import uniapp from "./uni-app-copy.png";
import nodejs from "./nodejs.png";
import firebase from "./firebase.png";
import cicd from "/cicd.svg";
import fileUpload from "/fileUpload.svg";
import visualization from "/visualization.svg";
import web_pro from "/web_pro.svg";
// import html5 from "./html5.png";
// import uniapp_pink from "./uni-app.png";
// import hm from "./hm-copy.png";
// import iOS from "./iOS.png";
// import send from "./send-fill.png";
// import email from "./email.png";
// import email_dark from "./email-dark.png";

import WebEcharts from "/web-echarts.png";
import WxApp from "/wx-app.png";
import CenterService from "/center-service.png";
import Appcan from "/appcan.png";

export const assets = {
  logo,
  logo_dark,
  // arrow_up_dark,
  // arrow_up_light,
  //   bg,
  // moon,
  // sun,
  // menu,
  // menu_dark,
  // close,
  // close_dark,
  avatar,
  // sayHi,
  // download,
  // download_dark,
  // code,
  // code_dark,
  // education,
  // education_dark,
  // project,
  // project_dark,
  vscode,
  sourceTree,
  git,
  // github,
  apipost,
  uniapp,
  nodejs,
  firebase,
  cicd,
  fileUpload,
  visualization,
  web_pro,

  // html5,
  // uniapp_pink,
  // hm,
  // iOS,
  // send,
  // email,
  // email_dark
};

export const menuList = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About me",
    link: "#about",
  },

  {
    title: "Projects Exp",
    link: "#projects",
  },
  // {
  //   title: "Services",
  //   link: "#services",
  // },
  {
    title: "My Work",
    link: "#work",
  },
  {
    title: "Contact me",
    link: "#contact",
  },
];

export const infoList = [
  {
    icon: "code",
    title: "Languages",
    description: "JavaScript、TypeScript、Vue、React、NodeJs",
  },
  {
    icon: "education",
    title: "Education",
    description: "广东工业大学（Guangdong University of Technology）学士学位",
  },
  {
    icon: "project",
    title: "Projects",
    description: "涵盖：Web、小程序、H5、Hybrid App",
  },
];

export const toolsData = [
  {
    icon: assets.vscode,
    title: "VSCode",
  },
  {
    icon: assets.git,
    title: "Git",
  },
  {
    icon: assets.apipost,
    title: "ApiPost",
  },
  {
    icon: assets.uniapp,
    title: "uniapp",
  },
  {
    icon: assets.sourceTree,
    title: "SourceTree",
  },
  // assets.nodejs,
  // assets.firebase,
];

export const serviceData = [
  {
    icon: "H",
    title: "Web Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "",
  },
  {
    icon: "hongmeng",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "",
  },
  {
    icon: "iOS",
    title: "App Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "",
  },
  {
    icon: "uniapp",
    title: "App Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    link: "",
  },
];

export const projectsExpData = [
  {
    icon: assets.web_pro,
    title: "定制脚手架",
    description:"封装通用性的可定制化的前端脚手架项目。提升开发效率，开箱即用。",
    link: "",
    content: [
      `背景：各系统样式、逻辑不太统一；且每当新建项目，搭建项目基座的过程就要重复一边，抑或是选一个接近的成型项目修改。没有统一项目结构和逻辑处理。导致项目差异大，开发效率低等问题。于是由我主导了前端项目脚手架定制封装`,
      `技术选型：因为公司之前 ToB 中台项目几乎都是使用的 Vue2.x+ElementUI 组合开发。考虑到技术栈一致性，可能产生的项目移植以及开发人员上手的难易，所以选择了 <span class="text-red-500 bg-amber-200">Vue3.x + ElementPlus</span> 搭建基础项目基座。`,
      `实现方案：方案使用 <span class="text-red-500 bg-amber-200">Vue3.x + ElementPlus</span> 开发，集成 <span class="text-red-500 bg-amber-200">Echarts</span> 图形库能力，封装各项目中 <span class="text-red-500 bg-amber-200">通用组件</span> ，以及各种自定义指令。集成权限管理机制、统一登录和接口请求逻辑、统一项目结构和大区域的样式。封装定制化的路由组件等等。配置好工程化以及基础的性能优化配置项。项目保存到 Github 上。实现了公司项目统一，节省开发成本的前端项目脚手架方案落地。`,
      `可优化点：可以考虑打包成 <span class="text-red-500 bg-amber-200">npm</span> 包，以指令的方式进行使用。`,
    ],
  },
  {
    icon: assets.fileUpload,
    title: "大文件上传",
    description: "原生JS实现统一的大文件上传方案。集成断点续传、秒传、拖拽上传等功能。",
    link: "",
    content: [
      `背景：移动端原生 H5 页面需要增加视频上传功能，用于检验员上传车辆故障检修等现场视频作用。`,
      `技术选型：由于是原生 H5 页面，为避免页面加载时引入太多第三方库链接导致页面加载速度变慢，故而使用<span class="text-red-500 bg-amber-200">原生JS</span>自封装一个文件上传类库。`,
      `实现方案：使用分片上传的机制，利用 <span class="text-red-500 bg-amber-200">Md5 获取文件 Hash</span>，利用 <span class="text-red-500 bg-amber-200">WebWorker</span> 线程异步切片读取文件。实现大文件分片上传、断点续传、上传暂停&恢复、秒传等功能。考虑通用性，增加拖拽上传功能。另加入上传并发控制机制，采用 <span class="text-red-500 bg-amber-200">Promise 并发</span>实现多分片并发上传功能，减少上传时间。封装上转 SDK，前端引入直接使用，实现 H5 和 PC 端通用。`,
      `可优化点：对于太大的文件，可采用先分块技术，将大文件分块上传，每一块采用分片上传。可以减少Hash 计算耗时操作。`
    ],
  },
  {
    icon: assets.cicd,
    title: "CI/CD实现",
    description: "利用Github提供的Actions功能，零成本实现CI/CD（持续集成/持续部署）。",
    link: "",
    content: [
      `背景：前端项目部署存在问题，无清晰的版本管理，无代码 preview。导致项目版本混乱，线上代码质量较差等问题。为生产发布带来问题。`,
      `技术选型：由于成本需求的原因，采用 <span class="text-red-500 bg-amber-200">Github Actions</span> 的方案实现。`,
      `实现方案：整体方案采用 <span class="text-red-500 bg-amber-200">Github Actions 实现</span>，基于前端业务基础上，独立开发贴合前端业务的 action。优化项目开发上线的代码管理工作流。实现项目集成<span class="text-red-500 bg-amber-200">部署自动化</span>。在此基础上集成短信服务。实现项目部署的消息通知机制。实现 <span class="text-red-500 bg-amber-200">CI/CD 零成本落地</span>。`,
      `可优化点：可加入自动化代码测试功能；集成企业微信消息通知代替短信服务。`
    ],
  },
  {
    icon: assets.visualization,
    title: "可视化优化方案",
    description: "针对大数据量可视化场景，实现【滑动窗口】动态规划优化方案。",
    link: "",
    content: [
      `背景：公交车辆及线路信息可视化，在页面上同时渲染 3w+动态车辆，及其线路和场站围栏等信息。容易造成页面卡顿，网络请求耗时长等问题。`,
      `技术选型：采用【滑动窗口】的技术，对大<span class="text-red-500 bg-amber-200">数据分片，并发请求</span>网络数据。模拟点聚合方式减少页面上同时渲染元素的数量。`,
      `实现方案：监听地图缩放 zoom 变化（地图采用 minemap 方案），动态划分地图区域，模拟点聚合方式，在每个区域中平均显示定量的公交点位。随着地图 zoom 的递增，每个区域点位越精准，直至用户可操作每个点位。`,
      `可优化点：采用权重计算代替平均分配，根据每个区域车辆比重动态划分区域展示数量。`
    ],
  },
];

export const workData = [
  {
    title: "公交可视化大屏系统",
    description: "PC端",
    bgImage: WebEcharts,
  },
  {
    title: "在线教育电商系统",
    description: "小程序，H5",
    bgImage: WxApp,
  },
  {
    title: "公交加燃数字化系统",
    description: "PC/H5端",
    bgImage: CenterService,
  },
  {
    title: "智能家居Hybird App",
    description: "Appcan",
    bgImage: Appcan,
  },
];
