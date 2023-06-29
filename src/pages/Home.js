import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";
import { useProfile } from "../context/profile.context";
import { Alert, Button } from "rsuite";

const Home = () => {
  const { profile } = useProfile();

  const handleLogout = () => {
    firebase.auth().signOut();
    Alert.info("Signout", 4000);
  };
  return (
    <div>
      <div className="text-center mt-page">
        <h1> Hey, {profile.name}</h1>
        <p>User email: {profile.email}</p>
        <p>User id : {profile.uid}</p>
      </div>
      <div className="text-center mt-2">
        <Button color="red" onClick={handleLogout}>
          Sign out
        </Button>
      </div>
    </div>
  );
};

export default Home;
