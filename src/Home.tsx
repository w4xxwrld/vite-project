import React from 'react';
import { Layout, Menu, Button, Table } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

const { Header, Content, Sider, Footer } = Layout;

const items = [
  { label: 'Messages', key: '1' },
  { label: 'Receivers list', key: '2' },
];

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Абоненты', dataIndex: 'numbers', key: 'numbers' },
  { title: 'Дата создания', dataIndex: 'date', key: 'date' },
  { title: 'Статус', dataIndex: 'status', key: 'status' },
];

const data = [
  { id: '1', numbers: '12345', date: '2024-06-19', status: 'Sent' },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e: { key: string }) => {
    if (e.key === '2') {
      navigate('/receivers');
    }
  };

  return (
    <Layout className="h-screen w-screen">
      <Sider className="text-center font-serif text-xl bg-zinc-500">
        Company name
        <Menu
          theme="dark"
          className="space-y-6 mt-12 bg-zinc-500"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header className="flex justify-between items-center bg-white p-4">
          <div className="text-xl">Header</div>
          <div className="space-x-12">
            <Link to="/">Home</Link>
            <Link className='pl-3' to="/about">About Us</Link>
            <Link className='bg-blue-500 rounded-lg pt-2 pb-2 pl-3 pr-3' to="/login">Log In</Link>
          </div>
        </Header>
        <Content className="p-6">
          <Button type="primary" className="mb-4">Create Notification</Button>
          <Table columns={columns} dataSource={data} rowKey="id" />
        </Content>
        <Footer className="text-center bg-zinc-200">Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;
