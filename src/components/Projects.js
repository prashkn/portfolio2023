import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Container>
      <motion.div animate={{ x: 0 }} transition={{ delay: 0 }}>
        <Row>
          <ProjectCard
            header={projects.HANDML.header}
            description={projects.HANDML.description}
            sourcecode={projects.HANDML.sourcecode}
            githublink={projects.HANDML.githublink}
            language={projects.HANDML.language}
          />
        </Row>
        <Row style={{ marginTop: "3%" }}>
          <ProjectCard
            header={projects.STARTUPDIR.header}
            description={projects.STARTUPDIR.description}
            sourcecode={projects.STARTUPDIR.sourcecode}
            githublink={projects.STARTUPDIR.githublink}
            language={projects.STARTUPDIR.language}
          />
        </Row>

        <Row style={{ marginTop: "3%" }}>
          <ProjectCard
            header={projects.WORDLE.header}
            description={projects.WORDLE.description}
            sourcecode={projects.WORDLE.sourcecode}
            githublink={projects.WORDLE.githublink}
            language={projects.WORDLE.language}
          />
        </Row>
        <Row style={{ marginTop: "3%" }}>
          <ProjectCard
            header={projects.MENTALLYS.header}
            description={projects.MENTALLYS.description}
            sourcecode={projects.MENTALLYS.sourcecode}
            githublink={projects.MENTALLYS.githublink}
            language={projects.MENTALLYS.language}
          />
        </Row>
        <Row style={{ marginTop: "3%" }}>
          <ProjectCard
            header={projects.DISCORDBOT.header}
            description={projects.DISCORDBOT.description}
            sourcecode={projects.DISCORDBOT.sourcecode}
            githublink={projects.DISCORDBOT.githublink}
            language={projects.DISCORDBOT.language}
          />
        </Row>
        <Row style={{ marginTop: "3%" }}>
          <ProjectCard
            header={projects.HOUSEPARTY.header}
            description={projects.HOUSEPARTY.description}
            sourcecode={projects.HOUSEPARTY.sourcecode}
            githublink={projects.HOUSEPARTY.githublink}
            language={projects.HOUSEPARTY.language}
          />
        </Row>
        <Row style={{ marginTop: "3%" }}>
          <ProjectCard
            header={projects.POKEMONAPI.header}
            description={projects.POKEMONAPI.description}
            sourcecode={projects.POKEMONAPI.sourcecode}
            githublink={projects.POKEMONAPI.githublink}
            language={projects.POKEMONAPI.language}
          />
        </Row>
        <Row style={{ marginTop: "3%" }}>
          <ProjectCard
            header={projects.TTCWEB.header}
            description={projects.TTCWEB.description}
            sourcecode={projects.TTCWEB.sourcecode}
            githublink={projects.TTCWEB.githublink}
            language={projects.TTCWEB.language}
          />
        </Row>
        <Row style={{ marginTop: "3%", marginBottom: "3%" }}>
          <ProjectCard
            header={projects.PORTFOLIO.header}
            description={projects.PORTFOLIO.description}
            sourcecode={projects.PORTFOLIO.sourcecode}
            githublink={projects.PORTFOLIO.githublink}
            language={projects.PORTFOLIO.language}
          />
        </Row>
      </motion.div>
    </Container>
  );
}

const projects = {
  HANDML: {
    header: {
      a: "machine learning model",
      b: "turns handwriting into text",
    },
    description:
      "used an SGD optimization with a 0.03 learning rate and 6000 training data to take drawing of numbers and predicts the number drawn. acheived a 92.74% accuracy rate.",
    githublink: "https://github.com/prashkn/handwriting-classifier",
    language: "python",
    sourcecode: `def view_classify(img, ps):
        """ Function for viewing an image and it's predicted classes."""
        ps = ps.data.numpy().squeeze()

        fig, (ax1, ax2) = plt.subplots(figsize=(6,9), ncols=2)
        ax1.imshow(img.resize_(1, 28, 28).numpy().squeeze())
        ax1.axis('off')`,
  },
  TTCWEB: {
    header: {
      a: "website",
      b: "attract hackers to one of the biggest hackathons",
    },
    description:
      "developed a website from start to finish for the chicago chapter of Tech Together, the nation’s largest hackathon organization focused on making the hackathon space more inclusive to marginalized groups.",
    githublink: "https://github.com/TechTogetherInc/ttc-2022",
    language: "html",
    sourcecode: `<button
  type="button action"
  class="btn btn-outline-danger action"
  style="margin-top: 2%; font-size: 12pt; height: 56px;"
>
  SUBMIT A PROJECT
</button>`,
  },
  MENTALLYS: {
    header: {
      a: "mobile app",
      b: "plays music based on your mood",
    },
    description:
      "created an app with a team that asks a user a series of questions, and based on their answers, determines their mood. utilized the spotify api to query a playlist and play the user a playlist through the spotify app.",
    githublink: "https://github.com/prashkn/Group-5",
    language: "java",
    sourcecode: `String genre = AllSet.generateGenre(QuestionsStart.MoodTracker);
Log.d("MusicBrowser", genre + ": " + AllSet.music.get(genre));
String playlistURI = AllSet.music.get(genre);
if (playlistURI == null) {
    playlistURI = "spotify:playlist:0vvXsWCC9xrXsKd4FyS8kM";
}
mSpotifyAppRemote.getPlayerApi().play(playlistURI);`,
  },
  DISCORDBOT: {
    header: {
      a: "discord bot",
      b: "keeps a discord server fun",
    },
    description:
      "made a node.js application tangent to the discord api to create a bot that has 10 or so commands. used in 3 servers with about 280 users total.",
    githublink: "https://github.com/prashkn/discord-bot",
    language: "javascript",
    sourcecode: `const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require('./commands/' + file);
    bot.commands.set(command.name, command);
}`,
  },
  WORDLE: {
    header: {
      a: "web page",
      b: "solves your daily wordle",
    },
    description:
      "created an algorithm to determine a list of all viable options to choose from. created a wrapper from bootstrap to display this list of words and take in user input of their guesses.",
    githublink: "https://github.com/prashkn/wordle_solver_cli",
    language: "javascript",
    sourcecode: `let validHintsArray = ["b", "y", "g"];
let validHints = hints.length == 5;
for (let i = 0; i < 5; i++) {
    if (!validHintsArray.includes(hints.charAt(i))) validHints = false;
}

return validGuess && validHints;`,
  },
  HOUSEPARTY: {
    header: {
      a: "mobile card game",
      b: "you can play with your friends",
    },
    description:
      "a react native card game for small get-togethers with your friends. create players, and randomize card prompts with random player names.",
    githublink: "https://github.com/prashkn/house-party",
    language: "javascript",
    sourcecode: `question.forEach((phrase, idx) => {
    if (idx != question.length - 1) {
        prompted += phrase + getRandomPlayer();
    } else {
        prompted += phrase;
    }
});`,
  },
  STARTUPDIR: {
    header: {
      a: "web directory",
      b: "connects startups and students",
    },
    description:
      "this startup directory is a project i helped develop with founders, an uiuc club that helps entrepreneurs. it is a react application, utilizing auth0, mongoDB, and many different react libraries. startups can post their startups and jobs, and users can view job openings and filter through startups.",
    githublink: "https://github.com/founders/startup-directory",
    language: "jsx",
    sourcecode: `<li>Skills: </li>
{skills.map((skill, idx) => (
  <li key={skill + idx}>
    {skill}
    {idx !== skills.length - 1 && ', '}
  </li>
))}`,
  },
  POKEMONAPI: {
    header: {
      a: "pokemon cli game",
      b: "lets you battle against a pokemon",
    },
    description:
      "a cli game that lets you choose any pokemon and their respective moves. pulls data from the pokeapi, and utilizes data persistance to save the amount of calls made. randomizes enemy pokemon, and their moves.",
    githublink: "https://github.com/prashkn/pokemon_analysis",
    language: "python",
    sourcecode: `def get_move_data(move_names):
  move_data = {}
  for move_name in move_names:
      move = make_call("move", move_name)
      move_data[move_name] = move

  return move_data`,
  },
  PORTFOLIO: {
    header: {
      a: "portfolio",
      b: "showcases me",
    },
    description: "what you're looking at! built using react 👍",
    githublink: "https://github.com/prashkn/portfolio",
    language: "jsx",
    sourcecode: `<ProjectCard
  header={projects.PORTFOLIO.header}
  description={projects.PORTFOLIO.description}
  sourcecode={projects.PORTFOLIO.sourcecode}
  githublink={projects.PORTFOLIO.githublink}
  language={projects.PORTFOLIO.language}
/>`,
  },
};
