import React, { useState } from 'react';
import { Layout, Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { PlusOutlined } from '@ant-design/icons';

const { Header, Content, Sider, Footer } = Layout;

interface Receiver {
  id: string;
  name: string;
  number: string;
}

const columns: ColumnsType<Receiver> = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Number', dataIndex: 'number', key: 'number' },
];

const Receivers: React.FC = () => {
  const [data, setData] = useState<Receiver[]>([]);

  const loadNumbers = () => {
    // Dummy data for demonstration; replace with actual data loading logic
    const loadedData: Receiver[] = [
      { id: '1', name: 'John Doe', number: '12345' },
      { id: '2', name: 'Jane Smith', number: '67890' },
    ];
    setData(loadedData);
  };

  return (
    <Layout className="h-screen w-screen">
      <Sider className="text-center font-serif text-xl bg-zinc-500">
        Company name
      </Sider>
      <Layout>
        <Header className="flex justify-between items-center bg-white p-4">
          <div className="text-xl">Receivers</div>
        </Header>
        <Content className="p-6">
          <Button type="primary" className="mb-4" icon={<PlusOutlined />} onClick={loadNumbers}>
            Load Numbers
          </Button>
          <Table columns={columns} dataSource={data} rowKey="id" />
        </Content>
        <Footer className="text-center bg-zinc-200">Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Receivers;
