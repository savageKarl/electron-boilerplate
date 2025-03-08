import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { produce } from 'immer';
import { debounce, capitalize } from 'lodash';
import { Button, Card, Input, List, Space, Typography, message } from 'antd';

const { Title, Text } = Typography;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const LibraryDemo: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  // 使用 axios 获取数据
  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const response = await axios.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5');
        setTodos(response.data);
        setFilteredTodos(response.data);
      } catch (error) {
        message.error('获取数据失败');
        console.error('获取数据失败:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // 使用 lodash 的 debounce 函数处理搜索
  const handleSearch = debounce((value: string) => {
    const filtered = todos.filter(todo =>
      todo.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTodos(filtered);
  }, 300);

  // 处理搜索输入
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchText(value);
    handleSearch(value);
  };

  // 使用 immer 更新状态
  const toggleTodoStatus = (id: number) => {
    setTodos(produce(draft => {
      const todo = draft.find(t => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }));

    // 同时更新过滤后的列表
    setFilteredTodos(produce(draft => {
      const todo = draft.find(t => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }));
  };

  return (
    <Card title={<Title level={3}>库集成演示</Title>} className="w-full max-w-2xl mx-auto my-4">
      <Space direction="vertical" className="w-full">
        <div>
          <Text strong>搜索任务：</Text>
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
          renderItem={todo => (
            <List.Item
              actions={[
                <Button
                  type={todo.completed ? "primary" : "default"}
                  onClick={() => toggleTodoStatus(todo.id)}
                >
                  {todo.completed ? '已完成' : '未完成'}
                </Button>
              ]}
            >
              <div className={`${todo.completed ? 'line-through text-gray-400' : ''}`}>
                {capitalize(todo.title)}
              </div>
            </List.Item>
          )}
        />

        <div className="mt-4">
          <Text type="secondary">
            • Axios 用于获取远程数据<br />
            • Immer 用于不可变状态更新<br />
            • Lodash 用于实用函数 (debounce, capitalize)
          </Text>
        </div>
      </Space>
    </Card>
  );
};

export default LibraryDemo;
