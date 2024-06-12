function Girl(){
    $('.pic01').attr('src','../img/sport4.jpeg');
    $('.pic02').attr('src','../img/sport2.jpeg');
    $('.pic03').attr('src','../img/sport3.jpeg');
    $('.pic04').attr('src','../img/sport9.jpg');
    $('.pic05').attr('src','../img/sport10.jpg');
    $('.pic06').attr('src','../img/sport12.jpg');

    div1 = $('#pr01');
    div2 = $('#pr02');
    div3 = $('#pr03');
    div4 = $('#pr04');
    div5 = $('#pr05');
    div6 = $('#pr06');    
    if(!div4.is(':empty')){
        div1.replaceWith(div4.clone());
        div4.replaceWith(div1.clone());
        div1.clone().addClass("replaced");
    };
    if(!div5.is(':empty')){
        div5.replaceWith(div2.clone());
        div2.replaceWith(div5.clone());
        div5.clone().addClass("replaced");
    };
    if(!div6.is(':empty')){
        div6.replaceWith(div3.clone());
        div3.replaceWith(div6.clone());
        div6.clone().addClass("replaced");
    };

    document.getElementById('link01').href="../html/sport04.html";
    document.getElementById('link02').href="../html/sport03.html";
    document.getElementById('link03').href="../html/sport02.html";
    document.getElementById('link04').href="../html/sport09.html";
    document.getElementById('link05').href="../html/sport10.html";
    document.getElementById('link06').href="../html/sport12.html";
};
function Boy(){
    $('.pic01').attr('src','../img/sport5.jpg');
    $('.pic02').attr('src','../img/sport7.png');
    $('.pic03').attr('src','../img/sport8.png');
    $('.pic04').attr('src','../img/sport6.jpeg');
    $('.pic05').attr('src','../img/sport1.jpeg');
    $('.pic06').attr('src','../img/sport11.jpg');

    div1 = $('#pr01');
    div2 = $('#pr02');
    div3 = $('#pr03');
    div4 = $('#pr04');
    div5 = $('#pr05');
    div6 = $('#pr06');    
    if(!div5.is(':empty')){
        div1.replaceWith(div5.clone());
        div5.replaceWith(div1.clone());
        div1.clone().addClass("replaced");
    };
    if(!div3.is(':empty')){
        div3.replaceWith(div2.clone());
        div2.replaceWith(div3.clone());
        div3.clone().addClass("replaced");
    };
    if(!div6.is(':empty')){
        div6.replaceWith(div4.clone());
        div4.replaceWith(div6.clone());
        div6.clone().addClass("replaced");
    };

    document.getElementById('link01').href="../html/sport05.html";
    document.getElementById('link02').href="../html/sport07.html";
    document.getElementById('link03').href="../html/sport08.html";
    document.getElementById('link04').href="../html/sport06.html";
    document.getElementById('link05').href="../html/sport01.html";
    document.getElementById('link06').href="../html/sport11.html";
};
function Week(){
    $('.pic01').attr('src','../img/sport3.jpeg');
    $('.pic02').attr('src','../img/sport4.jpeg');
    $('.pic03').attr('src','../img/sport1.jpeg');
    $('.pic04').attr('src','../img/sport2.jpeg');
    $('.pic05').attr('src','../img/sport6.jpeg');
    $('.pic06').attr('src','../img/sport5.jpg');

    div1 = $('#pr01');
    div2 = $('#pr02');
    div3 = $('#pr03');
    div4 = $('#pr04');
    div5 = $('#pr05');
    div6 = $('#pr06');    
    if(!div3.is(':empty')){
        div1.replaceWith(div3.clone());
        div3.replaceWith(div1.clone());
        div1.clone().addClass("replaced");
    };
    if(!div4.is(':empty')){
        div4.replaceWith(div2.clone());
        div2.replaceWith(div4.clone());
        div4.clone().addClass("replaced");
    };
    if(!div6.is(':empty')){
        div6.replaceWith(div5.clone());
        div5.replaceWith(div6.clone());
        div6.clone().addClass("replaced");
    };

    document.getElementById('link01').href="../html/sport03.html";
    document.getElementById('link02').href="../html/sport04.html";
    document.getElementById('link03').href="../html/sport01.html";
    document.getElementById('link04').href="../html/sport02.html";
    document.getElementById('link05').href="../html/sport06.html";
    document.getElementById('link06').href="../html/sport05.html";
};
function Days(){
    $('.pic01').attr('src','../img/sport6.jpeg');
    $('.pic02').attr('src','../img/sport3.jpeg');
    $('.pic03').attr('src','../img/sport2.jpeg');
    $('.pic04').attr('src','../img/sport5.jpg');
    $('.pic05').attr('src','../img/sport4.jpeg');
    $('.pic06').attr('src','../img/sport1.jpeg');

    div1 = $('#pr01');
    div2 = $('#pr02');
    div3 = $('#pr03');
    div4 = $('#pr04');
    div5 = $('#pr05');
    div6 = $('#pr06');    
    if(!div3.is(':empty')){
        div2.replaceWith(div3.clone());
        div3.replaceWith(div2.clone());
        div2.clone().addClass("replaced");
    };
    if(!div4.is(':empty')){
        div4.replaceWith(div5.clone());
        div5.replaceWith(div4.clone());
        div4.clone().addClass("replaced");
    };
    if(!div6.is(':empty')){
        div6.replaceWith(div1.clone());
        div1.replaceWith(div6.clone());
        div6.clone().addClass("replaced");
    };

    document.getElementById('link01').href="../html/sport06.html";
    document.getElementById('link02').href="../html/sport03.html";
    document.getElementById('link03').href="../html/sport02.html";
    document.getElementById('link04').href="../html/sport05.html";
    document.getElementById('link05').href="../html/sport04.html";
    document.getElementById('link06').href="../html/sport01.html";
};
var time=0;       
function show(){
    console.log(time);
    time++;  
     document.getElementById('count').innerHTML = time;    
};
var time01=0;
function show01(){
    console.log(time);
    time01++;  
     document.getElementById('count01').innerHTML = time01;  
};
var time03=0;
function show03(){
    console.log(time);
    time03++;  
     document.getElementById('count03').innerHTML = time03;  
};
var time04=0;
function show04(){
    console.log(time);
    time04++;  
     document.getElementById('count04').innerHTML = time04;  
};
var time05=0;
function show05(){
    console.log(time);
    time05++;  
     document.getElementById('count05').innerHTML = time05;  
}; 
var time06=0;
function show06(){
    console.log(time);
    time06++;  
     document.getElementById('count06').innerHTML = time06;  
}; 
var time07=0;
function show07(){
    console.log(time);
    time07++;  
     document.getElementById('count07').innerHTML = time07;  
};
var time08=0;
function show08(){
    console.log(time);
    time08++;  
     document.getElementById('count08').innerHTML = time08;  
}; 
var time09=0;
function show09(){
    console.log(time);
    time09++;  
     document.getElementById('count09').innerHTML = time09;  
}; 
var time10=0;
function show10(){
    console.log(time);
    time10++;  
     document.getElementById('count10').innerHTML = time10;  
}; 
var time11=0;
function show11(){
    console.log(time);
    time11++;  
     document.getElementById('count11').innerHTML = time11;  
};
var time12=0;
function show12(){
    console.log(time);
    time12++;  
     document.getElementById('count12').innerHTML = time12;  
}; 
var time13=0;
function show13(){
    console.log(time);
    time13++;  
     document.getElementById('count13').innerHTML = time13;  
}; 
var time14=0;
function show14(){
    console.log(time);
    time14++;  
     document.getElementById('count14').innerHTML = time14;  
}; 
var time15=0;
function show15(){
    console.log(time);
    time15++;  
     document.getElementById('count15').innerHTML = time15;  
}; 
var time16=0;
function show16(){
    console.log(time);
    time16++;  
     document.getElementById('count16').innerHTML = time16;  
}; 
var time17=0;
function show17(){
    console.log(time);
    time17++;  
     document.getElementById('count17').innerHTML = time17;  
};
var time18=0;
function show18(){
    console.log(time);
    time18++;  
     document.getElementById('count18').innerHTML = time18;  
};