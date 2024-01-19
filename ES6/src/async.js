function reallyHeavyFunction() {
    let runs = 0;
    for (let i = 0; i < 1000000000; i++) {
        runs++;
    }
    return runs;
}

const heavyPromise = new Promise((resolve, reject) => {
    try {
        let runs = 0;
        for (let i = 0; i < 1000000000; i++) {
            runss++;
        }
        resolve (runs);
        } catch(e) {
            reject('Error in numbers iteration ')
        }
})

const promiseWithParameters = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logged in as ${username}`)
        }, 3000)
    })
}

async function mainThread() {
    console.log("start");
    promiseWithParameters('felipe@gmail.com', 123456).then(result => {
        console.log(result)
    })

    try {
    const result = await heavyPromise;
        console.log(result)
    } catch(e) {
        console.log(e)
    }

    console.log("end");
}

