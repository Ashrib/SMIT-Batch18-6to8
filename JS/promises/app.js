// let response = fetch('https://jsonplaceholder.typicode.com/users');
// console.log(response)



// let promise = new Promise((reslove, reject)=>{
//     console.log('start to fetch data!');

//     setTimeout(() => {
//         reject(new Error('error in fetching'))
//     }, 1000);
// });


// promise.then((res)=> console.log(res))
// .catch((error)=> console.error(error));


let userFetchPromise = new Promise(async(reslove,reject)=>{

    let response = await fetch('https://jsonplaceholder.typicode.com/users/');
    
    // console.log(response.ok)
    if(response.ok){
        reslove(response.json());
    }
    else{
        reject(new Error('error while fetching users!'));
    }

})


userFetchPromise.then((data)=>{
    console.log('users fetch successfully');
    console.log(data);
}).catch((error)=>{
    console.error(error)
})



let newPromise = new Promise((res,rej)=>{

    setTimeout(()=>{
        res(1);
    },1000)
});



newPromise.then((num)=>{
    console.log(num)
    return num * 2;

})
.then((num)=> {
    console.log(num)
    return num *2;
})
.then((num)=> console.log(num))


