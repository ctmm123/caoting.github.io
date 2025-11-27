# 构建和运行说明

## 前提条件
1. 安装 Node.js (推荐版本 18.x 或更高)
   - 访问 https://nodejs.org/
   - 下载并安装 LTS 版本

## 安装步骤
1. 打开命令提示符或 PowerShell
2. 导航到项目目录:
   ```
   cd c:\Users\Administrator\Downloads\nexus-resume---ai-powered-portfolio
   ```

## 运行开发服务器
1. 安装依赖:
   ```
   npm install
   ```

2. 创建环境变量文件:
   重命名 `.env.local.example` 文件为 `.env.local`，并填入你的 Gemini API Key:
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

3. 运行开发服务器:
   ```
   npm run dev
   ```
   
   这将在 http://localhost:3000 启动开发服务器

## 构建生产版本
1. 运行构建命令:
   ```
   npm run build
   ```

   构建完成后，会在项目根目录下生成 `dist` 目录，其中包含可用于部署的生产版本文件。

## 预览生产版本
1. 构建完成后，可以预览生产版本:
   ```
   npm run preview
   ```

这将在 http://localhost:4173 启动预览服务器