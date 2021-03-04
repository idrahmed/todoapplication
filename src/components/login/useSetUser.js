import { useState } from "react";
import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";

export function useSetUser() {

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault()
     auth
      .signInWithPopup(provider)
      .then((result) => {
        localStorage.setItem("user", result.user.uid)
        localStorage.setItem("user_dp", result.user.photoURL)
        history.push("/dashboard");
      })
      .catch((error) => alert(error.message));
      
  };

  return { signIn };
}
