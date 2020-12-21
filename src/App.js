import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";
import { MainContent } from "./Components/MainContent";
import { Home } from "./Screens/Home";
import { UserList } from "./Screens/UserList";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Sidebar />
                <MainContent>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/user-list">
                            <UserList />
                        </Route>
                        <Route path="/dashboard"></Route>
                    </Switch>
                </MainContent>
            </Router>
        </div>
    );
}

export default App;
