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

  console.log(months);

  return (
    <div className="app">
      <Image src={TextLogo} className="app-logo" alt="Funkin dark beats & basslines" fluid />
      
      <div className="body-text"><strong>What a blast that was!</strong></div>
      <div className="body-text">After many years thinking about putting up an archive,
                                 I've finally got something together to celebrate the awesome times we had.</div>
      <div className="body-text">You can join in by <a href="">submitting flyers you have</a>.</div>
      <div className="body-text">-</div>
      <div className="body-text">This page is dedicated to four of our fellow KFunkers who recently passed away in 2023,</div>
      <div className="body-text">all of whom had an impact on the night over the years, some from the very first event! </div>
      <div className="body-text">-</div>
      <div className="body-text">R.I.P. : </div>
      <div className="body-text"><strong>Mark 'Mr Seavers'</strong>,</div>
      <div className="body-text"><strong>Woody 'DJ Kuss'</strong>,</div>
      <div className="body-text"><strong>Nicky - Krunch Soundsystem</strong>,</div>
      <div className="body-text"><strong>James 'DJ Case'</strong></div>


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

      <div className="body-text">&copy; {new Date().getFullYear()} Kombination Funk</div>
    </div>
  );
}

export default App;
