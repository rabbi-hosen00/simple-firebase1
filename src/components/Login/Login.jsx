import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";



const Login = () => {


    const [user, setUser] = useState(null)

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGooleSineIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            })
            .catch((error) => {
                console.log('ERROR', error);
                setUser(null)
            })
    }


    const handleSineOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out done')
                setUser(null)
            })
            .catch((error) => {
                console.log(error)
            });
    }


    const handleGitHubSineIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result)
                setUser(result.user)
            })
            .catch((error) => {
                console.log(error)

            })
    }


    return (
        <div>
            {
                user ? <button onClick={handleSineOut} className="btn btn-accent">SignOut</button> :
                    <>
                        <button onClick={handleGooleSineIn} className="btn btn-accent">Login with Goole</button>
                        <button onClick={handleGitHubSineIn} className="btn btn-accent">Login with GitHub</button>
                    </>
            }

            {
                user && <div>
                    <p>{user.displayName}</p>
                    <p>{user.email}</p>
                </div>


            }

        </div>
    );
};

export default Login;