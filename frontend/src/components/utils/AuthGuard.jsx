import { useEffect } from "react";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../../store/selectors/userSelector.js";
import Loader from "../ui/Loader.jsx";
import {authState} from "../../store/atoms/authAtom.js"

function AuthGuard({ children }) {
  // const navigate = useNavigate();
  // const userData = useRecoilValueLoadable(userSelector);

  // useEffect(() => {
  //   if (userData.state === "hasError") {
  //     localStorage.removeItem("token");
  //     navigate("/signin", { replace: true });
  //   }
  // }, [userData.state, navigate]);

  // if (userData.state === "loading") {
  //   return <Loader />;
  // }

  // if (userData.state === "hasValue") {
  //   return <>{children}</>;
  // }

  // return null; 

  const auth = useRecoilValue(authState);
  const navigate = useNavigate();

  useEffect(()=>{
    if(!auth.loading && !auth.isAuthenticated) navigate("/signin", {replace : true});
  },[auth.state, auth.isAuthenticated, navigate])

  if(auth.loading) return <Loader/>

  if(auth.isAuthenticated) return <>{children}</>

  return null;
}

export default AuthGuard;
