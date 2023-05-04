import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import { CodeBlock, nord } from "react-code-blocks";

export default function ProjectCard({
  header,
  description,
  sourcecode,
  githublink,
  language,
}) {
  return (
    <motion.div
      style={styles.motionbtn}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
    >
      <a
        href={githublink}
        style={{ textDecoration: "none", color: "black" }}
        target="_blank"
        rel="noreferrer"
      >
        <Container className="card-container">
          <Row>
            <Col sm={12} md={7}>
              <h1 style={{ fontSize: 20 }}>
                a <span style={{ backgroundColor: "#EDE3FC" }}>{header.a}</span>{" "}
                that <span style={{ color: "#AC5AFE" }}>{header.b}</span>.
              </h1>
              <Row style={{ marginRight: "28%" }} className="under">
                <h2 style={{ fontSize: 14 }}>{description}</h2>
              </Row>
            </Col>
            <Col sm={12} md={5} className="codeblock">
              <CodeBlock
                text={sourcecode}
                language={language}
                theme={nord}
                showLineNumbers={true}
              />
            </Col>
          </Row>
        </Container>
      </a>
    </motion.div>
  );
}

const styles = {
  pre: {
    background: "#454545",
    padding: 20,
    borderRadius: 10,
    maxWidth: 400,
    scrollbarWidth: "none",
  },
  code: {
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: 1.5,
    color: "#EDE3FC",
  },
};
