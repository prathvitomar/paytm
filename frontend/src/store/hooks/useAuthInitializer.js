import { useRecoilValueLoadable, useSetRecoilState } from "recoil";
import { authState } from "../atoms/authAtom";
import { useEffect } from "react";
import {initializeAuth} from "../selectors/initializeAuth"

export function useAuthInitializer(){
    const authLoadable = useRecoilValueLoadable(initializeAuth);
    const setAuth = useSetRecoilState(authState);

    useEffect(()=>{
        if(authLoadable.state === "hasValue"){
            setAuth(authLoadable.contents)
        }
    },[authLoadable.state, authLoadable.contents, setAuth])
}