import React from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import WeatherIcon from "./common/weatherIcon";

const CurrentWeatherGraphics = ({ weatherInfo: info }) => {
  if (info.ciudad) {
    return (
      <Card style={{ maxWidth: "36rem" }}>
        <Card.Body>
          <Card.Title>
            {info.ciudad}, {info.pais}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Hoy {info.hora}
          </Card.Subtitle>
        </Card.Body>
        <Card.Body>
          <Row>
            <Col>
              <WeatherIcon weather={info.clima} />
            </Col>
            <Col>
              <span style={{ fontSize: "85px" }}>{info.temp}°c</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>{info.descripcion}</h3>
            </Col>
            <Col>
              <h4>Sensacion termica de {info.sensTerm}°</h4>
            </Col>
          </Row>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h5>Humedad: {info.humedad}%</h5>
            <h5>Punto de rocio: {info.puntoRocio} °C</h5>
            <h5>Presion Atmosferica: {info.presion} mbar</h5>
          </ListGroup.Item>
          <ListGroup.Item>
            <h5>Visibilidad: {info.visibilidad} km </h5>
            <h5>
              Viento: {info.velViento} km/h - del {info.dirViento}
            </h5>
            <h5>Salida del sol: {info.amanecer}</h5>
            <h5>Puesta del sol: {info.atardecer}</h5>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    );
  } else return <Card style={{ maxWidth: "36rem", height: "35rem" }} />; //Cambiar por spinner o algo parecido
};

export default CurrentWeatherGraphics;
