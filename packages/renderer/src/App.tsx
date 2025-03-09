import React from 'react';
import './App.css';
import TestComponent from './components/TestComponent';
import LibraryDemo from './components/LibraryDemo';
import SignupForm from './components/SignupForm';
import { Space, Layout } from 'antd';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import DarkModeDemo from './components/DarkModeDemo';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <ThemeProvider>
      <Layout className="min-h-screen">
        <Header
          className="flex items-center justify-between px-6 bg-white dark:bg-[#141414] transition-colors duration-300"
          style={{ backgroundColor: 'transparent', padding: 0 }}
        >
          <div className="text-lg font-bold text-black dark:text-white">
            Electron + Vite + React
          </div>
          <ThemeToggle />
        </Header>
        <Content className="p-6">
          <div className="bg-white dark:bg-[#1f1f1f] p-6 rounded-lg shadow-md transition-colors duration-300">
            <h1 className="text-2xl font-bold mb-4 text-black dark:text-white">欢迎使用</h1>
            <p className="text-gray-800 dark:text-gray-300">
              这是一个支持暗黑模式的 Electron 应用程序，使用 React、Ant Design 和 Tailwind CSS
              构建。
            </p>

            <Space direction="vertical" size="large" className="w-full mt-6">
              <TestComponent />
              <LibraryDemo />
              <SignupForm />
              <DarkModeDemo />
            </Space>
          </div>
        </Content>
        <Footer className="text-center bg-[#f0f2f5] dark:bg-[#141414] text-gray-600 dark:text-gray-400 transition-colors duration-300">
          Electron + Vite + React 应用模板 ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
