import React from 'react';
import {
  Card,
  Button,
  Switch,
  Input,
  Form,
  Select,
  DatePicker,
  Tabs,
  Table,
  Tag,
  Slider,
} from 'antd';
import { Typography } from 'antd';

const { Text } = Typography;
const { Option } = Select;

const DarkModeDemo: React.FC = () => {
  const [form] = Form.useForm();

  // 表格数据
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === '活跃' ? 'green' : 'volcano'}>{status}</Tag>
      ),
    },
    {
      title: '更新时间',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
    },
  ];

  const data = [
    {
      key: '1',
      name: '项目 Alpha',
      status: '活跃',
      updatedAt: '2023-06-10',
    },
    {
      key: '2',
      name: '项目 Beta',
      status: '暂停',
      updatedAt: '2023-05-22',
    },
  ];

  return (
    <div className="space-y-6">
      <Card title="暗黑模式演示" className="custom-card transition-colors duration-300">
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          当前主题模式: <strong className="dark:text-white">暗黑/明亮</strong>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h3 className="mb-2 text-gray-800 dark:text-gray-200">基础组件</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Button type="primary">主要按钮</Button>
                <Button>默认按钮</Button>
                <Button type="dashed">虚线按钮</Button>
              </div>

              <div className="flex items-center space-x-4">
                <Switch defaultChecked />
                <Input placeholder="请输入内容" style={{ width: 200 }} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-gray-800 dark:text-gray-200">表单组件</h3>
            <Form form={form} layout="vertical">
              <Form.Item label="选择器" name="select">
                <Select placeholder="请选择" style={{ width: 200 }}>
                  <Option value="option1">选项一</Option>
                  <Option value="option2">选项二</Option>
                </Select>
              </Form.Item>

              <Form.Item label="日期选择" name="date">
                <DatePicker />
              </Form.Item>
            </Form>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="mb-2 text-gray-800 dark:text-gray-200">数据展示</h3>
          <Table columns={columns} dataSource={data} size="small" />
        </div>

        <div>
          <h3 className="mb-2 text-gray-800 dark:text-gray-200">其他组件</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Text className="block mb-2 dark:text-gray-300">滑块:</Text>
              <Slider defaultValue={30} />
            </div>
            <div>
              <Text className="block mb-2 dark:text-gray-300">标签页:</Text>
              <Tabs
                items={[
                  { key: '1', label: '标签 1', children: '内容 1' },
                  { key: '2', label: '标签 2', children: '内容 2' },
                ]}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DarkModeDemo;
