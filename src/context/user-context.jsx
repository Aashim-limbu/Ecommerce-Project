import { createContext, useState, useEffect } from "react";
import { onAuthUserStateChangedListener } from "../utils/firebase/firebase.utils";
const UserContext = createContext();
export function UserProvider({ children }) {
  const [User, setUser] = useState(null);
  useEffect(()=>{
    const unsubscribe = onAuthUserStateChangedListener((user)=>{
        console.log(user)
    })
    return ()=> unsubscribe()
  },[])
  const valueToShare = {
    User,
    setUser,
  };
  return (
    <UserContext.Provider value={valueToShare}>{children}</UserContext.Provider>
  );
}
export default UserContext;
