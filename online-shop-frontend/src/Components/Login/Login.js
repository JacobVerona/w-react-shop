import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import Auth from "../../Auth"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { setLoggedInUser } from "../../Redux/Actions"

import "./Login.css"


class ConnectedLogin extends Component {
    state = {
        userName: "",
        pass: "",
        redirectToReferrer: false

    }
    render() {

        const { from } = this.props.location.state || { from: { pathname: '/' } }


        /* If user was authenticated, redirect her to where she came from. */
        if (this.state.redirectToReferrer === true) {
            return <Redirect to={from} />
        }


        return (
            <div className="login-container">
                <div style={{ marginBottom: 50, fontSize: 26, textAlign: "center", color: "gray" }}> Логін </div>
                <TextField
                    value={this.state.userName}
                    placeholder="Ім'я"
                    onChange={(e) => {
                        this.setState({ userName: e.target.value })
                    }} />
                <TextField
                    value={this.state.pass}
                    type="password"
                    placeholder="Пароль"
                    onChange={(e) => {
                        this.setState({ pass: e.target.value })
                    }} />
                <Button
                    style={{ marginTop: 10 }}
                    variant="outlined"
                    color="primary"
                    onClick={() => {

                        /* Authenticate the user using entered credentials. */
                        Auth.authenticate(this.state.userName, this.state.pass, (user) => {

                            /* Authentication failed. */
                            if (!user) {
                                this.setState({ wrongCred: true })
                                return;
                            }

                            /* If we get here, authentication was success. */
                            this.props.dispatch(setLoggedInUser({ name: user.name }));
                            this.setState(() => ({
                                redirectToReferrer: true
                            }))

                        })
                    }}>Логін</Button>
                {this.state.wrongCred && <div style={{ color: "red" }}>Хибне ім'я або\та пароль</div>}
            </div>
        );
    }
}
const Login = withRouter(connect()(ConnectedLogin));

export default Login;
