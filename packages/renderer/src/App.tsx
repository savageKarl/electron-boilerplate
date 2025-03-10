import './App.css';
import TestComponent from './components/TestComponent';
import LibraryDemo from './components/LibraryDemo';
import SignupForm from './components/SignupForm';
import { Space } from 'antd';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import DarkModeDemo from './components/DarkModeDemo';

function App() {
  return (
    <ThemeProvider>
      <div className="w-full h-screen bg-white dark:bg-[#1f1f1f] overflow-x-hidden overflow-y-auto p-4">
        <Space direction="vertical" size={16}>
          <ThemeToggle />
          <TestComponent></TestComponent>
          <LibraryDemo></LibraryDemo>
          <SignupForm></SignupForm>
          <DarkModeDemo></DarkModeDemo>
        </Space>
      </div>
    </ThemeProvider>
  );
}

export default App;
