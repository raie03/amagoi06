import React from 'react'
import { Link, Route } from "react-router-dom";
import data from "../JSON/data.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Works = () => {
    return (

        <div className='works'><Container >
            <h2 class="section-subheading text-muted mb-5">works</h2>
            <Row >
                {
                    data && data.map(article => {
                        return (

                            <Col xs={12} md={4} key={article.id}>
                                <div>
                                    <Link to={"/detail/" + article.id}><img src={article.thumbnail} className="thumbnail" /></Link>
                                    <p><Link to={"/detail/" + article.id}><h2 className="title">{article.title}</h2></Link></p>
                                </div>
                            </Col>

                        )
                    })
                }
            </Row>
        </Container>

                <div class="con">
                {
                    data && data.map(article => {
                        return (

                            <div  key={article.id}>
                                <div class="item">
                                    <Link to={"/detail/" + article.id}><img src={article.thumbnail} className="thumbnail" /></Link>
                                    <p><Link to={"/detail/" + article.id}><h2 className="title">{article.title}</h2></Link></p>
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