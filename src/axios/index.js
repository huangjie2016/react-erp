import JsonP from 'jsonp';
export default class Axios {
  static jsonp(options){
    new Promise((reslove, reject) => {
      JsonP(options.url, {
        param: 'callback'
      }, (err, response) => {
      
      })
    })
  }
}
