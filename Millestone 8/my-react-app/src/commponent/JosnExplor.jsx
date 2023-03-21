import { useEffect, useState } from "react"


export const User = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fatchDate = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setData(data)
        }
        fatchDate();
    }, [])
    return (
        <div>
            <h1> User Information</h1>
            <ul>
                {/* {
                    data.map((itme)=> {
                        <li>{itme.name}</li>
                    })
                } */}
                <li>
                    {
                        data.map((itme)=> {
                            {itme.name}
                        })
                    }
                </li>
            </ul>
        </div>

    )
}