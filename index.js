function getTimeIn(date){
    let hours=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();
    let str;
    hours>11?str='PM':str='AM';
    if(hours>12){
        hours=hours-12;
    }
    if(hours==0){
        hours=12;
    }
    return `${hours}:${minute}:${second} ${str}`
}
let date=new Date();
console.log(getTimeIn(date))