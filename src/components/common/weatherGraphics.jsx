import React from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap";
import WeatherIcon from "./weatherIcon";
import styles from "../../include/css/weatherGraphics.module.css";

const WeatherGraphics = ({ weatherInfo: info }) => {
  if (info.ciudad) {
    const bgColor =
      info.clima === "Clear"
        ? "cleardaybg"
        : info.clima === "ClearNight"
        ? "clearnightbg"
        : "greydaybg";
    console.log(bgColor);
    return (
      <Card className={styles.card}>
        <Card.Body className={styles[`${bgColor}`]}>
          <Card.Title>
            {info.ciudad}, {info.pais}
          </Card.Title>
          <Card.Subtitle className="fw-normal">Hoy {info.hora}</Card.Subtitle>
        </Card.Body>
        <Card.Body className={styles[`${bgColor}`]}>
          <Row>
            <Col className={styles.descVisual}>
              <WeatherIcon weather={info.clima} />
            </Col>
            <Col>
              <div className={styles.temperatura}>{info.temp}°c</div>
            </Col>
          </Row>
          <Row className="my-2">
            <Col className={styles.descVisual}>
              <div>{info.descripcion}</div>
            </Col>
            <Col>
              <div className={styles.sensTerm}>
                Sensación termica de {info.sensTerm}°
              </div>
            </Col>
          </Row>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item className={styles.listGroup}>
            <Card.Body>
              <Row>
                <Col className={styles.detalles}>
                  <div>Humedad</div>
                  <div>Punto de rocio</div>
                  <div>Presión atmosferica</div>
                </Col>
                <Col>
                  <div>{info.humedad}%</div>
                  <div>{info.puntoRocio}°C</div>
                  <div>{info.presion} mbar</div>
                </Col>
              </Row>
            </Card.Body>
          </ListGroup.Item>
          <ListGroup.Item className={styles.listGroup}>
            <Card.Body>
              <Row>
                <Col className={styles.detalles}>
                  <div>Visibilidad</div>
                  <div>Viento</div>
                  <div>Salida del sol</div>
                  <div>Puesta del sol</div>
                </Col>
                <Col>
                  <div>{info.visibilidad} km </div>
                  <div>
                    {info.velViento} km/h - del {info.dirViento}
                  </div>
                  <div>{info.amanecer}</div>
                  <div>{info.atardecer}</div>
                </Col>
              </Row>
            </Card.Body>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    );
  } else
    return (
      <Card className={styles.emptyCard}>
        <Card.Body>Cargando información inicial...</Card.Body>
      </Card>
    ); //Cambiar por spinner o algo parecido
};

export default WeatherGraphics;
