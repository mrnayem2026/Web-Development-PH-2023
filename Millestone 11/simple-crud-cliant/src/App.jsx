import './App.css'

function App() {
  const handleAddUser =(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name,email};
    console.log(user);
  }
  return (
    <>
      Simple CRUD
      <form onSubmit={handleAddUser}>
          <input type='text' name='name' id='' className='my-3 p-3' placeholder='Please insert your name'></input><br />
          <input type='email' name='email' id=''  className=' p-3' placeholder='Please insert your email'></input><br />
          <button className='btn btn-primary mt-3' ><input type="submit" value="Add User" /></button>
      </form>
    </>
  )
}

export default App
