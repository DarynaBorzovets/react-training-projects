import { createContext } from "react";
import ComponentB from "./ComponentB";
import { useState } from "react";


export const UserContext = createContext();


function ComponentA() {
const [user, setUser] = useState("Daryna");

const updateUser = (newUser) => {
  setUser(newUser)
}


  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      
      <UserContext.Provider value={{user, updateUser}}>
      <ComponentB user={user}/>
      </UserContext.Provider>


      </div>
  )
}

export default ComponentA
