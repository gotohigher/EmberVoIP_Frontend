import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  card: {
    minWidth: 300,
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  loginButton: {
    marginTop: theme.spacing(2),
  },
}));

const LoginPage = () => {
  const [module, setModule] = useState("");
  const [ext, setExt] = useState("");
  const [secret, setSecret] = useState("");
  const [command, setCommand] = useState("");
  const [domain, setDomain] = useState("");
  const classes = useStyles();
  const history = useHistory();

  const handleModuleChange = (event) => {
    setModule(event.target.value);
  };

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };
  const handleDomainChange = (event) => {
    setDomain(event.target.value);
  };
  const handleExtChange = (event) => {
    setExt(event.target.value);
  };
  const handleSecretChange = (event) => {
    setSecret(event.target.value);
  };

  const handleLogin = () => {
    const data = {
      module: module,
      secret: secret,
      command: command,
      ext: ext,
      domain: domain,
    };
    let st_data = JSON.stringify(data);
    const url = "https://west01.embervoip.net/customer/api/";
    const x_auth_token = "BccLbuRzHFbkzv0AFEP1yfGSe70fc8kB";
    const header = {
      headers: {
        "x-auth-token": x_auth_token,
        "Content-Type": "*/*",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "*",
        // "Access-Control-Allow-Headers": "'Content-Type, X-Auth-Token'",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
      },
    };
    axios
      .post("/customer/api/", data, header)
      .then((response) => {
        console.log(response);
        if (response.data.status) {
          history.push("/landing");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // Perform login authentication here
    // You can redirect to another page upon successful login using history.push('/dashboard');
    //
  };

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2" className={classes.title}>
            Login
          </Typography>
          <form className={classes.form}>
            <TextField
              label="module"
              variant="outlined"
              className={classes.textField}
              value={module}
              onChange={handleModuleChange}
            />
            <TextField
              label="command"
              variant="outlined"
              className={classes.textField}
              value={command}
              onChange={handleCommandChange}
            />
            <TextField
              label="ext"
              variant="outlined"
              className={classes.textField}
              value={ext}
              onChange={handleExtChange}
            />
            <TextField
              label="secret"
              variant="outlined"
              className={classes.textField}
              value={secret}
              onChange={handleSecretChange}
            />
            <TextField
              label="domain"
              variant="outlined"
              className={classes.textField}
              value={domain}
              onChange={handleDomainChange}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.loginButton}
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
