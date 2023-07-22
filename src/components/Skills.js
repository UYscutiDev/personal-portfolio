import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                magnam esse cupiditate architecto assumenda, sequi nobis
                deserunt tempore reiciendis optio alias quidem atque repellat
                enim sint minima perferendis! Delectus, magni!
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div>
                  <img src={meter1} alt="meter1" />
                  <h5>Web Development</h5>
                </div>
                <div>
                  <img src={meter2} alt="meter2" />
                  <h5>Brand Indentity</h5>
                </div>
                <div>
                  <img src={meter3} alt="meter3" />
                  <h5>Logo Design</h5>
                </div>
                <div>
                  <img src={meter1} alt="meter1" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        alt="background"
        src={colorSharp}
      />
    </section>
  );
};
