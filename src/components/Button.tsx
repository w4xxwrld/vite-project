import React from 'react';
import { Button } from 'antd';


interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
  onClick?: (values: any) => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ name, icon, onClick, htmlType }) => {
  return (
    <Button type="primary" className="mb-4 bg-fuchsia-400" icon={icon} htmlType={htmlType} onClick={onClick}>
      {name}
    </Button>
  );
};

export default ButtonComponent;
