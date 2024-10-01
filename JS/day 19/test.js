function bomb() {
  let i = 10;
  const countdown = setInterval(() => {
    console.log(i);
    i--;
    if (i === 0) {
      clearInterval(countdown);
      console.log("BOOM!");
    }
  }, 1000);
}
bomb();


// function settimer(){
//     for (var i=10;i>0;i--){
//         console.log(setTimeout(settimer,1000));
//     }
// }

// settimer();