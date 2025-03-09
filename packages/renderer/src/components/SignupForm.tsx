// SignupForm.tsx
import React, { useState } from 'react';
import { Form, Input, Button, Switch, Divider } from 'antd';
import {
  MailOutlined,
  LockOutlined,
  MobileOutlined,
  GithubOutlined,
  GoogleOutlined,
} from '@ant-design/icons';

type FormType = 'email' | 'mobile';

const SignupForm: React.FC = () => {
  const [formType, setFormType] = useState<FormType>('email');

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
      <Form layout="vertical">
        {/* 切换注册方式 */}
        <div className="mb-4 flex justify-between items-center">
          <span className="dark:text-gray-300">注册方式:</span>
          <Switch
            checkedChildren={<MobileOutlined />}
            unCheckedChildren={<MailOutlined />}
            onChange={(checked) => setFormType(checked ? 'mobile' : 'email')}
          />
        </div>

        {/* 动态表单项 */}
        {formType === 'email' ? (
          <Form.Item label="邮箱" name="email" rules={[{ required: true, type: 'email' }]}>
            <Input prefix={<MailOutlined />} placeholder="user@example.com" />
          </Form.Item>
        ) : (
          <Form.Item label="手机号" name="mobile" rules={[{ pattern: /^1[3-9]\d{9}$/ }]}>
            <Input prefix={<MobileOutlined />} placeholder="13800138000" />
          </Form.Item>
        )}

        {/* 密码强度验证 */}
        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true },
            { min: 8 },
            { pattern: /(?=.*[A-Z])(?=.*\d)/ }, // 必须包含大写字母和数字
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="至少8位含大写字母和数字" />
        </Form.Item>

        {/* 提交按钮 */}
        <Button
          type="primary"
          htmlType="submit"
          className="w-full !bg-blue-600 hover:!bg-blue-700 dark:!bg-blue-700 dark:hover:!bg-blue-800"
        >
          立即注册
        </Button>

        {/* 第三方登录 */}
        <div className="mt-4 text-center">
          <Divider className="dark:border-gray-700 dark:!text-gray-400">其他方式登录</Divider>
          <div className="flex justify-center space-x-4">
            <Button
              shape="circle"
              icon={<GithubOutlined />}
              size="large"
              className="dark:hover:!text-blue-400"
            />
            <Button
              shape="circle"
              icon={<GoogleOutlined />}
              size="large"
              className="dark:hover:!text-blue-400"
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SignupForm;
