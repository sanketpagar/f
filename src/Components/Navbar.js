/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes  from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`} >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.Text}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
         </ul>
         <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.togglle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.Mdde==="light"?"dark":"green"}`} htmlFor="flexSwitchCheckDefault">Red Mode</label>
</div>
         <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.Mode==="light"?"dark":"red"}`} htmlFor="flexSwitchCheckDefault">Green Mode</label>
</div>
         <div className="form-check form-switch">
  <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.Mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
</div>
            
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}
Navbar.propTypes = {title:PropTypes.string,
    aboutText:PropTypes.string,}
    Navbar.defaultProps={
        title:'set title here',
        Text:'it is Text'
    }