import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const App = () => {
    let messages = [{id: 1, message: "Hi"}, {id: 2, message: "Hello"}, {id: 3, message: "Hello world"}, {id: 4, message: "Hello world Mother Fucker"}];
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                    </Routes>
                </div>
                {/*<Profile />*/}
            </div>
        </BrowserRouter>
    );
}
export default App;
