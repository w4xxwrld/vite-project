import React, { useState } from 'react';
import { Layout, Table, Spin } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/Header';
import SiderComponent from '../components/Sider';
import FooterComponent from '../components/Footer';
import CreateUser from '../components/CreateUser';

const { Content } = Layout;

interface Member {
  id: string;
  name: string;
  number: string;
}

interface UserProps {
  name: string;
  number: string;
}

const columns: ColumnsType<Member> = [
  { title: 'ID', dataIndex: 'id', key: 'id', className: 'truncate max-w-80' },
  { title: 'Name', dataIndex: 'name', key: 'name', className: 'truncate max-w-80' },
  { title: 'Phone number', dataIndex: 'number', key: 'number', className: 'truncate max-w-80' },
];

const Members: React.FC = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<Member[]>([]);
  const [selectedKey, setSelectedKey] = useState<'1' | '2'>('2');
  const [loading, setLoading] = useState(false); 

  const items = [
    { label: 'Notification center', key: '1' },
    { label: 'Members list', key: '2' },
  ];

  const handleMenuClick = (key: string) => {
    setLoading(true); 
    if (key === '1') {
      setTimeout(() => {
        setSelectedKey(key as '1');
        navigate('/home');
        setLoading(false); 
      }, 1000);
    } else if (key === '2') {
      setTimeout(() => {
        setSelectedKey(key as '2');
        navigate('/members');
        setLoading(false); 
      }, 1000);
    }
  };

  const handleCreateMember = (values: UserProps) => {
    const newMember = { id: (data.length + 1).toString(), ...values };
    setData([...data, newMember]);
  };

  return (
    <Layout className="h-screen w-screen">
      <SiderComponent items={items} selectedKey={selectedKey} onClick={handleMenuClick} />
      <Layout>
        <HeaderComponent name="Members" />
        <Content className="p-6">
          <CreateUser onCreate={handleCreateMember}/>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Spin size="large" />
            </div>
          ) : (
            <Table columns={columns} dataSource={data} rowKey="id" className='text-wrap' rowClassName={() => 'break-words'} />
          )}
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default Members;
