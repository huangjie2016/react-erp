export default {
  formateDate(time){
    if(!time) return '';
    let date = new Date(time);
    let minutes = '';
    let second = '';
    if(date.getMinutes()<10){
      minutes = '0' + date.getMinutes();
    }else{
      minutes =  date.getMinutes();
    }
    if(date.getSeconds()<10){
      second = '0' + date.getSeconds();
    }else{
      second =  date.getSeconds();
    }
    return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()
    +' '+date.getHours() + ':' + minutes+':'+second;
  }
}
