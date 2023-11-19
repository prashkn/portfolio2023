import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import repo_icon from "../assets/github-repo-icon.png";

function RepoCard({ name, description, url }) {
  return (
    <div style={{ width: "33%", marginTop: "2rem" }}>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none" }}
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
          <Card style={{ borderRadius: "10px" }}>
            <Card.Img
              variant="top"
              src={repo_icon}
              style={{ width: "100%" }}
              alt={`${name} repository`}
            />
            <Card.Body>
              <Card.Title>
                <h6 style={{ color: "black" }}>{name}</h6>
              </Card.Title>
              <Card.Text>
                <p style={{ color: "gray" }}>{description}</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
      </a>
    </div>
  );
}

// const styles = {
//   card: {
//     marginBottom: 60,
//   },
//   company: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   jobTitle: {
//     fontSize: 16,
//     color: "#ac5afe",
//   },
//   date: {
//     color: "#A3A3A3",
//     marginTop: 7,
//     fontSize: 12,
//   },
//   description: {
//     marginTop: 20,
//     fontSize: 14,
//   },
//   img: {
//     height: 80,
//     width: 80,
//   },
// };

export default RepoCard;
