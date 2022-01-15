import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import AboutGif from "../../assets/Collection_GIF.gif";
import YButton from "../basic/YButton";

//import CSS
import "./about.css";
class About extends React.Component {
  render() {
    return (
      <div className="about-control">
        <Container>
          <Row>
            <Col md={6} xs={12} className="about-description">
              <header>
                <span>Dreamy Shibas:</span>
                <br />
                <text>Honoring Man's <br />
                Loveliest Pets.</text>
              </header>
              <p>
                Welcome to the World of Dream Shibas. <br />
                Our mission is to sustain the memory of man’s closest pet in our
                minds. <br />
                Dreamy Shibas is a collection of 5,0000 NFTs.
                <br />
                These collections are designed and developed as ERC-721 on the
                Ethereum blockchain.
                <br />
                This project will preserve the memory of Mika and Ryu; they are
                our dogs that passed away.
                <br />
                We will allocate 10% of our profits to donations for dog rescue
                initiatives.
                <br />
                <br />
                <span style={{fontSize: 25}}>TOKENOMICS:</span>
                <br />
                Team Reserve: 10%
                <br />
                Private sale: 20%
                <br />
                Public sale: 25%
                <br />
                Marketing: 25%
                <br />
                Donations for Dog rescue: 10%
              </p>

              {/* <div><YButton text='COMING SOON' /></div> */}
            </Col>
            <Col md={6} xs={12} className="image-control">
              <img src={AboutGif} alt="about gif" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
