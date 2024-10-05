'use client';
import React from 'react';
import { MenuOutlined, CloseOutlined} from '@ant-design/icons';
import {ConfigProvider} from 'antd';
import { Button } from 'antd';


const theme = {
  token: {
    colorPrimary: '#EC5051',
    borderRadius: 8,
    colorInfo: '#EC5051',
  },
}

export interface ToggleMenuButtonType{
  isMenuOpen: boolean,
  setIsMenuOpen: (param:boolean)=>void
}

const ToggleMenuButton = (prop:ToggleMenuButtonType) => {
  const{ isMenuOpen, setIsMenuOpen } = prop;

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ConfigProvider
    theme={theme}
  >
    <Button
      icon={isMenuOpen ? <CloseOutlined /> : <MenuOutlined/>}
      onClick={handleToggle}
      size={'large'}
    />
    </ConfigProvider>
  );
};

export default ToggleMenuButton;
