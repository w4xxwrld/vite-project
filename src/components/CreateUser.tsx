import React, { useState } from 'react';
import { Form, Input, Modal } from 'antd';
import ButtonComponent from './Button';
import { PlusOutlined } from '@ant-design/icons';

interface UserProps {
    name: string;
    number: string;
}

interface CreateUserProps {
    onCreate: (values: UserProps) => void;
}

const CreateUser: React.FC<CreateUserProps> = ({ onCreate }) => {
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);

    const handleCreate = (values: UserProps) => {
        console.log('Received values of form: ', values);
        onCreate(values);
        setOpen(false);
    };

    return (
        <>
            <ButtonComponent name='Add member' icon={<PlusOutlined />} onClick={() => setOpen(true)} />
            <Modal
                open={open}
                title="Add a member"
                okText="Create"
                cancelText="Cancel"
                okButtonProps={{ autoFocus: true, htmlType: 'submit' }}
                onCancel={() => setOpen(false)}
                destroyOnClose
                modalRender={(dom) => (
                    <Form
                        layout="vertical"
                        form={form}
                        name="form_in_modal"
                        initialValues={{ modifier: 'public' }}
                        clearOnDestroy
                        onFinish={handleCreate}
                    >
                        {dom}
                    </Form>
                )}
            >
                <Form.Item
                    name="name"
                    label="Member`s name"
                    rules={[{ required: true, message: 'Input member`s name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="number"
                    label="Phone number"
                    rules={[{ required: true, message: 'Input member`s phone number!' }]}>
                    <Input />
                </Form.Item>
            </Modal>
        </>
    );
};

export default CreateUser;
