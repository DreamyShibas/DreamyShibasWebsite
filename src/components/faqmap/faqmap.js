import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './faqmap.css';

//import Assets
import roadmap from '../../assets/Roadmap.mp4';

//import Component
import RoadMapItem from "./faqmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: '1',
                    title: "What is an NFT?",
                    content: "NFT represents a Non-fungible token. It is a digital asset minted on a blockchain. It may be a media file such as music, clips, or text, arts, etc."
                },
                {
                    tag: 'Ever going (Early Q1 commencement)',
                    title: "Who are the Dreamy Shibas?",
                    content: "The Dreamy Shibas is the term used to refer to the dogs that have passed away."
                },
                {
                    tag: 'Q3 2022',
                    title: "When is the launch?",
                    content: "The launch will soon be announced as soon as we are done with creating a community."
                },
                {
                    tag: 'Q4 2022',
                    title: "What is your use case?",
                    content: "Our inspiration is to contribute to the survival and rescue of living dogs as an honor to dogs who have passed away."
                },
                {
                    tag: 'Q4 2022',
                    title: "How can I buy a Dreamy Shiba?",
                    content: "You will be able to buy on our website when we launch. Join our communities to get detailed information on the launch date."
                },
                {
                    tag: 'Q4 2022',
                    title: "What wallet platform is best for transaction purposes?",
                    content: "Metamask wallet is best preferred. You will experience a smooth transaction on Metamask"                   
                },
                {
                    tag: 'Q4 2022',
                    title: "How many Dreamy Shibas NFTs will be minted?",
                    content: "5,000 lovely Dreamy Shibas will be minted."
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ backgroundColor: "black", backgroundImage: "none" }}>
                <Container style={{ backgroundColor: "black", paddingTop: 0 }}>
                    <header style={{fontStyle: "normal", color:"white", textAlign: "center" }}><span></span> <br/> FAQ's</header>
                    <Row style={{ paddingTop: 0}}>
                        <Col>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{ color: "black" }} key={index}
                                            tag={item.tag}
                                            title={item.title}
                                            content={item.content}
                                            content2={item.content2}
                                            content3={item.content3}
                                            content4={item.content4}
                                            content5={item.content5}
                                            content6={item.content6}
                                             />
                                    );
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default RoadMap;