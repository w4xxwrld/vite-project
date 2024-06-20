import React, { useState } from 'react';
import { Form, Input, Modal, Button, DatePicker } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ButtonComponent from './Button';

interface NotifProps {
    phoneNumbers: string;
    message: string;
    date: string;
}

interface CreateNotifProps {
    onCreate: (values: NotifProps) => void;
}

const CreateNotif: React.FC<CreateNotifProps> = ({ onCreate }) => {
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);

    const handleCreate = (values: NotifProps) => {
        console.log('Received values of form: ', values);
        onCreate(values);
        setOpen(false);
    };

    return (
        <>
            <div className='sm:mt-8 md: mt-0 xl:mt-0'><ButtonComponent name='Add member' icon={<PlusOutlined />} onClick={() => setOpen(true)} /></div>
            <Modal
                open={open}
                title="Create Notification"
                okText="Create"
                cancelText="Cancel"
                onCancel={() => setOpen(false)}
                destroyOnClose
                onOk={() => {
                    form
                        .validateFields()
                        .then(values => {
                            form.resetFields();
                            handleCreate(values);
                        })
                        .catch(info => {
                            console.log('Validate Failed:', info);
                        });
                }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{ modifier: 'public' }}
                >
                    <Form.Item
                        name="phoneNumbers"
                        label="Phone Number(s)"
                        rules={[{ required: true, message: 'Please input phone numbers!' }]}
                    >
                        <Input placeholder="Enter one or multiple phone numbers separated by commas" />
                    </Form.Item>
                    <Form.Item
                        name="message"
                        label="Message"
                        rules={[{ required: true, message: 'Please input the message!' }]}
                        className='h-max-96'
                    >
                        <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }} />
                    </Form.Item>
                    <Form.Item
                        name="date"
                        label="Date"
                        rules={[{ required: false, message: 'Please select the date!' }]}
                    >
                        <DatePicker />
                    </Form.Item>
                    <Button type="default">Load .csv file</Button>
                </Form>
            </Modal>
        </>
    );
};

export default CreateNotif;
