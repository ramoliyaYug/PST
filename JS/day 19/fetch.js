// let res = new Promise((re,rj)=>{
//     fetch('https://dummyjson.com/products')
// })

let res = fetch('https://dummyjson.com/products');
// res.then((res =>{
//     console.log(res);
// }))

let resp = res.then(res => res.json());
console.log(resp);

resp.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log("ye bahut badi kharabi hai"+err);
})

