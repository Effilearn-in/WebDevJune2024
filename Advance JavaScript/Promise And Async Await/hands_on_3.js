function task1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Task 1 Completed...");
            resolve();
        },5000);
    })
}

function task2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Task 2 Completed...");
            resolve();
        },5000);
    })
}

function task3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Task 3 Completed...");
            resolve();
        },5000);
    })
}

async function performTasks(){
    try{
        console.log("Task Begin...");
        await task1();
        await task2();
        await task3();
        console.log("Task Completed...");
    }
    catch(error){
        console.log("Error");
    }
}

performTasks();