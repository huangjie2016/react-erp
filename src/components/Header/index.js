import React from 'react'
import {Row, Col} from 'antd';
import './index.less';
import Util from '../../utils/utils';
//let city= '变量beijing';
//http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2
export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '2018',
      sysTime: null
    };
    
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    })
  }
  render(){
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎, {this.state.username}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">首页</Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">晴空万里</span>
          </Col>
        </Row>
      </div>
    )
  }
}
