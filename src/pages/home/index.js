import React from 'react';
import './index.less';

export default class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="home-wrap">
        欢迎进入React + Ant开发的共享单车后台系统
      </div>
    )
  }
}