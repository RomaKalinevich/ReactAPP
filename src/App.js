import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = (props) => {
    debugger;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile'
                               element={<Profile profilePage={props.appState.profilePage}
                                                 dispatch={props.dispatch}/>}/>
                        <Route path='/dialogs'
                               element={<Dialogs dialogs={props.appState.dialogsPage.dialogs}
                                                 messages={props.appState.dialogsPage.messages}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
