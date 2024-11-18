import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 

export class App extends Component {
  render() {

    const apiKey = process.env.REACT_APP_API_KEY;

    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
          <Route path="/" element={<News key="general" apiKey={apiKey} pageSize={9} country="us" category="general"/>} />
          <Route path="/business" element={<News key="business" apiKey={apiKey} pageSize={9} country="us" category="business"/>} />
          <Route path="/entertainment" element={<News key="entertainment" apiKey={apiKey} pageSize={9} country="us" category="entertainment"/>} />
          <Route path="/health" element={<News key="health" apiKey={apiKey} pageSize={9} country="us" category="health"/>} />
          <Route path="/science" element={<News key="science" apiKey={apiKey} pageSize={9} country="us" category="science"/>} />
          <Route path="/sports" element={<News key="sports" apiKey={apiKey} pageSize={9} country="us" category="sports"/>} />
          <Route path="/technology" element={<News key="technology" apiKey={apiKey} pageSize={9} country="us" category="technology"/>} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;