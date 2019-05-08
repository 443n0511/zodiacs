
const moment = require('moment');
require("moment-range");

const button = document.querySelector('.button');
//[取得したい要素].addEventListner("何がきっかけか", 処理させたい関数名 );
button.addEventListener('click', onClickButton);

function onClickButton() {
    let y = document.getElementById("year").value;
    let m = document.getElementById("month").value;
    let d = document.getElementById("day").value;

    document.querySelector('#log').innerHTML = 'あなたの生年月日は'+ y + '年'+ m + '月' + d + '日です。';

    


    //月は「０」を起点とするので−１をする
    const date = new Date(y, m - 1, d).toISOString();
    
    console.log(date);
};
