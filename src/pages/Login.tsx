import React from 'react';
import { LockOutlined, UserOutlined, CheckOutlined } from '@ant-design/icons';
import { Form, Input, Layout } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/Header';
import ButtonComponent from '../components/Button';
import FooterComponent from '../components/Footer';

const { Content } = Layout;

const Login: React.FC = () => {
  const navigate = useNavigate();

  const validatePassword = async (_: any, value: string) => {
    if (!value) {
      throw new Error('Please input your Password!');
    }
    const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!regex.test(value)) {
      throw new Error('Password must be at least 6 characters long, with 1 capital letter and 1 number.');
    }
};

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    setTimeout(() => {
      navigate('/home');
    }, 1000);
  };

  return (
    <Layout className='w-min-screen h-min-screen flex flex-col'>
      <HeaderComponent name='Logo' />
      <Content className='flex-grow flex items-center justify-center flex-col'>
        <div className="w-64 flex items-center justify-center mb-8">
          <img src='./react.png' alt="Logo" className="h-32" />
        </div>
        <Form
          name="login"
          className="w-96 flex flex-col"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: 'Please input your Username!' },
              { min: 4, message: 'Username must be at least 4 characters long!' }
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { validator: validatePassword }
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item className='flex flex-col'>
            <ButtonComponent name="Log in" icon={<CheckOutlined />} htmlType="submit" />
            <Link className='mt-2 ml-5' to="/register">Or create an account now!</Link>
          </Form.Item>
        </Form>
      </Content>
      <FooterComponent/>
    </Layout>
  );
};

export default Login;
