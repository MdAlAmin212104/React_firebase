/** 
 *-------------------------------- 
 *                initial setUp
 * -------------------------------
 * 1. visit : console.firebase.google.com
 * 2. create project (skip google analytics)
 * 3. Register app (create config)
 * 4. install firebase (npm install firebase)
 * 5. add configuration files to your project
 * 6. Danger : Do not publish or make firebase config to public by publishing those to github
 * --------------------------------
 *          INTEGRATION 
 * --------------------------------
 * 7. go to doc ? Build > Authentication > web > get Started 
 * 8. export app from the firebase config.js file export default app
 * 9. Login.jsx : import getAuth from firebase/auth
 * 10. create const auth = getAuth(app) 
 * --------------------------------
 *          PROVIDER SETUP
 * --------------------------------
 * 11. import googleAuthProvider and create a new provider
 * 12. use singInWithPopUp and pass auth provider
 * 13. activate sing-in method (google, facebook, twitter, github)
 * 14. vite : change 127.0.0.1 to localhost
 * ----------------------------------
 *          MORE AUTH PROVIDER
 * ----------------------------------
 * 1. activate auth provider (create app, provider redirect url, client id, client secret)
 * 
 *  **/