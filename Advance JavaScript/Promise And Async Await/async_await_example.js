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
        }, 5000);
    })
}

async function getData(){
    try{
        console.log("Start...");
        let data=await fetchData();
        console.log("End ...");
        console.log("Data From Server :- ",data);
    }
    catch(error){
        console.log("Error");
    }
}

getData();