import React from 'react';
import { Row, Col } from 'antd';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less';

export default class Admin extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
      <Row>
        <Col span="3">
          <NavLeft />
        </Col>
        <Col span="21">
          <Header>
          </Header>
          <Row>right</Row>
          <Footer></Footer>
        </Col>
      </Row>
    )
  }
}
