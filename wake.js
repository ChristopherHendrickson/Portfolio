const wake = async () =>{
    const res = await fetch('http://localhost:5173/api/internal/wakeup',{
        method:'POST',
        mode:'no-cors',
    })
}

wake()
