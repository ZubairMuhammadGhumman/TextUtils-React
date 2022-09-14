import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <a className="navbar-brand" href="#">{props.title}</a> 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        {/* <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link> */}
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" to="/about">{props.aboutText}</Link>
      </li> */}
    </ul>
  {/* <div className="d-flex">
    <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}}  style={{height: '20px', width:'20px', cursor: 'pointer'}}></div>
    <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}}  style={{height: '20px', width:'20px', cursor: 'pointer'}}></div>
    <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}}  style={{height: '20px', width:'20px', cursor: 'pointer'}}></div>
    <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}}  style={{height: '20px', width:'20px', cursor: 'pointer'}}></div>
    <div className="bg-light rounded mx-2" onClick={()=>{props.toggleMode('light')}}  style={{height: '20px', width:'20px', cursor: 'pointer'}}></div>
    <div className="bg-dark rounded mx-2" onClick={()=>{props.toggleMode('dark')}}  style={{height: '20px', width:'20px', cursor: 'pointer'}}></div>
  </div> */}


  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
    <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
    {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label> */}
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
  </div>
</div>
</nav>
  )
 }

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'
}