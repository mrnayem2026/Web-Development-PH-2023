import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUser = useLoaderData();
    const [users, setUsers] = useState(loadedUser);
    const handleDelete =(_id)=>{
        console.log("Deleted this id from DB ",_id);

        fetch(`http://localhost:5000/users/${_id}`,{
            method :'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                console.log("hello Nayem");
                alert('deleted successfully');
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining); 
            }
        })
    }
    return (
        <div>
            I am from user

            {
                users.map((user)=> <p key={user._id}>{user.name} : {user.email} <button onClick={()=> handleDelete(user._id)}>X</button></p>)
            }

            <div className="pt-44">
                <Link to='/'><button className="btn btn-block" >Back to HOOM</button></Link>
            </div>
        </div>
    );
};

export default Users;