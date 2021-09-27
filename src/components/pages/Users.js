import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../style/users.css"

const Test=()=>{
  const [user,setUser] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
      console.log(res.data,"here")
      const users= res.data
      // console.log(users,"here2")
     
      setUser(users)

    }).catch(err=>{
      console.log(err)
    })
  },[])
    return (
              <div className="user-div">
                  {
                  user.map(user=>
                    <>
                    <div className="user2-div" key={user.id}>name: {user.name} </div>
                    <div className="user2-div" key={user.id}>surname: {user.username}</div>
                    <div className="user2-div" key={user.id}>email: {user.email}</div>
                    
                    <div>__________________________________________________</div>
                    </>
                  )
                  }   
              </div>
    )
    
}


export default Test;