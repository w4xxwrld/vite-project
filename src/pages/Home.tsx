import React, { useState } from 'react';
import { Layout, Spin, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from '../components/Header';
import FooterComponent from '../components/Footer';
import SiderComponent from '../components/Sider';
import CreateNotif from '../components/CreateNotif';

const { Content } = Layout;

interface NotifProps {
  phoneNumbers: string;
  message: string;
  date: string;
}

const items = [
  { label: 'Notification center', key: '1' },
  { label: 'Members list', key: '2' },
];

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id', className: 'truncate max-w-80' },
  { title: 'Phone Numbers', dataIndex: 'phoneNumbers', key: 'phoneNumbers',  className: 'truncate max-w-80'},
  { title: 'Message', dataIndex: 'message', key: 'message',  className: 'truncate max-w-80' },
  { title: 'Date', dataIndex: 'date', key: 'date',  className: 'truncate max-w-80'},
  { title: 'Status', dataIndex: 'status', key: 'status',  className: 'truncate max-w-80' },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState<'1' | '2'>('1');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);

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

  const handleCreateNotification = (values: NotifProps) => {
    const newData = {
      id: String(data.length + 1),
      phoneNumbers: values.phoneNumbers,
      message: values.message,
      date: values.date,
      status: 'Sent',
    };
    setData([...data, newData]);
    console.log('Notification created:', values);
  };

  return (
    <Layout className="h-screen">
      <SiderComponent items={items} selectedKey={selectedKey} onClick={handleMenuClick} />
      <Layout className="flex flex-col">
        <HeaderComponent name="Notification center" />
        <Content className="flex-grow p-6">
          <CreateNotif onCreate={handleCreateNotification} />
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Spin size="large" />
            </div>
          ) : (
            <Table columns={columns} dataSource={data} rowKey="id" className='text-wrap' rowClassName={() => 'break-words'}/>
          )}
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
};

export default Home;
