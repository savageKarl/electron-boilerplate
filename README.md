# Electron + Vite + React 应用模板

这是一个基于 [cawa-93/vite-electron-builder](https://github.com/cawa-93/vite-electron-builder) 的 Electron 应用模板，集成了 React、TypeScript、ESLint、Prettier 和 Git 提交规范。该模板遵循最新的安全要求、建议和最佳实践，为开发安全、高效的桌面应用程序提供了坚实的基础。

## 特性

- **Electron**: 使用最新版本的 Electron，包含所有最新的安全补丁
- **Vite**: 极速的前端构建工具，提供快速的热重载开发体验
- **React**: 使用 React 18 构建用户界面
- **TypeScript**: 全面的类型支持，提高代码质量和开发效率
- **ESLint + Prettier**: 代码质量和格式化工具，确保代码风格一致
- **Git 提交规范**: 使用 Conventional Commits 规范和 simple-git-hooks 进行提交验证
- **自动化测试**: 使用 Playwright 进行端到端测试
- **自动更新**: 支持应用程序的自动更新功能
- **工作区结构**: 使用 npm 工作区管理多个包，实现关注点分离
- **Ant Design**: 集成了 Ant Design 组件库，快速构建美观的用户界面
- **Tailwind CSS**: 集成了 Tailwind CSS，提供实用优先的 CSS 框架

## 项目结构

项目被设计为 monorepo，应用程序的每个部分都是一个独立的包：

- `packages/main`: Electron 的主进程实现
- `packages/preload`: Electron 的预加载脚本实现
- `packages/renderer`: 基于 React 的渲染进程实现
- `packages/electron-versions`: 获取 Electron 内部组件版本的辅助函数
- `packages/integrate-renderer`: 用于配置新界面包的辅助包

## 快速开始

按照以下步骤开始使用模板：

1. 克隆仓库

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. 安装依赖

   ```bash
   npm install
   ```

3. 开发模式启动应用

   ```bash
   npm start
   ```

4. 编译可执行文件
   ```bash
   npm run compile
   ```

## 开发指南

### 项目命令

- `npm start`: 以开发模式启动应用，支持热重载
- `npm run build`: 在所有工作区中运行构建命令
- `npm run compile`: 先运行构建命令，然后使用 electron-builder 将项目编译为可执行文件
- `npm run test`: 使用 Playwright 在编译后的应用上执行端到端测试
- `npm run typecheck`: 在所有工作区中运行类型检查
- `npm run lint`: 运行 ESLint 检查代码
- `npm run lint:fix`: 运行 ESLint 并自动修复问题
- `npm run format`: 使用 Prettier 格式化代码
- `npm run commit`: 使用 commitizen 创建符合规范的提交信息

### 使用第三方依赖

- 在 `renderer` 中，您可以使用任何前端依赖，如 React、lodash、axios 等
- 在 `preload` 中，您可以使用需要 Node.js API 的依赖
- 通过 `preload` 导出函数，可以在 `renderer` 中安全地访问 Node.js API

### 环境变量

环境变量通过 `import.meta.env` 访问。默认有两种模式：

- `production`: 默认模式
- `development`: 通过 `npm start` 脚本使用

## Git 提交规范

本项目使用 Conventional Commits 规范进行 Git 提交，并通过 simple-git-hooks 和 commitlint 进行验证。提交类型包括：

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档变更
- `style`: 代码格式（不影响代码运行的变动）
- `refactor`: 重构（既不是新增功能，也不是修改 bug 的代码变动）
- `perf`: 性能优化
- `test`: 增加测试
- `chore`: 构建过程或辅助工具的变动
- `revert`: 回退
- `build`: 打包
- `ci`: CI 相关变更

## 技术栈与文档链接

### 核心技术

- [Electron](https://www.electronjs.org/docs/latest/) - 构建跨平台桌面应用
- [Vite](https://vitejs.dev/guide/) - 前端构建工具
- [React](https://react.dev/learn) - 用户界面库
- [TypeScript](https://www.typescriptlang.org/docs/) - JavaScript 的超集

### UI 框架

- [Ant Design](https://ant.design/docs/react/introduce) - 企业级 UI 设计语言和 React 组件库
- [Tailwind CSS](https://tailwindcss.com/docs) - 实用优先的 CSS 框架

### 工具库

- [Axios](https://axios-http.com/docs/intro) - 基于 Promise 的 HTTP 客户端
- [Lodash](https://lodash.com/docs/) - JavaScript 实用工具库
- [Immer](https://immerjs.github.io/immer/) - 不可变状态管理

### 开发工具

- [ESLint](https://eslint.org/docs/latest/) - 代码质量工具
- [Prettier](https://prettier.io/docs/en/) - 代码格式化工具
- [Commitlint](https://commitlint.js.org/#/) - 提交消息规范检查
- [Commitizen](https://github.com/commitizen/cz-cli) - 提交消息生成工具
- [Simple Git Hooks](https://github.com/toplenboren/simple-git-hooks) - Git 钩子管理
- [Playwright](https://playwright.dev/docs/intro) - 端到端测试框架

### 构建与部署

- [Electron Builder](https://www.electron.build/) - 打包和构建可分发的 Electron 应用
- [electron-updater](https://www.electron.build/auto-update) - Electron 应用自动更新
