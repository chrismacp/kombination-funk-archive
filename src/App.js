// import TextLogo from './assets/img/kf-logo-title.png';
import TextLogo from './assets/img/kf-logo.svg';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FlyerPack from './components/FlyerPack';

import './App.css';

function App() {

  let firstKfYear = 2002;
  let firstKfMonth = 5;
  let lastKfYear = 2008;
  let lastKfMonth = 4;

  // Months grouped in rows of 3, i.e. [ [2002-05, 2002-07, 2002-08],... ]
  let months = [];

  for (let year = firstKfYear; year <= lastKfYear; year++) {

    let row = [];
    for (let month = firstKfMonth; month <= (year === lastKfYear ? lastKfMonth : 12); month++) {
      row.push(`${year}-${String(month).padStart(2, '0')}`);
      if (row.length === 3) {
        months.push(row);
        row = [];
      }
    }

    if (row.length) months.push(row);
    row = [];
    firstKfMonth = 1;
  }

  return (
    <div className="app">
      <Image src={TextLogo} className="app-logo" alt="Funkin dark beats & basslines" fluid />
      
      <Container fluid className="heading-text">
        <Row>
          <Col ></Col>
          <Col xs={12} md={10} lg={8}>
          <p className="body-text"><strong>What a blast that was!</strong></p>
          <p className="body-text">
            After many years pondering about putting up an archive, I've finally pulled something together to celebrate the awesome 
            times we had, of which there were over 6 years worth :)
          </p>
          <p className="body-text">
            You can join in and help by <a href="https://github.com/chrismacp/kombination-funk-archive">submitting flyers you have</a>.
          </p>
          <div className="body-text">-</div>
          <p className="body-text">
            A massive shout out to our flyer designers over the years, <strong>Ben Fawce</strong>, <strong>Alex Judd</strong> (Soul Intent), <strong>Sebastian Pape</strong> (Planar) and also the Derby Crew.
            Looking back at these, you killed it!
          </p>
          <div className="body-text">-</div>
          <p className="body-text">
            This page is dedicated to four of our fellow KFunkers who recently passed away in 2023, all of whom had an impact on the night over the years, some from the very first event! </p>
          <div className="body-text">R.I.P. : </div>
          <div className="body-text"><strong>Mark 'Mr Seavers'</strong>,</div>
          <div className="body-text"><strong>Woody 'DJ Kuss'</strong>,</div>
          <div className="body-text"><strong>Nicky - Krunch Soundsystem</strong>,</div>
          <div className="body-text"><strong>James 'DJ Case'</strong></div>

          </Col>
          <Col></Col>
        </Row>
        
      </Container>

      <Container>
      {
        months.map(month => (
          <Row key={month} xs={1} md={2} lg={3}>
            <Col>
              <FlyerPack month={month[0]} />
            </Col>
            {
              month.length > 1 &&
              <Col>
                <FlyerPack month={month[1]} />
              </Col>
            }
            {
              month.length > 2 &&
              <Col>
                <FlyerPack month={month[2]} />
              </Col>
            }
          </Row>
        ))
      }

      
        {/* <Row xs={1} md={2} lg={3}>
          <Col>
            <FlyerPack front="1" back="2" />
          </Col>
          <Col>
            <FlyerPack front="3" back="4" />
          </Col>
          <Col>
            <FlyerPack front="5" back="6" />
          </Col>
        </Row> */}
      </Container>

      <p className="body-text">&copy; {new Date().getFullYear()} Kombination Funk - created by chrismacp</p>
    </div>
  );
}

export default App;
