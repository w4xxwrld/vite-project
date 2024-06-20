import React from 'react';
import { Footer } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';

const FooterComponent: React.FC = () => {
  return (
    <Footer className="bg-zinc-200 min-h-3 max-h-24 flex mt-auto items-center justify-center space-x-10">
        <Link to="/home">About us</Link>
        <Link to="/home">Terms of conditions</Link>
        <Link to="/home">Contacts</Link>
        <Link to="/home">Partnership</Link>
        </Footer>
  );
};

export default FooterComponent;
