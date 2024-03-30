import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
      const [user, setUser] = useState(null)
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider


      const handleGoogleSingIn = () => {
            signInWithPopup(auth, provider)
                  .then(result => {
                        const logInUser = result.user
                        console.log(logInUser);
                        setUser(logInUser)
                  })
                  .catch(error => {
                        console.log('error: ' + error.massage);
                  
            })
      }


      const handleSingOut = () => {
            signOut(auth)
                  .then((result) => {
                        console.log(result);
                        setUser(result)
                  })
                  .catch(error => {
                        console.log(error);
                  })
      }
      return (
            <div>
                  {user ? <button onClick={handleSingOut}>Sing Out</button>:
                  <button onClick={handleGoogleSingIn}>Log in</button>}
                  
                  {user && <div>
                        <h2>User : {user.displayName}</h2>
                        <p>Email : {user.email}</p>
                        <img src={user.photoURL} alt="" />
                  </div>}
                  
            </div>
      );
};

export default Login;