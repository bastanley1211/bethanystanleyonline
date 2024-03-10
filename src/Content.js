import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Music from './pages/Music';
import Media from './pages/Media';
import Contact from './pages/Contact';
import AllPosts from './Blog/AllPosts';
import OnePost from './Blog/OnePost';


import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';


class MainContent extends React.Component {
    render () {
        return <Container loading="lazy" className='Site-main-content-box p-3'>
            <Row>
                <Col>
                <Routes>
<Route path="blog" element={<Blog />} />
<Route path ="about" element={<About />} />
<Route path ="music" element={<Music />} />
<Route path ="media" element={<Media />} />
<Route path ="contact" element={<Contact />} />
<Route path="/blog" element={<AllPosts />} exact />
<Route path="/blog/:slug" element={<OnePost />} />

<Route exact path="/" element={<Home />}>
  </Route>

  </Routes>
                    </Col>
                </Row>
        </Container>
    }
}

export default MainContent;