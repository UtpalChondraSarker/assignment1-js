/* problem No 1 */
let sum=0;
for(let i= 1; i <= 100; i=i+2){
    if(i===15){
        break;
    }
    console.log(`odd multi :${i}`);
    sum=sum+i;
    
}
console.log(`First Fifteen odd multi addition:${sum}`);


/* problem No 2 */
let multi=1;
for(let j = 2; j <=100;j=j+2){
    if(j===20){
        break;
    }
    console.log(`Multiplication multi: ${j}`);

    multi=multi*j;
    
}
console.log(`First Twenty Multiplication multi:${multi}`);

/* problem 3 */

let star='';
for(let k=1; k <=50; k++){
    //console.log(k);
    star=star+' # -'
    //console.log(star);
}
console.log(star);
