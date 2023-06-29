import React from "react";
import firebase from "firebase/compat/app";
import { Alert, Button, Col, Container, Grid, Icon, Row, Panel } from "rsuite";
import { auth, database } from "../firebase";
const SignIn = () => {
  //we want promise so use await and async functiion
  const SigninwithProvider = async (provider) => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }

      Alert.success("Sign In", 4000);
    } catch (error) {
      Alert.error(error.message, 4000);
    }
  };
  const onfacebookSigin = () => {
    SigninwithProvider(new firebase.auth.FacebookAuthProvider());
  };

  const ongoogleSignin = () => {
    SigninwithProvider(new firebase.auth.GoogleAuthProvider());
  };
  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel>
              <div className="text-center">
                <h1>React Firebase Authentication</h1>
                <p>Platform For Everyone</p>
              </div>
              <div className="mt-3">
                <Button block color="blue" onClick={onfacebookSigin}>
                  <Icon icon="facebook"> Continue with Facebook</Icon>
                </Button>

                <Button block color="green" onClick={ongoogleSignin}>
                  <Icon icon="google"> Continue with Google</Icon>
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
