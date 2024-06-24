function fetchData(){
    return new Promise((resolve,rejet)=>{
        setTimeout(()=>{
            console.log("Inside Promise...");
            const data="Data coming from server...";
            if(data){
                console.log("Going To Resolve...");
                resolve(data);
                console.log("Resolve completed...");
            }
            else{
                reject("Data not found...");
            }
        }, 2000);
    })
}

fetchData()
.then(data=>{
    console.log("Data :- ",data);
})
.catch(error=>{
    console.log("Error");
})