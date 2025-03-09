import React from 'react';
import { Button, Tooltip } from 'antd';
import { BulbOutlined, BulbFilled } from '@ant-design/icons';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip title={theme === 'light' ? '切换到暗黑模式' : '切换到明亮模式'}>
      <Button
        type="text"
        icon={theme === 'light' ? <BulbOutlined /> : <BulbFilled />}
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label="切换主题"
      />
    </Tooltip>
  );
};

export default ThemeToggle;
