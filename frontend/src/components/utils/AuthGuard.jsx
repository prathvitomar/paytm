import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { useNavigate } from "react-router-dom";
import { userSelector } from "../../store/selectors/userSelector.js";
import Loader from "../ui/Loader.jsx";

function AuthGuard({ children }) {
  const navigate = useNavigate();
  const userData = useRecoilValueLoadable(userSelector);

  useEffect(() => {
    if (userData.state === "hasError") {
      localStorage.removeItem("token");
      navigate("/signin", { replace: true });
    }
  }, [userData.state, navigate]);

  if (userData.state === "loading") {
    return <Loader />;
  }

  if (userData.state === "hasValue") {
    return <>{children}</>;
  }

  return null; // fallback when in error state but useEffect hasn't redirected yet
}

export default AuthGuard;
