
const moment = require('moment');
require("moment-range");

const button = document.querySelector('.button');

//[取得したい要素].addEventListner("何がきっかけか", 処理させたい関数名 );
button.addEventListener('click', onClickButton);

function onClickButton() {
    let y = document.getElementById("year").value;
    let m = document.getElementById("month").value;
    let d = document.getElementById("day").value;

　  //取得して来たセレクトボックスの数値をHTMLに表示
    document.querySelector('#log').innerHTML = 'あなたの生年月日は'+ y + '年'+ m + '月' + d + '日です。';
    

    //月は「０」を起点とするので−１をする
    //toLocaleDateString()でyyyy/mm/ddの表示をさせる
    const date = new Date(y, m - 1, d).toLocaleDateString()
    moment('2020-01-01').isLeapYear(); // true
    console.log(date);
};

