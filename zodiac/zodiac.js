function clickBtn(){
    let y = document.getElementById("year").value;
    let m = document.getElementById("month").value;
    let d = document.getElementById("day").value;
    
   let date =new Date(y,m-1,d);//月は「０」を起点とするので−１をする

   console.log(date);

};




