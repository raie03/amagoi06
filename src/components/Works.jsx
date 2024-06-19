import React from 'react'
import { Link, Route } from "react-router-dom";
import data from "../JSON/data.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Works = () => {
    const revData = [...data].reverse();
    return (

        <div className='works'>
            {/*<Container >
            <h2 class="section-subheading text-muted mb-5">works</h2>
            <Row >
                {
                    data && data.map(article => {
                        return (

                            <Col xs={12} md={4} key={article.id}>
                                <div class="work">
                                    <Link to={"/detail/" + article.id}><img src={article.thumbnail} className="thumbnail" /></Link>
                                    <p><Link to={"/detail/" + article.id}><h2 className="title">{article.title}</h2></Link></p>
                                </div>
                            </Col>

                        )
                    })
                }
            </Row>
        </Container>*/}

            <div class="con">
                {
                    revData && revData.map(article => {
                        return (

                            <div class="item" key={article.id}>
                                <div class="itemInner">
                                    <div class="itemInner2">
                                        <Link to={"/detail/" + article.id} >
                                        <div class="itemVisual">
                                            <div class="visualContainer">
                                                <span class="visSub">
                                                    <img src={article.thumbnail} className="thumbnail" />
                                                </span>
                                            </div>
                                            </div>
                                        </Link>
                                        <p>
                                            <Link to={"/detail/" + article.id}>
                                                <div class="titleContainer">
                                                    <div className="title">{article.title}</div>
                                                </div>
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Works