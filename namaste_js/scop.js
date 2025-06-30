
  const b =10;
function a(){
  
 c();
    function c(){  // c is lexical 
        console.log(b);
  
}
    }
  


a();
console.log("hello")