const wake = async () =>{
    const res = await fetch('https://cookebook.onrender.com/api/internal/wakeup',{
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            'RETURN_URL':'https://christopherhendrickson.dev'
        })
    })
    console.log(res.status)
}

wake()
