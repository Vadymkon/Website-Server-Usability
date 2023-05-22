const stime = document.getElementById("stime")
const etime = document.getElementById("etime")
const butn = document.getElementById("butn")
const fetchedDiv = document.getElementById("fetched-data")

 
// http://localhost:4044/api method: 'POST' body: { startTime, endTime } headers : {'Content-type : json'}

async function logoutfunc()
{
    console.log(PORTik)
    if (stime.value && etime.value ) {
        try
        {
            let path = `http://localhost:${PORTik || 4044}/api`; // api/123
            console.log(PORTik)
            const response = await apishka(path);
            const text = await response.json()
            console.log(text)

            fetchedDiv.innerHTML = ""
            fetchedDiv.innerHTML = response.ok ? text : "Somethink wrong!"
        }
        catch (error)
        {
            fetchedDiv.innerHTML = error.message || error.toString()
        }
    }
    else
    {
        fetchedDiv.innerHTML = "No empty input data!"
    }
}

async function apishka(path)
{
    for (let i = 0; i < 4; i++) {
        console.log('fetch')

    try {
        const response = await asd(path)
        if (response && response.ok) {
            return response;
        }
        await sleep(1000);
    }
    catch (errouriro) {
        console.error(errouriro)
        i++
    }
    }
}

async function asd(path) {
    return await fetch(path, { method: 'POST', body: JSON.stringify({ startTime: stime.value, endTime: etime.value }), headers: { 'Content-Type': 'application/json' } });
}

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}