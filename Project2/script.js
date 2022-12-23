let select=document.querySelector('select');

let red=document.getElementsByClassName('red')[0];
let green=document.getElementsByClassName('green')[0];
let blue=document.getElementsByClassName('container0')[0].querySelectorAll('input')[2];

let container0=document.getElementsByClassName('container0')[0];
let container1=document.querySelector('.container1');


function asd(){
    
    s1='';
   for(i=0; i<arguments.length; i++){
    s='';
    while(arguments[i]>0){
        q=arguments[i]%16;
        arguments[i]=parseInt(arguments[i]/16);
        
        if(q>=10 && q<16){
      
          if(q==10){
              q='a';
          }
          else if(q==11){
              q='b';
          }
          else if(q==12){
              q='c'
          }
          else if(q==13){
              q='d';
          }
          else if(q==14){
              q='e';
          }
          else if(q==15){
              q='f';
          } 
          
        }
        s=s+q;
      }
      if(s<10){
       s=s+0
      }
      s=s.split('').reverse().join('');
      s1=s1+s;
    }
    return (s1);
}



red.addEventListener('keyup', (event)=>{
    a=event.target.value;
    d=asd(a,b,c);
    container0.style.background=`#${d}`;
});
green.addEventListener('keyup', (event)=>{
    b=event.target.value;
    d=asd(a,b,c);
    container0.style.background=`#${d}`;
});
blue.addEventListener('keyup', (event)=>{
    c=event.target.value;
    d=asd(a,b,c);
    container0.style.background=`#${d}`;
});    


let color=(event)=>{
 switch(select.value){
    case '0':
        container1.style.background='blue';
    break;  
    
    case '1':
        container1.style.background='red';
    break;

    case '2':
        container1.style.background='green';
    break;

    case '3':
        container1.style.background='brown';
    break;

    case '4':
        cntainer1.style.background='darkviolet';
    break;

    case '5':
        container1.style.background='crimson';
    break;

    case '6':
        container1.style.background='black';
    break;

    case '7':
        container1.style.background='cornflowerblue';
    break;


 }
}

select.addEventListener('change', color);