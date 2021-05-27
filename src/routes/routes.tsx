import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import LoginPage from "../pages/auth/login";
import HomePageWeb from "../pages/home";
export default function Routes()  {
    
        return (
            <Switch>
                <Route exact path="/register">
                    <LoginPage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/">
                    <HomePageWeb />
                </Route>
            </Switch>
        );
    }


