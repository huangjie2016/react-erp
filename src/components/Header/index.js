import React from 'react'
import {Row, Col} from 'antd';
import './index.less';
import Util from '../../utils/utils';
import axios from '../../axios';

//let city= '变量beijing';
//http://api.map.baidu.com/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2
export default class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '最骚的就是你',
      sysTime: null,
      weather: '',
      dayPictureUrl: ''
    };
  }

  componentWillMount(){
    setInterval(() => {
      let sysTime = Util.formateDate(new Date().getTime());
      this.setState({
        sysTime
      })
    }, 1000);
    this.getWeatherAPIData();
  }

  getWeatherAPIData(){
    const city = '上海';
    axios.jsonp({
      url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    }).then(res => {
      if(res.status === 'success'){
        const data = res.results[0].weather_data[0];
        this.setState({
          weather: data.weather,
          dayPictureUrl: data.dayPictureUrl
        })
      }
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
          <Col span="3" className="breadcrumb-title">首页</Col>
          <Col span="21" className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-detail">
              <img src={this.state.dayPictureUrl} />
              {this.state.weather}
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}
