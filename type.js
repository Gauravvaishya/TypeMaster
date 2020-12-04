 


var e;
var flag = 0;
var count = 1; 
var text = document.querySelector('#test').innerHTML;
var f = text.length;
for(var m=0;m<text.length;m++){
	if(text[m] == " "){
		count++;
	}
}

var t = document.querySelector('.time1');
var b = document.querySelector('#but');
var inp = document.querySelector('#subject');


inp.addEventListener("keypress",star);
inp.addEventListener("keyup",check);
b.addEventListener("click",startover);
var total;
var timer = [0,0,0,0];


function star(){
	var len = inp.value.length;
	
	if(len === 0){
		var running = true;
		total=setInterval(timer1,10);
	}
	
}


function check(){
	var char = inp.value;

	var character = text.substring(0,char.length);
	
	if(char == text){
		document.querySelector('#subject').style.borderColor = 'blue';
		var h = Math.floor(count / e );
		document.getElementById('word').innerHTML = h+ " WPM";
		console.log(flag);
		document.getElementById('acc').innerHTML = Math.floor((((f-flag)/f) * 100)) +"% Accuracy";

		clearInterval(total);
	}
	else{
		if(char == character){
            document.querySelector('#subject').style.borderColor = 'green';			
		}
		else{
			document.querySelector('#subject').style.borderColor = 'red';
			flag++;
            
		}

	}
	
	
	
}


function timer1(){
	
       var put = timer[0] + ":" + timer[1] + ":" + timer[2];
       t.innerHTML = put;
       
       timer[3]++;
       timer[0] = Math.floor((timer[3]/100)/60);
       timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
       timer[2] = Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));
       e = timer[0] + (timer[1]/60);
       
}

function startover(){
	clearInterval(total);
	total = null;
	timer = [0,0,0,0];
	running = false;
	document.querySelector('#subject').value = "";
    t.innerHTML = "00:00:00";
    subject.style.borderColor = "grey";
}


