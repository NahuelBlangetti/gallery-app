import React from 'react'
import{ OverlayTrigger, Popover, Tooltip } from "react-bootstrap";

const Header = () => {
  
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h2">Informacion !</Popover.Header>
      <Popover.Body>
        Aplicacion creada con ReactJS, "Buscardor de Imagenes" por Nahuel Blangetti.
      </Popover.Body>
    </Popover>
  );

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand mb-0 p-3 h1" href="../App.js">Gallery App</a>
          <OverlayTrigger placement={'left'} delay={{ show: 250, hide: 400 }} overlay={popover}>
            <a className="bi bi-question-lg"></a>
          </OverlayTrigger>
        </div>
      </nav>
    </>
  )
}

export default Header