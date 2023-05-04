import React from "react";
import { Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function WorkCard({ company, jobTitle, date, description, imgsrc }) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
      <div style={styles.card}>
        <Row>
          <Col>
            <img style={styles.img} src={imgsrc} alt="img" />
          </Col>
          <Col xs={9}>
            <Row style={styles.company}>{company}</Row>
            <Row style={styles.jobTitle}>{jobTitle}</Row>
            <Row style={styles.date}>{date}</Row>
          </Col>
        </Row>
        <Row>
          <Col style={styles.description}>{description}</Col>
        </Row>
      </div>
    </motion.div>
  );
}

const styles = {
  card: {
    marginBottom: 60,
  },
  company: {
    fontSize: 18,
    fontWeight: "bold",
  },
  jobTitle: {
    fontSize: 16,
    color: "#ac5afe",
  },
  date: {
    color: "#A3A3A3",
    marginTop: 7,
    fontSize: 12,
  },
  description: {
    marginTop: 20,
    fontSize: 14,
  },
  img: {
    height: 80,
    width: 80,
  },
};

export default WorkCard;
