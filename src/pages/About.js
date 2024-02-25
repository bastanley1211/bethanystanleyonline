import { Col, Image, Row } from "react-bootstrap";
import { Container } from "reactstrap";

const About = () => {
    return <>
    <h1>About</h1>
    <h2 className="h5 blockquote"><i>We are afflicted in every way, but not crushed; perplexed, but not driven to despair; persecuted, but not forsaken; struck down, but not destroyed; always carrying in the body the death of Jesus, so that the life of Jesus may also be manifested in our bodies.</i></h2>
    <h2 style={{textDecoration: "underline"}}>Story</h2>
    <p>My story is coming soon!</p>
    <h3>Here is a simple breakdown of the facts:</h3>
    <Container>
<Row>
  <Col xs={12} md={4} lg={6}>
  <Image className="p-2" style={{border: "black 3px dashed"}} src="https://scontent.fsac1-1.fna.fbcdn.net/v/t39.30808-6/409766514_6965652890196249_5321686196061311580_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=gMaF4rN6zW0AX8nDaL_&_nc_oc=AQk3HV2LH4_rHDK_Jl3FQL6r4snh66IZZ_I6XsQTUyH-kPeGPY74CngNjq6ELCVyunqe_Ft8Dq-W59c1dKdHIGxg&_nc_ht=scontent.fsac1-1.fna&oh=00_AfDCUudvJxTvgwbYuNzeFoDTlqPusNOizHBFYW6MlALBuA&oe=65E014B7" rounded fluid />
  </Col>
  <Col className="pt-3">
  <Col>
  <p><strong>Name:</strong>{" "}Bethany</p>
  </Col>
  <Col>
  <p><strong>Birth Year:</strong>{" "}1993</p>
  </Col>
  <Col>
  <p><strong>Languages:</strong>{" "}Native American English; Upper Elementary Japanese</p>
  </Col>
  <Col>
  <p><strong>Chinese Zodiac:</strong>{" "}Rooster</p>
  </Col>
  <Col>
  <p><strong>Enneagram:</strong>{" "}4w5</p>
  </Col>
  <Col>
  <p><strong>Roles:</strong>{" "}Wife, Mother, Daughter, and Sister; Church Admin, too</p>
  </Col>
  <Col>
  <p><strong>Main Areas of Expertise:</strong>{" "}Singing and composition; Front-end Web Development; and, Japanese language and culture.</p>
  </Col>
  <Col>
  <p><strong>Past times:</strong>{" "}Cooking/baking, writing, drawing, reading, walking, drinking tea, some sewing, some DIY projects, and trying to fix things. </p>
  </Col>
  </Col>
</Row>

    </Container>
    
    </>
  };
  
  export default About;