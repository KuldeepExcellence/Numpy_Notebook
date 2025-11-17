import React from "react";


import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { ref, set } from "firebase/database";




function firebase_testing()
{
    console.log("Firebase Testing Function Is Working")
    // TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://fir-crud-testing-52e25-default-rtdb.firebaseio.com",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  console.log(app)
  
  
  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);

  console.log(database)


function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

writeUserData(1,"kuldeep","kuldeep@gmail.com","kkll")

}







function Btn()
{
    firebase_testing()
    return  <button style={{backgroundColor:"violet"}}>Click Me  </button>
}

function Demo2({pr})
{
    var a = "kuldeep"
    return <>
    <h1>Hello {a}</h1>
    <h1>{pr}</h1>
    <Btn></Btn>
    <h1>This is Functional Component</h1>
    </>
}

class Demo  extends React.Component
{
    constructor()
    {
        super()
        this.state={name:"suraj"}
    }

    render()
    {
        return( 
            <>
            <h1>Hello {this.state.name } </h1>
            <h1>{this.props.pr}</h1>
            <Btn></Btn>
            <h1>This is Class Component</h1>
            </>
        )
    }

}


export default Demo
export {Demo2}