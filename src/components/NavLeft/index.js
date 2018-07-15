import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import MenuConfig from '../../config/menuConfig';
import './index.less';
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentWillMount(){
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode
    })
  }

  // 获取后台返回的菜单递归列表，如果有子菜单children继续递归
  renderMenu = (data) => {
    return data.map(item => {
      if(item.children){
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
              <NavLink to={item.key}>{item.title}</NavLink>
            </Menu.Item>
    })
  };
  
  render(){
    return (
      <div>
        <div className="logo">
          {/*指向public文件夹下的文件*/}
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>Imooc Ms</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    )
  }
}