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

function performTasks(){
    task1()
    .then(()=>{
        task2()
        .then(()=>{
            task3();
        })
    })
    .catch(error=>{
        console("Error");
    })
}

performTasks();