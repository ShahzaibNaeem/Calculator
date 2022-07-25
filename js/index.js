let buttons=document.getElementsByTagName('button');
let screen=document.getElementById('screen');
let strc="";

for (let value of buttons){
    value.addEventListener('click',(e)=>{
       let buttontext=e.target.innerText;

     if(buttontext=='X'){
        buttontext='*'
        strc+=buttontext;
        screen.value=strc;
    }
    else if(buttontext=='C'){
        strc=" ";
        screen.value=strc;
    }
 
    else if(buttontext=='='){
         if(screen.value=='undefined' || screen.value.length==0){
             screen.value="Are you Crazy!!";
            }
         else{
            screen.value=eval(screen.value);
        }
    }
    else if(buttontext=='Back'){
        strc=strc.substr(0,strc.length-1);
        screen.value=strc;
    }
    else{
        strc+=buttontext;
        screen.value=strc;
    }
      
    })
}


