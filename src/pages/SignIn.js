import React from "react";
import firebase from "firebase/compat/app";
import { Container, Grid, Panel, Row, Col, Button, Alert } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import FacebookOfficialIcon from "@rsuite/icons/legacy/FacebookOfficial";
import GooglePlusCircleIcon from "@rsuite/icons/legacy/GooglePlusCircle";
const SignIn = () => {
  const Siginwithprovider = async (provider) => {
    try {
    } catch (error) {
      Alert.error(error.message, 4000);
    }
  };

  const onSignwithFacebook = () => {
    Siginwithprovider();
  };

  const onSignwithGoogle = () => {
    Siginwithprovider();
  };
  return (
    <div>
      <Container>
        <Grid>
          <Row>
            <Col xs={24} md={12} mdOffset={6}>
              <Panel className="mt-page">
                <div className="text-center">
                  <h1>Welcome to React Firebase Authentication</h1>
                  <p>This is Place for Web Developers</p>
                </div>
                <div className="mt-3">
                  <Button
                    block
                    color="blue"
                    appearance="primary"
                    onClick={onSignwithFacebook}
                    startIcon={<FacebookOfficialIcon />}
                  >
                    Continue With Facebook
                  </Button>

                  <Button
                    block
                    color="green"
                    appearance="primary"
                    onClick={onSignwithGoogle}
                    startIcon={<GooglePlusCircleIcon />}
                  >
                    Continue With Google
                  </Button>
                </div>
              </Panel>
            </Col>
          </Row>
        </Grid>
      </Container>
    </div>
  );
};

export default SignIn;
