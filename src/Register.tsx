import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Layout, Flex } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const Register: React.FC = () => {
    const navigate = useNavigate();
    const validatePassword = async (_: any, value: string) => {
        if (!value) {
          throw new Error('Please input your Password!');
        }
        // Password must be at least 6 characters, with at least 1 capital letter and 1 number
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
    <Flex className='h-screen w-screen'>
    <Layout className='w-screen h-screen flex flex-col'>
      <Header className='bg-black sticky top-0 h-24 flex items-center'>
        <div className="w-12 h-12 text-white flex items-center justify-center">Logo</div>
      </Header>
      <Content className='flex-grow flex items-center justify-center flex-col'>
        <div className="w-64 flex items-center justify-center mb-8">
          <img src='./react.png' alt="Logo" className="h-32" />
        </div>
        <Form
          name="register"
          className="w-96 flex flex-col"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' },
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
            <Button type="primary" htmlType="submit" className="register-form-button">
              Create account
            </Button>
            <Link className='mt-2 ml-5' to="/login">Or Login now!</Link>
          </Form.Item>
        </Form>
      </Content>
      <Footer className='h-24 flex items-center justify-center space-x-10'>
        <Link to="/">About us</Link>
        <Link to="/">Terms of conditions</Link>
        <Link to="/">Contacts</Link>
        <Link to="/">Partnership</Link>
      </Footer>
    </Layout>
    </Flex>
  );
};

export default Register;
