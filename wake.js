const wake = async () =>{
    await fetch('https://cookebook.onrender.com/api/internal/wakeup',{
        method:'GET',
        mode:'no-cors',
    })
    await fetch('https://osflip.onrender.com/api/internal/wakeup',{
        method:'GET',
        mode:'no-cors',
    })
}

wake()
