import React from 'react'
import { auth } from '../firebase';

export default function EnterPage({}) {
    const user = null
  return (
    <div>
        <h2>Enter Page</h2>
        {user ?
        
            !username ? <UsernameForm /> : <SignInOut />
            :
            <SignInButton />
        }
    </div>
  )
}


function SignInButton() {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(auth, googleAuthProvider);
      };
  
    return (
      <>
        <button onClick={signInWithGoogle}>
          <img src={'/google.png'} width="30px" alt="google"/> Sign in with Google
        </button>
      </>
    );
  }
  

function SignOutButton() {
return <button onClick={() => auth.signOut()}>Sign Out</button>;
}



function UsernameForm(){

}