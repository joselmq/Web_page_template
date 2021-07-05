import React from "react";
import {Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div >

      <div>
        <Top_menu />
      </div>

      <div>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
      </div>

      <div>
        <Footer />
      </div>

      <div>
        <Lateral_menu />
      </div>

    </div>
  );
}
export default App;

export function Top_menu(){
  return(
    <div className="container-fluid top-menu" id="navbar">
      <div className="row flex-items-xs-center slider-1 flex-items-xs-middle" id="top-menu" >
        <div class="col-2" />
        <div class="col-2">
          <Link to="/">
            <a class="btn btn-top-menu" role="button" aria-pressed="true">Sección-1</a>
          </Link>
        </div>
        <div class="col-2">
          <Link to="/Second_page">
            <a href="#sec-2" class="btn btn-top-menu" role="button" aria-pressed="true">Sección-2</a>    
          </Link>
        </div>
        <div class="col-2">
          <a data-scroll href="#sec-3" class="btn btn-top-menu" role="button" aria-pressed="true">Sección-3</a>
        </div>
        <div class="col-2">
          <a data-scroll href="#sec-4" class="btn btn-top-menu" role="button" aria-pressed="true">Sección-4</a>
        </div>
      </div>
    </div>
  )
}

export function Section_1(){
  return(
    <div className="container-fluid section-1">
      <div className="row flex-items-xs-center slider-1 flex-items-xs-middle" id="sec-1" >
        <div className="row">
          <div className="col-xs-12"><h1></h1></div>
          <div className="col-xs-12"><h3></h3></div>
        </div>
      </div>
    </div>
  )
}

export function Section_2(){
  return(
    <div className="container-fluid section-2">
      <div className="row flex-items-xs-center slider-2 flex-items-xs-middle" id="sec-2" >
        <div className="row">
          <div className="col-xs-12"><h1></h1></div>
          <div className="col-xs-12"><h3></h3></div>
        </div>
      </div>
    </div>
  )
}

export function Section_3(){
  return(
    <div className="container-fluid section-3">
      <div className="row flex-items-xs-center slider-3 flex-items-xs-middle" id="sec-3" >
        <div className="row">
          <div className="col-xs-12"><h1></h1></div>
          <div className="col-xs-12"><h3></h3></div>
        </div>
      </div>
    </div>
  )
}

export function Section_4(){
  return(
    <div className="container-fluid section-4">
      <div className="row flex-items-xs-center slider-3 flex-items-xs-middle" id="sec-4" >
        <div className="row">
          <div className="col-xs-12"><h1></h1></div>
          <div className="col-xs-12"><h3></h3></div>
        </div>
      </div>
    </div>
  )
}

export function Footer(){
  return(
    <div className="container-fluid footer-bar">
      <div className="row flex-items-xs-center slider-3 flex-items-xs-middle">
        <div className="col-xs-12"><h1>Footer</h1></div>
        <div className="col-xs-12"><h3></h3></div>
      </div>
    </div>
  )
}

export function Lateral_menu(){
  return(
    <div className="lateral-menu vertical-align-parent">
      <div className="flex-items-xs-center slider-3 flex-items-xs-middle vertical-align-child">
        <div class="row-xs-2 vertical-align-child">
          <a data-scroll href="#sec-1" className="menu-btn btn" role="button" aria-pressed="true">Sección 1</a>
          <a data-scroll href="#sec-2" className="menu-btn btn" role="button" aria-pressed="true">Sección 2</a>
          <a data-scroll href="#sec-3" className="menu-btn btn" role="button" aria-pressed="true">Sección 3</a>
          <a data-scroll href="#sec-4" className="menu-btn btn" role="button" aria-pressed="true">Sección 4</a>
        </div>
      </div>
    </div>
  )
}


