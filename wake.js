const wake = async () =>{
    const res = await fetch('https://cookebook.onrender.com/api/internal/wakeup',{
        method:'GET',
        mode:'no-cors',
    })
}

wake()