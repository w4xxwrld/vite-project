import React from 'react';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

interface SiderProps {
    selectedKey: "1" | "2";
    items: Array<{ label: string; key: string }>;
    onClick?: (key: string) => void;
}

const SiderComponent: React.FC<SiderProps> = ({ selectedKey, items, onClick }) => {
    const handleMenuClick = ({ key }: { key: string }) => {
        if (onClick) {
            onClick(key);
        }
    };

    return (
        <Sider className="text-center font-serif text-xl bg-white border-r-2 border-zinc-600">
            <div className="text-black my-4">Company name</div>
            <Menu
                theme="light"
                className="space-y-6 mt-12 bg-white text-red"
                defaultSelectedKeys={[selectedKey]}
                mode="inline"
                onClick={handleMenuClick}
                items={items}
            />
        </Sider>
    );
};

export default SiderComponent;
