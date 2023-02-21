/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


   <main>
        <p>Analyz'ESME est un site qui vous permet de connaitre la population de votre commune à l'aide de l'âge et du sexe des individus.</p>
        <button className="GET-STARTED-button">Get Started</button>

        <Container>
          <Row    className="justify-content-center" style={{ display: "flex" }}>
            <Col xs={12} md={6} lg={6}>
              <img src={image1} alt="Image 1" style={{ width: "300px", height: "300px"  }}/>
              
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src={image2} alt="Image 2" style={{ width: "300px", height: "300px"  }} />
            </Col>
            
          </Row>
        </Container>
      </main>





*/


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.png" className="App-logo" alt="logo" />
    

      </header>
      <main>
        <p>Analyz'ESME est un site qui vous permet de connaitre la population de votre commune à l'aide de l'âge et du sexe des individus.</p>
        <button className="GET-STARTED-button">Get Started</button>
      </main>
    </div>

  );
}

export default App;
*/


import image1 from 'D:/moull/collage/Downloads/image1.png';
import image2 from 'D:/moull/collage/Downloads/image2.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.png" className="App-logo" alt="logo" />
      </header>

   

      <main>
  <p>Analyz'ESME est un site qui vous permet de connaitre la population de votre commune à l'aide de l'âge et du sexe des individus.</p>
  <Container>
    <Row className="justify-content-center" style={{ display: "flex" }}>
      <Col xs={12} md={6} lg={6}>
        <img src={image1} alt="Image 1" style={{ width: "500px", height: "300px" }} />
      </Col>
      <Col xs={12} md={6} lg={6}>
        <img src={image2} alt="Image 2" style={{ width: "500px", height: "300px" }} />
      </Col>
    </Row>
    <Row className="justify-content-center" style={{ marginTop: "50px" }}>
      <Col>
        <button className="GET-STARTED-button">Get Started</button>
      </Col>
    </Row>
  </Container>
</main>



    </div>

  );
}
export default App;







