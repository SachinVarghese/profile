import React from "react";
import styles from "./about.module.css";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import backgroundImage from "../../../../assets/cover.jpeg";

function getColorIndicesForCoord(x, y, width) {
  let red = y * (width * 4) + x * 4;
  return [red, red + 1, red + 2, red + 3];
}

class About extends React.Component {
  render() {
    return (
      <div className={styles.mainBackground}>
      <canvas className={styles.canvas}></canvas>
        <div className={classNames(styles.dualContent, styles.textBlock)}>
        <div className={classNames(styles.content)}>
          <Typography
            variant="display1"
            component="h3"
            className={styles.textHeader}
          >
            The Story
          </Typography>
          <Typography
            variant="display1"
            align="justify"
            className={styles.textContent}
          >
            Everything started with a passion for technology. Learning Computer
            Science at school along with a strong affinity towards Computer
            Games kindled my very first idea of a computer world. Today, I am a
            software developer building interactive applications across domains
            like Data Science, Artificial Intelligence and Web Technologies.
          </Typography>
          </div>
        <div className={classNames(styles.content)}>
          <Typography
            variant="display1"
            component="h3"
            className={styles.textHeader}
          >
            Thoughts and Ideas
          </Typography>
          <Typography
            variant="display1"
            align="justify"
            className={styles.textContent}
          >
            I believe that smarter computer systems will surely make human lives
            much easier and enjoyable. So the concept of creating interfaces
            that bridge the disparity between the Man and the Machine by making
            machines intelligent enough to operate in the human world is highly
            fascinating for me. <br />
            <br />
            Also, I am an open source advocate, in my opinion, an open
            constructive collaboration of different people across the globe is
            the most productive way for any technological advancement. Thus,
            making innovative solutions more efficient, inexpensive and easily
            accessible is the way for the future. My perspective is corroborated
            by the huge number of top tier companies that are adopting open
            source solutions in their technological products.
          </Typography>
        </div>
        </div>

        <div className={classNames(styles.dualContent, styles.textBlock)}>
        <div className={classNames(styles.content)}>
          <Typography
            variant="display1"
            component="h3"
            className={styles.textHeader}
          >
            Experience and Education
          </Typography>
          <Typography
            variant="display1"
            align="justify"
            className={styles.textContent}
          >
            I am a currently working as a member of the Innovation and
            Development team at Mu Sigma Inc at Bangalore. At MuSigma, the
            world’s largest provider of analytics and decision science
            solutions, I have had the oppurtunity to work on a eclectic variety
            of computer languages, technology stacks, and problem spaces that I
            consider myself a polyglot even in this domain. I endeavour to keep
            myself educated on most of the latest technological advancements in
            order to bolster my research and development of applications and
            tools that we create at Mu Sigma Inc.
            <br />
            <br />I hold a Graduate Degree of Bachelors in Technology from
            National Institute of Technology, Goa in Electronics and
            Communication Engineering. During graduation, I worked on several
            projects in the field of Data analysis, Pattern Recognition and
            Machine Learning. Also, I have an internship experience at the CERN
            LHC site in Geneva where I worked on research projects on Data
            extraction, Internet of Things, and Streaming Data Visualization.
          </Typography>
          </div>

          <div className={classNames(styles.content)}>

          <Typography
            variant="display1"
            component="h3"
            className={styles.textHeader}
          >
            Up Next
          </Typography>
          <Typography
            variant="display1"
            align="justify"
            className={styles.textContent}
          >
            I am looking forward to more learning, experimenting and open source
            collaboration in the areas of Intelligent Software Development and
            Interfaces. Always up for a chat or even a constructive debate on
            ideas that could shape the future!!
          </Typography>
        </div>
        </div>
      </div>
    );
  }

  grayscale(canvas,ctx){
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;
    for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i]     = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  componentDidMount(){
    const canvas = document.getElementsByTagName('canvas')[0];
    const ctx = canvas.getContext('2d');
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        // this.grayscale(canvas,ctx);
        this.dither(canvas,ctx);
    }.bind(this);
    img.src = backgroundImage;     
  }

  dither(canvas,ctx) {
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let newData = imageData.data;
    let colorNum=99;


    for (let y = 0; y < canvas.height; y += 1) {
      for (let x = 0; x < canvas.width; x += 1) {
        let pixel = getColorIndicesForCoord(x,y,canvas.width);

        for (var z = 0; z < 3; z += 1) {
          let data = newData[pixel[z]];
          newData[pixel[z]]  = (Math.round(colorNum * data/255)*255)/(colorNum-1);  
          let err = newData[pixel[z]]-data;
          newData[getColorIndicesForCoord(x+1,y,canvas.width)[z]] = newData[getColorIndicesForCoord(x+1,y,canvas.width)[z]] + err*(7/16);
          newData[getColorIndicesForCoord(x-1,y+1,canvas.width)[z]] = newData[getColorIndicesForCoord(x-1,y+1,canvas.width)[z]] + err*(3/16);
          newData[getColorIndicesForCoord(x,y+1,canvas.width)[z]] = newData[getColorIndicesForCoord(x,y+1,canvas.width)[z]] + err*(5/16);
          newData[getColorIndicesForCoord(x+1,y+1,canvas.width)[z]] = newData[getColorIndicesForCoord(x+1,y+1,canvas.width)[z]] + err*(1/16);
        }
        newData[pixel[3]]  = (x+y)*128/(canvas.height+canvas.width);  

      }
    }
    ctx.putImageData(imageData, 0, 0);
    // ctx.mozImageSmoothingEnabled = false;
    // ctx.webkitImageSmoothingEnabled = false;
    // ctx.msImageSmoothingEnabled = false;
    // ctx.imageSmoothingEnabled = false;
  };
}

export default About;
