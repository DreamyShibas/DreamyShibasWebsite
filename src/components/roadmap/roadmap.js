import React from "react";
import { Col, Container, Row } from "react-bootstrap";

//import CSS
import './roadmap.css';

//import Assets
import roadmap from '../../assets/Roadmap.mp4';

//import Component
import RoadMapItem from "./roadmapitem";
class RoadMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roadmaps: [
                {
                    tag: ' Q1 Phase 1',
                    title: "Opensea and Rarity Tool Listings",
                    content: "Dreamy Shibas will officially be listed on OpenSea & Rarity Tool."
                },
                {
                    tag: 'Q1 Phase 2',
                    title: "Dreamy Shibas Presale",
                    content: "Dreamy Shibas Presale will officially launch."
                },
                {
                    tag: 'Q2 Phase 3',
                    title: "Dreamy Shibas Public Sale",
                    content: "500 Sold - Dreamy Shibas Public Sale will officially launch."
                },
                {
                    tag: 'Q2 Phase 4',
                    title: "Airdrop & Giveaways",
                    content: "1000 Sold - Community airdrops & giveaways, exclusive to Dreamy Shibas holders."
                },
                {
                    tag: 'Q3 Phase 5',
                    title: "20ETH Donations to Dog rescue",
                    content: "2000 Sold - Dreamy Shibas will donate 20 ETH to a community-chosen dog rescue."
                },
                {
                    tag: 'Q3 Phase 6',
                    title: "Raffles & Competitions",
                    content: "3000 Sold - $5000 will be given away in raffles as well as competetion prizes for Dreamy Shibas holders."
                },
                {
                    tag: 'Q4 Phase 7',
                    title: "Random Giveaways & Airdrops",
                    content: "4000 Sold - Random giveaways of 50 exclusive Dreamy Shibas & an airdrop giveaway of 100 Dreamy Shibas."
                },
                {
                    tag: 'Q4 Phase 8',
                    title: "All Sold Out",
                    content: "Donations to randomly selected Dog rescue initiatives."
                }
            ]
        }
    }

    render() {
        return (
            <div className='roadmap-control' id='roadmap' style={{ textAlign: "center" }}>
                <Container style={{ backgroundImage: "linear-gradient(to top right, #aa00ff, rgba(255, 255, 255, 0))", padding: 30, border: "solid black 10px", borderRadius: 20 }}>
                    <header style={{ fontWeight: 900 }}><span>CHECK OUT OUR</span> <br /> ROADMAP</header>
                    <p className='roadmap-description'>
                        Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.
                    </p>
                    <Row style={{ alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                        {/* <Col xs={12} md={6}>
                            <img  className="roadimage"style={{border:"solid 10px black", borderRadius: 20}}src="https://cdn.dribbble.com/users/35633/screenshots/7704871/media/7b62d4238bb104a065dfeaf8a91a14bb.png?compress=1&resize=800x600" />
                        </Col> */}
                        <Col style={{ color: "white", alignContent: "center", justifyContent: "center", textAlign: "center" }}>
                            {
                                this.state.roadmaps.map((item, index) => {
                                    return (
                                        <RoadMapItem style={{ textAlign: "center", color: "black" }} key={index}
                                            tag={item.tag}
                                            title={item.title}
                                            content={item.content} />
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