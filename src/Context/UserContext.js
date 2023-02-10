import { createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {

    let [profile, setProfile] = useState()
    let [skills, setSkills] = useState([])
    return (
        <UserContext.Provider value={{ profile, setProfile, skills, setSkills }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;