# 个人简历网站

基于 React + TypeScript + Vite 构建的个人简历网站，展示个人信息、技术栈、项目经历等内容。

## 作业要求实现对照表

| 序号 | 作业要求 | 实现位置 | 状态 |
|------|----------|----------|------|
| 1 | 姓名、学号、专业班级等基本信息展示 | [Hero.tsx](src/components/Hero.tsx) | ✅ 已完成 |
| 2 | 个人技能展示（技术栈） | [Skills.tsx](src/components/Skills.tsx) | ✅ 已完成 |
| 3 | 项目经历展示 | [Projects.tsx](src/components/Projects.tsx) | ✅ 已完成 |
| 4 | 兴趣爱好展示 | [About.tsx](src/components/About.tsx) | ✅ 已完成 |
| 5 | 联系方式（电话、邮箱） | [Contact.tsx](src/components/Contact.tsx) | ✅ 已完成 |
| 6 | 点赞 / 认可按钮 | [Projects.tsx](src/components/Projects.tsx) | ✅ 已完成 |
| 7 | 平滑滚动导航 | [Navbar.tsx](src/components/Navbar.tsx) + index.css | ✅ 已完成 |
| 8 | 技能熟练度动态展示（进度条动画） | [Skills.tsx](src/components/Skills.tsx) | ✅ 已完成 |
| 9 | 点击复制电话/邮箱 | [Contact.tsx](src/components/Contact.tsx) | ✅ 已完成 |
| 10 | 项目演示视频展示 | [Projects.tsx](src/components/Projects.tsx) | ✅ 已完成 |

## 项目预览

网站包含以下主要模块：

- **首页（Hero）**：展示姓名、专业、学号及快速导航按钮
- **关于我（About）**：教育背景、兴趣爱好、技术热情
- **技术栈（Skills）**：技能熟练度进度条，滚动触发动画
- **项目经历（Projects）**：可展开的项目卡片，包含视频演示与点赞功能
- **联系方式（Contact）**：电话、邮箱，点击复制

## 快速开始

### 环境要求

- Node.js >= 18.x
- npm >= 9.x

### 安装依赖

```powershell
npm install
```

### 开发模式

```powershell
npm run dev
```

启动后访问：http://localhost:5173

### 构建生产版本

```powershell
npm run build
```

构建产物输出到 `dist/` 目录。

### 预览生产版本

```powershell
npm run preview
```

## 项目结构

```
CV/
├── data/                          # 视频资源目录（作为 Vite publicDir）
│   ├── baby-voice.mp4             # 婴儿情绪识别小程序演示视频
│   ├── memo-typhoon.mp4           # AI归档备忘录演示视频（台风场景）
│   └── memo-archive.mp4           # AI归档备忘录演示视频（自动归档）
├── src/
│   ├── components/                # React 组件
│   │   ├── Navbar.tsx             # 顶部导航栏（滚动时毛玻璃效果）
│   │   ├── Hero.tsx               # 首屏展示区
│   │   ├── About.tsx              # 关于我模块
│   │   ├── Skills.tsx             # 技术栈模块（进度条动画）
│   │   ├── Projects.tsx           # 项目经历模块（可展开卡片）
│   │   ├── Contact.tsx            # 联系方式模块（点击复制）
│   │   └── Footer.tsx             # 页脚
│   ├── App.tsx                    # 主应用组件
│   ├── App.css                    # 全局样式
│   ├── index.css                  # 基础样式重置
│   ├── main.tsx                   # 应用入口
│   └── vite-env.d.ts              # Vite 类型定义
├── index.html                     # HTML 模板
├── vite.config.ts                 # Vite 配置
├── tsconfig.json                  # TypeScript 配置
├── package.json                   # 项目依赖配置
├── readme.md                      # 作业要求（原始文件）
└── PROJECT_README.md              # 项目说明文档
```

## 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| React | ^18.3.1 | 前端框架 |
| TypeScript | ~5.6.2 | 类型安全 |
| Vite | ^6.0.0 | 构建工具 |
| @vitejs/plugin-react | ^4.3.4 | React 插件 |

## 交互功能说明

### 1. 平滑滚动导航

点击顶部导航栏的链接，页面会平滑滚动到对应区域。

### 2. 技能进度条动画

当页面滚动到"技术栈"区域时，进度条会从 0 动态填充到设定的百分比。

### 3. 项目卡片展开/收起

点击项目卡片可以展开查看详细内容和演示视频，再次点击收起。

### 4. 点赞功能

每个项目卡片都有点赞按钮，点击后计数增加。

### 5. 联系方式复制

点击电话或邮箱，内容会自动复制到剪贴板，并显示"已复制"提示。

## Vite 配置说明

`vite.config.ts` 中的关键配置：

- `publicDir: 'data'`：将 `data/` 目录设为静态资源目录，视频文件可通过 `/文件名.mp4` 直接访问
- `assetsInlineLimit: 0`：禁用资源内联，确保大视频文件不会被内联到 JS 中

## 视频文件重命名说明

为解决 Vite 对中文文件名的兼容性问题，`data/` 目录中的视频文件已从中文重命名为英文：

| 原文件名 | 新文件名 | 说明 |
|----------|----------|------|
| 微信小程序婴儿情绪识别demo.mp4 | baby-voice.mp4 | 婴儿情绪识别小程序演示 |
| 在线备忘录demo今天有台风.mp4 | memo-typhoon.mp4 | AI归档备忘录演示（台风场景） |
| 在线备忘录demo自动归档.mp4 | memo-archive.mp4 | AI归档备忘录演示（自动归档） |

## 项目数据

### 个人信息

- 姓名：王汉森
- 学号：102301616
- 专业：计算机科学与技术
- 班级：6班

### 兴趣爱好

- 乒乓球
- 羽毛球

### 技术栈

- TRAE AI 开发工具
- 微信小程序开发
- Web 前端开发
- 模型训练
- API 调用与集成
- 语音识别

### 项目经历

1. **婴儿情绪识别小程序**
   - 标签：小程序、模型训练、语音识别
   - GitHub：https://github.com/qwqvpwp/baby_voice
   - 演示视频：baby-voice.mp4

2. **AI 归档备忘录**
   - 标签：API 调用、Web
   - 演示视频：memo-typhoon.mp4、memo-archive.mp4

## 浏览器支持

- Chrome（推荐）
- Firefox
- Safari
- Edge

## 移动端适配

网站采用响应式设计，适配手机、平板和桌面设备。

## License

MIT