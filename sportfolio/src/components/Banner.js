import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myimage2 from "../assets/img/Picture1.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full-Stack Developer", "UI/UX Designer", "Flutter Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Shreya Awasthi`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "3rd Year Student", "Front-End Developer", "Team Leder" ]'><span className="wrap">{text}</span></span></h1>
                <p>
                  I am a B.Tech student with a versatile skill set. Proficient in C/C++, Python, Java, and a range of web technologies like HTML, CSS, JavaScript, React, Flutter, and Dart, excels in both back-end and front-end development. Firebase is tool for crafting dynamic web and mobile applications. Beyond coding and also have a knack for UI/UX design, using Canva and Figma to create engaging interfaces. Additionally, possesses foundational knowledge in artificial intelligence and practical experience with OpenCV. This amalgamation of technical and creative skills makes me poised to make a meaningful impact in technology and design.
        </p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={myimage2} alt="error"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
