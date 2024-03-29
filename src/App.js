import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  pageSizes=8;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSizes} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSizes} country="in" category="business" />}></Route>
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSizes} country="in" category="general" />}></Route>
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSizes} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSizes} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSizes} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSizes} country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
