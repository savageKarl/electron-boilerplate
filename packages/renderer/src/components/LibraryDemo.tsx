import React, { useState, useEffect } from 'react';
import { Card, List, Input, Button, Space, Typography } from 'antd';
import axios from 'axios';
import { capitalize } from 'lodash';

const { Text, Title } = Typography;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const LibraryDemo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // 使用 Axios 获取数据
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        // 只获取前10条数据
        setTodos(response.data.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.error('获取数据失败:', error);
        setLoading(false);
      });
  }, []);

  // 使用 lodash 处理数据
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // 过滤任务
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // 切换任务状态
  const toggleTodoStatus = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  return (
    <Card
      title={
        <Title level={3} className="dark:text-gray-200">
          库集成演示
        </Title>
      }
      className="w-full max-w-2xl mx-auto my-4 custom-card transition-colors duration-300"
    >
      <Space direction="vertical" className="w-full">
        <div>
          <Text strong className="dark:text-gray-300">
            搜索任务：
          </Text>
          <Input
            placeholder="输入关键词搜索"
            value={searchText}
            onChange={onSearchChange}
            className="mb-4"
          />
        </div>

        <List
          loading={loading}
          bordered
          dataSource={filteredTodos}
          className="transition-colors duration-300"
          renderItem={(todo) => (
            <List.Item
              actions={[
                <Button
                  type={todo.completed ? 'primary' : 'default'}
                  onClick={() => toggleTodoStatus(todo.id)}
                >
                  {todo.completed ? '已完成' : '未完成'}
                </Button>,
              ]}
            >
              <div
                className={`${
                  todo.completed ? 'line-through text-gray-400' : 'dark:text-gray-300'
                }`}
              >
                {capitalize(todo.title)}
              </div>
            </List.Item>
          )}
        />

        <div className="mt-4">
          <Text type="secondary" className="dark:text-gray-400">
            • Axios 用于获取远程数据
            <br />
            • Lodash 用于处理文本大小写
            <br />• Ant Design 组件用于界面展示
          </Text>
        </div>
      </Space>
    </Card>
  );
};

export default LibraryDemo;
