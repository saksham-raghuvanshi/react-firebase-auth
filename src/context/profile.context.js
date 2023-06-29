import React, { createContext, useState, useContext, useEffect } from "react";
import { auth, database } from "../firebase";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(false);

  useEffect(() => {
    let userRef;
    const authunSub = auth.onAuthStateChanged((authObj) => {
      if (authObj) {
        userRef = database.ref(`/profiles/${authObj.uid}`);
        userRef.on("value", (snap) => {
          const { name, createdAt } = snap.val();

          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
          };
          setProfile(data);
        });
      } else {
        if (userRef) {
          userRef.off();
        }
        setProfile(null);
      }
    });

    return () => {
      authunSub();
      if (userRef) {
        userRef.off();
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
