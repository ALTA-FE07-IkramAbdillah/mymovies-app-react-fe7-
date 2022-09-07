import React from "react";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Styles/Detail.css";

const DetailPage = () => {
  const location = useLocation();

  return (
    <Container className="card-detail">
      <Row>
        <Col>
          <Card.Img
            variant="top"
            src={location.state.image ? "https://image.tmdb.org/t/p/original/" + location.state.image : "https://via.placeholder.com/500x750.png/000000/FFFFFF/%20C/O%20https://placeholder.com/?text=No+image"}
            height="70%"
            alt=""
          />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title className="title" style={{ fontSize: 50 }}>
              {location.state.title}
            </Card.Title>
            <Card.Text className="Release" style={{ fontSize: 20 }}>
              Release Date : {location.state.release}
            </Card.Text>
            <Card.Text className="Description" style={{ fontSize: 20 }}>
              Description : {location.state.description}
            </Card.Text>
            <Button variant="danger">ADD FAVORITE</Button>
          </Card.Body>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailPage;
