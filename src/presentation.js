// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Link,
  Notes,
  Image
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import code from "./assets/code.example";
// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={6} caps textAlign="left" textColor="primary">
            COS30015 - IT Security
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Research Project
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            A study on malware detection rates using VirusTotal scan results
          </Text>
          <Notes textColor="secondary">Introduce self. And all that.</Notes>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="tertiary">
            Goals
          </Heading>
          <Notes textColor="secondary">
            Visualise data gathered from VirusTotal to find correlation between
            VirusTotal scan results and APT attacks detection.
          </Notes>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} textColor="primary">
            Context
          </Heading>
          <Heading size={6}>APT + VirusTotal</Heading>
          <Notes textColor="secondary">
            <strong>APT</strong> - Advance Persistent Threat
            <br />
            <strong>Attacks</strong> - 0-day exploits, tailored, hard to detect,
            don't know until after it goes
            <br />
            <strong>VirusTotal</strong> - public services, provides virus scan
            results and additional of analysed files, include detection results
            of 50+ antivirus engines
          </Notes>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="secondary"
          textColor="primary"
          style={{ maxWidth: "1200px!important" }}
        >
          <Heading size={1} textColor="tertiary">
            Check list
          </Heading>
          <List
            style={{ width: "1200px!important" }}
            bulletStyle="classicCheck"
          >
            <Appear>
              <div>
                <ListItem>Gather scan results from VirusTotal</ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem transition={["fade"]}>
                  Extract + calculate fields of interest into CSV format
                </ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem transition={["fade"]}>
                  Create charts using D3.js and Tableau
                </ListItem>
              </div>
            </Appear>
            <Appear>
              <div>
                <ListItem transition={["fade"]}>
                  Analyse the "stories" shown in the charts
                </ListItem>
              </div>
            </Appear>
          </List>
          <Notes>
            or what I did for my research project.
            <br />
            Show my results in next slide
          </Notes>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" align="center center">
          <Heading>Results</Heading>
          <Link
            href={`https://heuristic-feynman-5237d9.netlify.com/`}
            target="_blank"
          >
            <Text textColor="secondary">Charts made using D3.js</Text>
          </Link>
          <Link
            href={`https://eu-west-1a.online.tableau.com/#/site/lethalcelery/views/ITSEC/Presentation?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link&:iid=5`}
            target="_blank"
          >
            <Text textColor="secondary">Charts made using Tableau</Text>
          </Link>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          code={code}
          bgColor="secondary"
          color="white"
          showLineNumbers={false}
          ranges={[
            {
              loc: [10, 22],
              title: "Extracting some data"
            },
            { loc: [23, 37], title: "Building some charts" }
          ]}
        />
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={4} textColor="tertiary" bold>
            Thank you!
          </Heading>
          <Image src="https://media.giphy.com/media/fWfowxJtHySJ0SGCgN/giphy.gif" />
        </Slide>
      </Deck>
    );
  }
}
