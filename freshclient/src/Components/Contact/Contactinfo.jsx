import React from 'react'
import { useState, useEffect } from 'react'

export const Contactinfo = () => {

    const [fetchuser, setFetchuser] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8880")
            .then((res) => res.json())
            .then((data) => setFetchuser(data)) 
            .catch((err) => { if (err) throw err })
    }, [])
 
    return (
        <div>
            {
                fetchuser.map((user) =>
                    <div>
                        <p>Username: <b>{user.uname}</b></p>
                        <p>Useremail: <b>{user.uemail}</b></p>
                        <p>Userno: <b>{user.umobile}</b></p>
                        <p>Userwhatsno: <b>{user.umobiles}</b></p>
                        <p>Userfeedback: <b>{user.ufeed}</b></p>
                    </div>
                )
            }
        </div>
    )
}
