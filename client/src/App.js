import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Userpage from "./pages/Userpage";
import Tradepage from "./pages/Tradepage";
import Searchpage from './pages/Searchpage';
import Notfound from "./pages/Notfoundpage";

import Container from "./components/Container";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import UserFormContainer from './components/UserFormContainer'
import Signup from './components/Signup'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword'

import { AuthProvider } from './contexts/AuthContext'
import PrivateRoute from './PrivateRoute'

// Set FakeDate and Set Context with the FakeDate
import { GetFakeDate } from './utils/helpers'
import FakeCurrentTimeContext from './contexts/FakeCurrentTimeContext'

function App() {
  const [weekend, setWeekend] = useState(false);
  // Set Fake Current Time by Todays time and Interval.
  // It will call GetFakeDate() every second.
  const [fakeCurrentTime, setFakeCurrentTime] = useState("");
  useEffect(() => {
    setFakeCurrentTime(GetFakeDate().toString());
  }, [])

  useEffect(() => {
    const intervalFakeTime = setInterval(() => {
      currentFakeTime();
    }, 1000)

    // If the time is 18:00, setWeekend is true.
     if(fakeCurrentTime.substring(16, 21) === '18:00'){
      // clearInterval(intervalFakeTime);
      setWeekend(true);
    }

    return () => clearInterval(intervalFakeTime);
  }, [fakeCurrentTime])

  function currentFakeTime() {
    setFakeCurrentTime((new Date(Date.parse(fakeCurrentTime) + 1000)).toString());
  }

  return (
    <Router>
      <AuthProvider>
        <FakeCurrentTimeContext.Provider value={fakeCurrentTime}>
          {/* Display Current Time */}
          <div style={{ zIndex: 10, fontSize: "11px", color: "white", textAlign: "right", paddingRight: "25px", position: "fixed", top: 90, right: 0 }}>
            {
              (new Date().getDay() - 1).toString() === "-1" 
              ? "TODAY: " + new Date((new Date().getFullYear()).toString(), new Date().getMonth().toString(), (new Date().getDate() - 1).toString()).toString().substring(0, 15)
              : <></>
            }
            {
              (new Date().getDay() - 1).toString() === "0" 
              ? "TODAY: " + new Date((new Date().getFullYear()).toString(), new Date().getMonth().toString(), (new Date().getDate() - 1).toString()).toString().substring(0, 15)
              : <></>
            }
            {/* {console.log(new Date((new Date().getFullYear()).toString(), new Date().getMonth().toString(), (new Date().getDate() - 1).toString()).toString().substring(0, 15))} */}
          </div>
          <div style={{ zIndex: 10, fontSize: "11px", color: "white", textAlign: "right", paddingRight: "25px", position: "fixed", top: 70, right: 0 }}>
            {weekend? "Market close on the Weekend" : "TODAY: " + fakeCurrentTime.substring(0, 25)}
          </div>
          <Nav />
          <Container>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/gamestock/" component={Homepage} />
              <Route exact path="/gamestock/signup" >
                <UserFormContainer>
                  <Signup />
                </UserFormContainer>
              </Route>
              <Route exact path="/gamestock/login" >
                <UserFormContainer>
                  <Login />
                </UserFormContainer>
              </Route>
              <Route exact path="/gamestock/forgot-password" >
                <UserFormContainer>
                  <ForgotPassword />
                </UserFormContainer>
              </Route>
              <PrivateRoute exact path="/gamestock/search" component={Searchpage} />
              <PrivateRoute exact path="/gamestock/user" component={Userpage} />
              <PrivateRoute exact path="/gamestock/trade" component={Tradepage} />
              <Route>
                <Notfound />
              </Route>
            </Switch>
            <Footer />
          </Container>
        </FakeCurrentTimeContext.Provider>
      </AuthProvider>
    </Router>
  );
}

export default App;
