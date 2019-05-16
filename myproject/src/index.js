
const moment = require('moment');
require("moment-range");

// 星座リスト
var zodiacs = new Array('山羊座', '水瓶座', '魚座', '牡羊座', '牡牛座', '双子座', '蟹座', '獅子座', '乙女座', '天秤座', '蠍座', '射手座',);
// 境界となる日付
var borderDays = new Array(20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22);

var button = document.querySelector('.button');

//[取得したい要素].addEventListner("何がきっかけか", 処理させたい関数名 );
button.addEventListener('click', onClickButton);


function onClickButton() {
    //年、月、日の値を取得する
    var y = document.getElementById("year").value;
    var m = document.getElementById("month").value;
    var d = document.getElementById("day").value;
    
    //月は「０」を起点とするので−１をする
    //toLocaleDateString()でyyyy/mm/ddの表示をさせる
    const days = new Date(y, m - 1, d).toLocaleDateString();
    
    if (days) {
        // 星座を取得
        let constellation = getConstellation(days);
        //取得して来たものをHTMLに表示
        document.querySelector('#log').innerHTML = 'あなたの生年月日は'+ y + '年'+ m + '月' + d + '日、星座は' + constellation +'です。';

        } else {
        //正しくない場合はエラーを表示する    
        document.querySelector('#log').innerHTML = '入力エラーです。正しい日付を入力して下さい！'
        
        }

        
        function getDate(y, m, d) {
          if ((date.getFullYear() != y)|| (date.getMonth() != m - 1)|| (date.getDate() != d)) {
         // 不正な日付の場合はnullを返す
         days = null;
         }
          return days;
        }


    function getConstellation(days) {
        var month = days.getMonth();
        var day = days.getDate();
        var borderDay = borderDays[month];
        //【条件】day が borderDayより小さい　【真の時】monthを返す：【偽の時】monthに+1をして返す
        var zIndex = day < borderDay ? month : month + 1;
        
        if (zIndex >= zodiacs.length) {
        zIndex = 0; // 12月後半生まれの時の処置
        }
        return zodiacs[zIndex];
    }
    


};