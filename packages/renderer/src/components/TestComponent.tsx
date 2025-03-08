import React from 'react';
import { Button, Space, Typography } from 'antd';

const { Title } = Typography;

const TestComponent: React.FC = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <Title level={2}>Ant Design 与 Tailwind CSS 测试</Title>
      <Space direction="vertical" className="w-full">
        <Button type="primary" block>
          Ant Design 按钮
        </Button>
        <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Tailwind CSS 按钮
        </button>
      </Space>
    </div>
  );
};

export default TestComponent;
