
const moment = require('moment');
require("moment-range");

// 星座リスト
let zodiac = new Array('山羊座', '水瓶座', '魚座', '牡羊座', '牡牛座', '双子座', '蟹座', '獅子座', '乙女座', '天秤座', '蠍座', '射手座',);
// 境界となる日付
let borderDays = new Array(20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22);

const button = document.querySelector('.button');

//[取得したい要素].addEventListner("何がきっかけか", 処理させたい関数名 );
button.addEventListener('click', onClickButton);


function onClickButton() {
    //年、月、日の値を取得する
    let y = document.getElementById("year").value;
    let m = document.getElementById("month").value;
    let d = document.getElementById("day").value;
    
    //月は「０」を起点とするので−１をする
    //toLocaleDateString()でyyyy/mm/ddの表示をさせる
    let date = new Date(y, m - 1, d).toLocaleDateString();

    if (date) {
        // 星座を取得
        let constellation = getConstellation(date);
        //取得して来たものをHTMLに表示
        document.querySelector('#log').innerHTML = 'あなたの生年月日は'+ y + '年'+ m + '月' + d + '日、星座は' + constellation +'です。';

        } else {
        //正しくない場合はエラーを表示する    
        document.querySelector('#log').innerHTML = '入力エラーです。正しい日付を入力して下さい！'
        
        }
　  
    // 星座取得関数

   
    
    
    
    

   // moment('2020-01-01').isLeapYear(); 
   // moment('2020-01-01').isBetween('2020-10-19', '2020-10-25');

    console.log(date);
};
