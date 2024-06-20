import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

interface HeaderProps {
  name: string;
}

const HeaderComponent: React.FC<HeaderProps> = ({ name }) => {
  return (
    <Layout>
      <Header className="flex justify-between items-center bg-gradient-to-r from-purple-500 to-pink-500 p-4">
        <h1 className="text-xl">{name}</h1>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
