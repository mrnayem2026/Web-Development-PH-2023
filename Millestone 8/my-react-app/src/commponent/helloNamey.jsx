

export  function HelloNayem(pro){
    return (
      <div>
          <h1>Name : {pro.name} </h1>
          <div>
            <h2>Adress</h2>
            <p className='village'>Village : {pro.village} </p>
            <p className='postOffice'>Post office : {pro.postOffice} </p>
            <p className='polliceOffice'>Police office : {pro.polliceOffice} </p>
            <p className='distric'>Distric : {pro.distric} </p>
          </div>
      </div>
    )
  }


  export function BookName(){
    return(
        <div>
            <h1>My Faverite book</h1>
        </div>
    )
  }


