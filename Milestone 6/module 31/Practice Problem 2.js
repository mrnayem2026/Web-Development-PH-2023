let arr = ['sarfuddin','muaj','zakaria','mahadi','morsed','tanvir'];

const evenInarray = (arrayt)=>{
    let evenFriend =  []
    for(let i=0; i<arrayt.length; i++)
    {
        if(arrayt[i].length % 2 == 0){
            evenFriend.push(arrayt[i])
        }
    }
    
    for(let i = 0; i<evenFriend.length; i++){
        console.log(evenFriend[i])
    }
}

evenInarray(arr)
