import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import NavBar from './components/NavBar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import './App.css';

function App() {
    const [textColor, setTextColor] = useState('dark');
    const [bgColor, setBgColor] = useState('light');
    const [alert, setAlert] = useState(null)

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null)
        }, 2000)
    }

    const toggleMode = () => {
        if (textColor === 'dark') {
            setTextColor('light')
            setBgColor('dark');
            document.body.style.backgroundColor = 'rgb(33,37,37)';
            showAlert('Dark mode enabled', 'sucess')
            document.title = 'Cipher Craft (Dark) - Analyse your text'
        } else {
            setTextColor('dark')
            setBgColor('light');
            document.body.style.backgroundColor = '#f8f9fa';
            showAlert('Light mode enabled', 'sucess')
            document.title = 'Cipher Craft (Light) - Analyse your text'
        }
    }

    return (
        <Router>
            <NavBar toggleMode={toggleMode} navBg={bgColor} textColor={textColor} />
            <Alert alert={alert} />
            <Routes>
                <Route path='/' element={<TextForm textColor={textColor} showAlert={showAlert} />} />
                <Route path='/About' element={<About textColor={textColor} bgColor={bgColor} />} />
            </Routes>
        </Router>
    );
}

export default App;