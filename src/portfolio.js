/* Personal content for 梁潇. Global colors live in _globalColor.scss. */

import emoji from "./emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {animated: true};

const greeting = {
  username: "梁潇",
  title: "你好，我是梁潇",
  subTitle: emoji(
    "生物技术231 · 全栈开发与数字创作。把前后端开发、AIGC 与视觉表达融入作品，让想法成为可以体验的产品。"
  ),
  resumeLink: "",
  buttonText: "查看项目",
  buttonHref: "#projects",
  secondaryButtonText: "参赛进行中",
  secondaryButtonHref: "#ongoing",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "",
  linkedin: "",
  gmail: "",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: false
};

const skillsSection = {
  title: "我能做什么",
  subTitle: "从全栈开发到视觉创作，把技术与表达连接起来",
  skills: [
    emoji("⚡ 精通前端、后端与数据库，能够开展项目全栈开发。"),
    emoji(
      "⚡ 精通 Photoshop、剪映与 Blender，每款软件的作品打磨时长均超过100小时。"
    ),
    emoji(
      "⚡ 擅长素描、板绘、PPT美工、剪辑、建模、3D扫描建模、彩铅与马克笔创作。"
    ),
    emoji("⚡ 2024.11.21：Blender 三渲二学习，练习复古电视模型的卡通渲染。"),
    emoji("⚡ 熟悉 AIGC、Agent 原生开发与 Harness 环境搭建。")
  ],
  softwareSkills: [
    {skillName: "前端开发", fontAwesomeClassname: "fas fa-code"},
    {skillName: "后端开发", fontAwesomeClassname: "fas fa-server"},
    {skillName: "数据库", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Photoshop", fontAwesomeClassname: "fas fa-image"},
    {skillName: "剪映 / 剪辑", fontAwesomeClassname: "fas fa-film"},
    {skillName: "Blender / 建模", fontAwesomeClassname: "fas fa-cubes"},
    {skillName: "3D扫描建模", fontAwesomeClassname: "fas fa-cube"},
    {skillName: "绘画 / 板绘", fontAwesomeClassname: "fas fa-palette"},
    {skillName: "PPT美工", fontAwesomeClassname: "fas fa-desktop"},
    {skillName: "AIGC", fontAwesomeClassname: "fas fa-magic"},
    {skillName: "Agent开发", fontAwesomeClassname: "fas fa-robot"},
    {skillName: "Harness搭建", fontAwesomeClassname: "fas fa-tools"}
  ],
  display: true
};

const educationInfo = {
  title: "专业背景",
  display: true,
  schools: [
    {
      schoolName: "南京农业大学",
      subHeader: "生物技术231",
      duration: "",
      desc: "在生物技术专业之外，持续开展全栈开发、AIGC 与数字艺术创作实践。",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

const workExperiences = {
  title: "校园任职",
  display: true,
  experience: [
    {
      company: "计算机协会",
      role: "会长",
      icon: "fas fa-laptop-code",
      date: "",
      desc: "",
      descBullets: []
    },
    {
      company: "院话剧团",
      role: "团长",
      icon: "fas fa-theater-masks",
      date: "",
      desc: "",
      descBullets: []
    },
    {
      company: "院党建班宣传部",
      role: "副部长",
      icon: "fas fa-bullhorn",
      date: "",
      desc: "",
      descBullets: []
    },
    {
      company: "动漫社创作部",
      role: "副部",
      icon: "fas fa-palette",
      date: "",
      desc: "",
      descBullets: []
    }
  ]
};

const openSource = {showGithubProfile: "false", display: false};

const bigProjects = {
  title: "项目与创作",
  subtitle: "用开发、影像、游戏与音乐，把想法做成作品",
  projects: [
    {
      projectName: "甜气预报",
      projectDesc:
        "负责微信小程序全栈开发。获2025年第十九届“挑战杯”人工智能专项赛校赛三等奖。",
      status: "2025 · 人工智能专项赛校赛三等奖",
      icon: "fas fa-mobile-alt",
      footerLink: [
        {
          name: "查看获奖证书",
          url: `${process.env.PUBLIC_URL}/images/liangxiao/tianqi-forecast-challenge-cup-award.jpg`
        }
      ]
    },
    {
      projectName: "元气立方",
      projectDesc: "负责网站开发。获2026年振兴杯校赛三等奖。",
      status: "2026 · 振兴杯校赛三等奖",
      image: `${process.env.PUBLIC_URL}/images/liangxiao/yuanqi-cube-award.jpg`,
      imageAlt:
        "《元气立方》获南京农业大学第六届振兴杯创新创业大赛三等奖的证书，2026年8月28日",
      imageRotation: -90,
      footerLink: [
        {
          name: "查看获奖证书原图",
          url: `${process.env.PUBLIC_URL}/images/liangxiao/yuanqi-cube-award.jpg`
        }
      ]
    },
    {
      projectName: "一生麦事",
      projectDesc: "独立使用 AIGC 完成作品，获“我眼中的南农”校赛二等奖。",
      status: "校赛二等奖 · 独立AIGC创作",
      icon: "fas fa-film",
      footerLink: [
        {
          name: "观看《一生麦事》",
          url: `${process.env.PUBLIC_URL}/videos/liangxiao/video-06.mp4`
        }
      ]
    },
    {
      projectName: "寻迹卫岗",
      projectDesc: "与校招生办达成合作，开发南农 RPG 3D 游戏《寻迹卫岗》。",
      status: "与校招生办达成合作",
      icon: "fas fa-gamepad",
      footerLink: []
    },
    {
      projectName: "社团管理系统",
      projectDesc:
        "与校团委合作，独立完成前端、后端、数据库与服务器部署，前端6万多行代码、后端5万多行代码。采用 Vue 3.4、TypeScript 5.3、Spring Boot 2.7.18、MySQL 8.0、Redis 等技术。可通过南农网上办事大厅、企业微信、智慧南农进入，需在南农校园网环境下登录。",
      status: "已上线 · 公开测试中",
      image: `${process.env.PUBLIC_URL}/images/liangxiao/club-system-signing.jpg`,
      imageAlt: "南京农业大学社团管理系统签约仪式现场合影，2026年4月27日",
      footerLink: [
        {
          name: "查看签约现场原图",
          url: `${process.env.PUBLIC_URL}/images/liangxiao/club-system-signing.jpg`
        },
        {
          name: "查看上线说明",
          url: `${process.env.PUBLIC_URL}/images/liangxiao/club-system-launch-note.png`
        },
        {
          name: "网上办事大厅入口截图",
          url: `${process.env.PUBLIC_URL}/images/liangxiao/club-system-service-hall.jpg`
        },
        {
          name: "行政办公入口截图",
          url: `${process.env.PUBLIC_URL}/images/liangxiao/club-system-admin-entry.jpg`
        },
        {
          name: "业务直通车入口截图",
          url: `${process.env.PUBLIC_URL}/images/liangxiao/club-system-service-entry.jpg`
        }
      ]
    },
    {
      projectName: "音乐作品",
      projectDesc:
        "2024.10.21 签约酷狗音乐与腾讯音乐人（QQ音乐），已发行四首音乐作品，播放破万。",
      status: "双平台签约 · 4首发行 · 播放破万",
      icon: "fas fa-music",
      footerLink: [
        {
          name: "试听为洛天依创作的歌曲",
          url: `${process.env.PUBLIC_URL}/videos/liangxiao/video-13.mp4`
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("获奖与成果 🏆"),
  subtitle: "开发、创作、竞赛与表达中的阶段成果",
  achievementsCards: [
    {
      title: "2025年挑战杯 · 人工智能专项赛校赛三等奖",
      subtitle:
        "《甜气预报：智慧决策“苹”台领航者》，负责微信小程序全栈开发。获奖证书日期：2025.06.16。",
      image: `${process.env.PUBLIC_URL}/images/liangxiao/tianqi-forecast-challenge-cup-award.jpg`,
      imageAlt:
        "《甜气预报：智慧决策“苹”台领航者》获第十九届挑战杯人工智能专项赛校赛三等奖奖状，2025年6月16日",
      icon: "fas fa-mobile-alt",
      footerLink: []
    },
    {
      title: "生命科学竞赛 · 校内选拔赛团队二等奖",
      subtitle:
        "南京农业大学第一届大学生生命科学竞赛选拔赛复赛，团队获二等奖（2026.08.31）。",
      images: [
        {
          src: `${process.env.PUBLIC_URL}/images/liangxiao/life-science-competition-commitment.jpg`,
          alt: "第十一届全国大学生生命科学竞赛（科学探究类）参赛承诺书，含梁潇所在团队的成员信息",
          label: "参赛承诺书"
        },
        {
          src: `${process.env.PUBLIC_URL}/images/liangxiao/life-science-competition-results.jpg`,
          alt: "南京农业大学第一届大学生生命科学竞赛选拔赛复赛获奖公示，落款日期2026年8月31日",
          label: "获奖公示"
        }
      ],
      footerLink: []
    },
    {
      title: "狂犬病日调研大赛 · 二等奖",
      subtitle:
        "南京农业大学第一届狂犬病日调研大赛，小组获二等奖（2025年3月）。",
      image: `${process.env.PUBLIC_URL}/images/liangxiao/rabies-research-award.jpg`,
      imageAlt:
        "梁潇所在小组获南京农业大学第一届狂犬病日调研大赛二等奖的荣誉证书",
      imageRotation: -90,
      footerLink: []
    },
    {
      title: "英文辩论大赛 · 最佳辩手",
      subtitle: "English Debate 英文辩论大赛，获最佳辩手（2024.11.02）。",
      image: `${process.env.PUBLIC_URL}/images/liangxiao/english-debate-best-debater.jpg`,
      imageAlt: "英文辩论大赛最佳辩手证书，日期2024年11月2日，保留原有遮挡",
      footerLink: []
    },
    {
      title: "二维游戏设计师 · 高级",
      subtitle:
        "专业人才职业技能证书，测评专业为二维游戏设计师，等级高级（2024.01.23）。",
      icon: "fas fa-palette",
      imageAlt: "二维游戏设计师高级专业人才职业技能证书，发证日期2024年1月23日",
      imageRotation: -90,
      footerLink: []
    },
    {
      title: "我眼中的南农 · 校赛二等奖",
      subtitle: "《一生麦事》，独立使用 AIGC 完成。",
      icon: "fas fa-film",
      footerLink: [
        {
          name: "观看《一生麦事》",
          url: `${process.env.PUBLIC_URL}/videos/liangxiao/video-06.mp4`
        }
      ]
    },
    {
      title: "Tripo 世界黑客松 S1",
      subtitle: "XR设备开发赛道三等奖。",
      image: `${process.env.PUBLIC_URL}/images/liangxiao/tripo-award.png`,
      imageAlt: "Tripo 世界黑客松 S1 颁奖现场合影",
      icon: "fas fa-vr-cardboard",
      footerLink: []
    },
    {
      title: "南科松 Agent · 第九名",
      subtitle: "5小时极限搭建。",
      icon: "fas fa-robot",
      footerLink: []
    },
    {
      title: "酷狗音乐 / 腾讯音乐人",
      subtitle: "2024.10.21 双平台签约成功，发行四首音乐作品，播放破万。",
      icon: "fas fa-music",
      footerLink: []
    }
  ],
  display: true
};

const ongoingProjects = {
  title: "参赛中",
  subtitle: "正在投入的项目与创作，持续推进中",
  projects: [
    {
      projectName: "忆流幻境",
      projectDesc:
        "大学生物理竞赛国赛参赛中。负责 Unity 引擎的项目全栈开发与模型搭建。",
      status: "参赛中",
      icon: "fas fa-gamepad",
      footerLink: []
    },
    {
      projectName: "南农主楼",
      projectDesc: "绘画作品，参加江苏省第八届大学生艺术展演。",
      status: "参赛中",
      icon: "fas fa-palette",
      footerLink: [
        {
          name: "查看《南农主楼》作品实拍",
          url: `${process.env.PUBLIC_URL}/videos/liangxiao/video-08.mp4`
        }
      ]
    },
    {
      projectName: "大学生新文科大赛",
      projectDesc: "参赛中，负责游戏开发与网站优化。",
      status: "参赛中",
      icon: "fas fa-laptop-code",
      footerLink: []
    },
    {
      projectName: "来斯南京，亲AI的宁",
      projectDesc: "AIGC市赛参赛中，负责脚本、文案、剪辑等工作。",
      status: "参赛中",
      video: {
        title: "政策解读动画",
        src: `${process.env.PUBLIC_URL}/videos/liangxiao/video-05.mp4`,
        poster: `${process.env.PUBLIC_URL}/videos/liangxiao/video-05-poster.jpg`
      },
      footerLink: [
        {
          name: "打开《政策解读动画》",
          url: `${process.env.PUBLIC_URL}/videos/liangxiao/video-05.mp4`
        }
      ]
    }
  ],
  display: true
};

const entrepreneurshipSection = {
  title: "创业实践",
  subtitle: "从作品实践走向创业探索与技术咨询",
  projects: [
    {
      projectName: "OPC创业",
      projectDesc:
        "成立OPC公司。同时，目前为南京皓瀚星网络科技有限公司股东之一。",
      status: "创业实践",
      icon: "fas fa-building",
      footerLink: []
    },
    {
      projectName: "赢在南京 · 创业大赛",
      projectDesc: "参加创业大赛并晋级校赛，区赛未晋级。",
      status: "晋级校赛 · 区赛未晋级",
      image: `${process.env.PUBLIC_URL}/images/liangxiao/nanjing-entrepreneurship-campus.jpg`,
      imageAlt: "“赢在南京”校赛现场合影",
      footerLink: [
        {
          name: "查看校赛现场原图",
          url: `${process.env.PUBLIC_URL}/images/liangxiao/nanjing-entrepreneurship-campus.jpg`
        }
      ]
    },
    {
      projectName: "江苏元能熵控科技有限公司 · 技术顾问",
      projectDesc: "受聘担任技术顾问，负责技术咨询相关工作。",
      status: "2026.08.24受聘 · 任期三年",
      image: `${process.env.PUBLIC_URL}/images/liangxiao/technical-advisor-appointment.jpg`,
      imageAlt: "江苏元能熵控科技有限公司聘请梁潇担任技术顾问的聘书",
      footerLink: [
        {
          name: "查看聘书原图",
          url: `${process.env.PUBLIC_URL}/images/liangxiao/technical-advisor-appointment.jpg`
        }
      ]
    }
  ],
  display: true
};

const mediaGallerySection = {
  title: "影像与作品",
  subtitle:
    "按创作类型整理，绘画、建模与各自的过程记录集中展示。点击图片可查看原图。",
  display: true,
  categories: [
    {
      id: "drawing",
      title: "绘画作品",
      description:
        "按作品日期由近到远，记录插画、素描与创作过程。未标注日期的作品收录在末尾。",
      photoFiles: [
        "drawing-2024-12-21.jpg",
        "drawing-2024-11-06.jpg",
        "illustration-color-portrait.jpg",
        "drawing-2024-07-10.jpg",
        "drawing-2024-06-16.jpg",
        "illustration-starlight.jpg",
        "drawing-2024-03-03-sketch.jpg",
        "drawing-2024-03-03-linework.jpg",
        "drawing-2024-03-03-color.jpg",
        "drawing-2024-03-03-shading.jpg",
        "illustration-dragon.jpg",
        "drawing-2024-01-23.jpg",
        "drawing-2024-01-17.jpg",
        "illustration-cherry-blossoms.png",
        "illustration-purple-flowers.jpg",
        "illustration-swordswoman.jpg",
        "illustration-blue-character.jpg",
        "drawing-cat.jpg",
        "sketch-eagle.jpg",
        "drawing-study-2023-08-03.jpg",
        "digital-sketch-2023-07-27.jpg",
        "drawing-study-2023-07-02.jpg"
      ],
      videoFiles: [
        "video-08.mp4",
        "video-09.mp4",
        "video-11.mp4",
        "video-14.mp4"
      ]
    },
    {
      id: "modeling",
      title: "三维建模",
      description: "Blender 建筑与角色建模、校园扫描重建和模型演示。",
      photoFiles: [
        "blender-campus-overview.jpg",
        "blender-campus-detail.jpg",
        "blender-campus-buildings.jpg",
        "blender-campus-stadium.jpg",
        "architecture-model.png",
        "campus-reconstruction.png",
        "campus-top-view.png",
        "mascot-blender.png"
      ],
      videoFiles: ["video-07.mp4", "video-10.mp4", "video-12.mp4"]
    },
    {
      id: "aigc",
      title: "AIGC 影像",
      description: "AI 影像叙事、主题短片与卡通讲解动画。",
      photoFiles: [],
      videoFiles: ["video-06.mp4", "video-04.mp4", "video-05.mp4"]
    },
    {
      id: "development",
      title: "开发演示",
      description: "社团管理系统记录、小程序与后台操作演示。",
      photoFiles: [
        "club-system-service-hall.jpg",
        "club-system-admin-entry.jpg",
        "club-system-service-entry.jpg",
        "club-system-launch-note.png"
      ],
      videoFiles: ["video-01.mp4", "video-02.mp4", "video-03.mp4"]
    },
    {
      id: "music",
      title: "音乐创作",
      description: "为洛天依创作的歌曲与音乐作品记录。",
      photoFiles: [],
      videoFiles: ["video-13.mp4"]
    },
    {
      id: "events",
      title: "比赛与活动",
      description: "Tripo 比赛随拍、技术交流与创新创业现场。",
      photoFiles: [
        "tripo-portrait.png",
        "riverside-portrait.png",
        "waytoagi-gathering.jpg",
        "innovation-contest.jpg",
        "xuanwu-entrepreneurship.jpg"
      ],
      videoFiles: []
    }
  ],
  photos: [
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/club-system-service-hall.jpg`,
      title: "社团管理系统 · 网上办事大厅入口",
      alt: "南农网上办事大厅搜索结果中的学生社团管理系统入口",
      width: 1272,
      height: 828,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/club-system-admin-entry.jpg`,
      title: "社团管理系统 · 行政办公入口",
      alt: "行政办公服务列表中标注为新的学生社团管理系统入口",
      width: 1080,
      height: 1080,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/club-system-service-entry.jpg`,
      title: "社团管理系统 · 业务直通车入口",
      alt: "业务直通车服务列表中的学生社团管理系统入口",
      width: 1080,
      height: 1080,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/club-system-launch-note.png`,
      title: "社团管理系统 · 上线与开发说明",
      alt: "社团管理系统上线、公开测试、独立全栈开发及技术栈的说明截图",
      width: 622,
      height: 1041,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/drawing-2024-12-21.jpg`,
      date: "2024-12-21",
      title: "绘画作品 · 2024.12.21",
      alt: "蓝紫色海底场景中，浅色长发角色坐在水母上，周围有鱼群与气泡，左下角保留署名和日期",
      width: 1922,
      height: 1080,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/drawing-2024-11-06.jpg`,
      date: "2024-11-06",
      title: "绘画作品 · 2024.11.06",
      alt: "桌面上的绘画作品实拍，蓝衣金发角色周围有彩色花朵、叶片和白色云朵装饰",
      width: 1080,
      height: 1920,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/drawing-2024-07-10.jpg`,
      date: "2024-07-10",
      title: "绘画作品 · 2024.07.10",
      alt: "淡紫色背景中的黑发眼镜角色半身绘画，穿着浅黄色上衣，左侧保留星迹署名",
      width: 1007,
      height: 1605,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/drawing-2024-06-16.jpg`,
      date: "2024-06-16",
      title: "绘画作品 · 2024.06.16",
      alt: "蓝色星空与花海背景中，橙发角色手持白伞站在左侧，右侧远处有红色风车",
      width: 1838,
      height: 1080,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/drawing-2024-03-03-sketch.jpg`,
      date: "2024-03-03",
      title: "绘画作品 · 2024.03.03 · 构图草稿",
      alt: "Photoshop中的角色与龙形构图草稿，保留完整工作界面",
      width: 1729,
      height: 1080,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/drawing-2024-03-03-linework.jpg`,
      date: "2024-03-03",
      title: "绘画作品 · 2024.03.03 · 线稿细化",
      alt: "Photoshop中的坐姿角色线稿细化，周围排列参考图片，保留完整工作界面",
      width: 1809,
      height: 1080,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/drawing-2024-03-03-color.jpg`,
      date: "2024-03-03",
      title: "绘画作品 · 2024.03.03 · 基础上色",
      alt: "坐姿角色已铺设基础颜色，周围龙形仍为线稿的绘画过程",
      width: 822,
      height: 1176,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/drawing-2024-03-03-shading.jpg`,
      date: "2024-03-03",
      title: "绘画作品 · 2024.03.03 · 明暗塑造",
      alt: "坐姿角色、座椅与周围龙形开始添加明暗和光束的绘画过程",
      width: 840,
      height: 1183,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/illustration-dragon.jpg`,
      date: "2024-03-03",
      title: "绘画作品 · 2024.03.03 · 完成稿",
      alt: "深色龙形环绕坐姿角色的完整绘画，底部保留署名与2024年3月3日日期",
      width: 1080,
      height: 1527,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/drawing-2024-01-23.jpg`,
      date: "2024-01-23",
      title: "绘画作品 · 2024.01.23",
      alt: "群山与夕阳背景中，绿衣角色弹奏弦乐器、浪花环绕的绘画作品",
      width: 1919,
      height: 1080,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/drawing-2024-01-17.jpg`,
      date: "2024-01-17",
      title: "绘画作品 · 2024.01.17",
      alt: "浅黄色背景上，戴眼镜的棕发 Q 版角色绘画，右侧写有星迹字样",
      width: 568,
      height: 568,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/drawing-study-2023-08-03.jpg`,
      date: "2023-08-03",
      title: "复刻练习 · 2023.08.03",
      alt: "左右并排的场景绘画复刻练习，画面包含云雾中的石柱遗迹、绿地与红色尖帽人物",
      width: 1436,
      height: 1080,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/digital-sketch-2023-07-27.jpg`,
      date: "2023-07-27",
      title: "板绘素描练习 · 2023.07.27",
      alt: "深灰背景中的女性半身石膏像板绘素描练习，呈现卷发、面部与衣褶的明暗",
      width: 1080,
      height: 1439,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/drawing-study-2023-07-02.jpg`,
      date: "2023-07-02",
      title: "临摹作品 · 2023.07.02",
      alt: "白色背景上左右并排的短发墨镜角色全身图，包含灰黑色绘画与蓝色线稿、铺色",
      width: 1527,
      height: 1080,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/illustration-cherry-blossoms.png`,
      date: "2025-01-23",
      title: "角色插画 · 樱花与书页",
      alt: "樱花与展开的书页之间，青绿色长发角色的横幅插画",
      width: 1920,
      height: 1080,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/illustration-purple-flowers.jpg`,
      title: "角色插画 · 紫色花间",
      alt: "紫色花朵背景中的金发角色全身插画",
      width: 1600,
      height: 1600,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/illustration-swordswoman.jpg`,
      title: "角色插画 · 持剑角色",
      alt: "白色背景上的银灰长发持剑角色插画",
      width: 866,
      height: 866,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/illustration-color-portrait.jpg`,
      date: "2024-09-01",
      title: "绘画作品 · 2024.09.01 · 彩色肖像",
      alt: "以明亮色彩绘制的红发角色肖像插画",
      width: 820,
      height: 820,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/illustration-starlight.jpg`,
      date: "2024-03-15",
      title: "绘画作品 · 2024.03.15 · 星空",
      alt: "星光与紫色云层背景中的白发角色插画",
      width: 826,
      height: 1169,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/drawing-cat.jpg`,
      title: "动物绘画 · 猫",
      alt: "深色纸面上绘制的蓝眼猫肖像作品实拍",
      width: 800,
      height: 1067,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/sketch-eagle.jpg`,
      title: "动物素描 · 鹰",
      alt: "鹰的头部与羽毛细节素描作品实拍",
      width: 1365,
      height: 1024,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/illustration-blue-character.jpg`,
      title: "角色插画 · 蓝衣角色",
      alt: "粉色背景中的蓝发蓝衣兽耳角色全身插画",
      width: 1598,
      height: 2440,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/tripo-portrait.png`,
      title: "Tripo 活动现场",
      alt: "在 Tripo 活动签名墙前的个人照片",
      width: 1440,
      height: 1523,
      fit: "cover"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/riverside-portrait.png`,
      title: "Tripo 比赛随拍",
      alt: "Tripo比赛期间在江畔拍摄的个人照片",
      width: 1920,
      height: 1440,
      fit: "cover"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/architecture-model.png`,
      title: "建筑建模",
      alt: "建筑三维模型渲染图",
      width: 1451,
      height: 1280,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/campus-reconstruction.png`,
      title: "校园场景重建",
      alt: "校园三维重建场景的斜视图",
      width: 1610,
      height: 906,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/mascot-blender.png`,
      title: "角色建模过程",
      alt: "Blender 中的卡通角色模型工作画面",
      width: 2467,
      height: 1440,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/campus-top-view.png`,
      title: "校园场景俯视",
      alt: "Blender 中校园三维重建模型的俯视图",
      width: 1602,
      height: 1098,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/blender-campus-detail.jpg`,
      title: "Blender 校园建模 · 建筑细节",
      alt: "梁潇的 Blender 校园场景作品，展示图书馆与活动中心等建筑细节",
      width: 2536,
      height: 1470,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/blender-campus-buildings.jpg`,
      title: "Blender 校园建模 · 建筑组团",
      alt: "梁潇的 Blender 校园场景作品，展示建筑组团与道路布局",
      width: 2536,
      height: 1470,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/blender-campus-overview.jpg`,
      title: "Blender 校园建模 · 校园全景",
      alt: "梁潇的 Blender 校园场景作品，展示校园整体建模与场景布局",
      width: 2536,
      height: 1470,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/blender-campus-stadium.jpg`,
      title: "Blender 校园建模 · 运动场",
      alt: "梁潇的 Blender 校园场景作品，展示运动场、跑道及周边建筑",
      width: 2536,
      height: 1470,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/waytoagi-gathering.jpg`,
      title: "WaytoAGI 活动合影",
      alt: "阿里中心南京的 WaytoAGI 活动合影",
      width: 1448,
      height: 1086,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/innovation-contest.jpg`,
      title: "创新创业大赛现场",
      alt: "新动能创新创业大赛现场的参赛记录照片",
      width: 4608,
      height: 3456,
      fit: "contain"
    },
    {
      src: `${process.env.PUBLIC_URL}/images/liangxiao/xuanwu-entrepreneurship.jpg`,
      title: "赢在玄武 · 参赛现场",
      alt: "赢在玄武青年大学生创新创业大赛背景板前的现场照片",
      width: 4096,
      height: 3072,
      fit: "contain"
    }
  ],
  videos: [
    {title: "小程序操作演示（一）", description: "03:40 · 页面与功能录屏"},
    {title: "小程序操作演示（二）", description: "01:43 · 聊天与用户页面录屏"},
    {title: "后台管理系统演示", description: "01:28 · 管理界面操作录屏"},
    {title: "白虎主题影像", description: "01:31 · AIGC 影像作品"},
    {
      title: "来斯南京，亲AI的宁 · 政策解读动画",
      description: "03:36 · AIGC市赛参赛中 · 负责脚本、文案、剪辑等工作"
    },
    {
      title: "一生麦事",
      description: "04:55 · 独立 AIGC 创作 · “我眼中的南农”校赛二等奖"
    },
    {title: "建筑模型贴图展示", description: "01:30 · 建筑模型与贴图过程"},
    {
      title: "南农主楼",
      description: "00:12 · 绘画作品实拍 · 参加江苏省第八届大学生艺术展演"
    },
    {
      title: "角色插画绘制过程",
      date: "2025-01-23",
      description: "00:30 · 从线稿到上色的创作记录"
    },
    {
      title: "校园 3D 扫描建模",
      description: "05:00 · 个人扫描建模作品 · 校园场景漫游"
    },
    {title: "黑发角色插画绘制过程", description: "00:46 · 铺色与细节绘制记录"},
    {
      title: "Blender 3D 建模作品",
      description: "00:36 · Blender 制作 · 角色模型多角度展示"
    },
    {
      title: "为洛天依创作的歌曲",
      description: "00:18 · 音乐创作 · 为洛天依写歌"
    },
    {
      title: "绘画作品 · 2024.03.25",
      date: "2024-03-25",
      description: "00:11 · 绘画作品视频记录"
    }
  ].map((video, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      src: `${process.env.PUBLIC_URL}/videos/liangxiao/video-${number}.mp4`,
      poster: `${process.env.PUBLIC_URL}/videos/liangxiao/video-${number}-poster.jpg`,
      ...video
    };
  })
};

const blogSection = {
  title: "",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};
const talkSection = {title: "", subtitle: "", talks: [], display: false};
const podcastSection = {title: "", subtitle: "", podcast: [], display: false};
const resumeSection = {title: "", subtitle: "", display: false};

const contactInfo = {
  title: "一起把想法做成作品",
  subtitle: "全栈开发、视觉表达与AI创作，让技术与创意在作品中相遇。",
  image: `${process.env.PUBLIC_URL}/images/liangxiao/portrait.png`,
  imageAlt: "梁潇的个人照片，蓝天背景",
  number: "",
  email_address: ""
};

const twitterDetails = {userName: "", display: false};
const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  ongoingProjects,
  entrepreneurshipSection,
  mediaGallerySection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
