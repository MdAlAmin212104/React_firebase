import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
      const [user, setUser] = useState(null)
      const auth = getAuth(app);
      const googleProvider = new GoogleAuthProvider()
      const githubProvider = new GithubAuthProvider()


      const handleGoogleSingIn = () => {
            signInWithPopup(auth, googleProvider)
                  .then(result => {
                        const logInUser = result.user
                        //console.log(logInUser);
                        setUser(logInUser)
                  })
                  .catch(error => {
                        console.log('error: ' + error.massage);
                  
            })
      }

      const handleGithubSingIn = () => {
            // signInWithPopup(auth, githubProvider)
            //       .then(result => {
            //             const logUser = result
            //             console.log(logUser);
            //             //setUser(logUser)
            //       })
            //       .catch(error => {
            //             console.log('error: ' + error.massage);
                  
            // })
            signInWithPopup(auth, githubProvider)
                  .then(result => {
                        const logUser = result.user
                        console.log(logUser);
                        setUser(logUser)
                  })
                  .catch(error => {
                        console.log(error.massage);
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
                  {
                        user ? <button onClick={handleSingOut}>Sing Out</button> :
                              <div>
                                    <button onClick={handleGoogleSingIn}>google login</button>
                                    <button onClick={handleGithubSingIn}>Github login</button>
                                    
                              </div>
                  }
                  
                  {user && <div>
                        <h2>User : {user.displayName}</h2>
                        <p>Email : {user.email}</p>
                        <img src={user.photoURL} alt="" />
                  </div>}
                  
            </div>
      );
};

export default Login;