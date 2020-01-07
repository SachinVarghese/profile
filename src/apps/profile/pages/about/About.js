import React from "react";
import styles from "./about.module.css";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
// import backgroundImage from "../../../../assets/cover.jpeg";

function getColorIndicesForCoord(x, y, width) {
  let red = y * (width * 4) + x * 4;
  return [red, red + 1, red + 2, red + 3];
}

class About extends React.Component {
  render() {
    return (
      <div className={styles.mainBackground}>
      {/* <canvas className={styles.canvas}></canvas> */}
        <div className={classNames(styles.outerContent)}>
          <Typography
            variant="display1"
            component="h3"
            className={styles.textHeader}
          >
            The Wide Web World
          </Typography>
          <Typography
            variant="display1"
            align="justify"
            className={styles.textContent}
          >
            The World Wide Web was invented by British scientist Tim Berners-Lee 
            in 1989 while working at CERN.
          </Typography>
          <Typography
            variant="display1"
            align="justify"
            className={styles.textContent}
          >
            5 years before I was born and 25 years 
            before I entered CERN as a research intern.
          </Typography>
          <Typography
            variant="display1"
            align="justify"
            className={styles.textContent}
          > 
            During this time, the web had evolved to become the most efficient form of digital information sharing.
            And I believe that there is more to come in terms of <ul><li>Information accessibility</li>
            <li>Technology sharing</li><li>Virtual experiences</li></ul> Today, I am a proud 
            developer building and contributing towards modern web applications.
          </Typography>
          </div>
        <div className={classNames(styles.dualContent, styles.textBlock)}>
        <div className={classNames(styles.content)}>
          <Typography
            variant="display1"
            component="h3"
            className={styles.textHeader}
          >
            User Interfaces
          </Typography>
          <Typography
            variant="display1"
            align="justify"
            className={styles.textContent}
          >
            The web has made a lot of data and information accessible to the world.
            But in order to effectively utilize this massive bits in the form of electrical energy, they 
            need to be presented in a manner that is easily understandable to the human race.
            I find this aspect of software development extremely interesting and hence, 
            user interface development and data visualization has been a massive part of my work experience.<br />
            <br />
            The evolution of user interfaces has been very rapid considering the fact that 
            we were working with simple markup text two decades back and now we are starting to see advanced
            Virtual Reality devices in the market. My area of expertise in this domain would be the HTML, CSS and Javascript technologies.
            Also, I have been experimenting with WebGL libraries to create 3D and Augumented Reality experiences. 
            I am sure that the WebXR support from many browsers will definitely change the web experience in the future. <br />
            <br />            
          </Typography>
        </div>
        <div className={classNames(styles.content)}>
          <Typography
            variant="display1"
            component="h3"
            className={styles.textHeader}
          >
            Computing
          </Typography>
          <Typography
            variant="display1"
            align="justify"
            className={styles.textContent}
          >
            Web requests involve data retrieval, manipulation or computation for many real world use cases.  
            Data compuation happens at every level in the digital world from user interfaces to storage solutions.
            A lot of research is still being carried out to efficiently compute data 
            both in terms of resources utilization and the time duration. I have been creating many of these 
            data procesing pipelines for applications in advanced analytics, machine learning inferences and serving on the cloud. <br />
            <br />
            I believe that smarter computer systems will surely make human lives
            much easier and enjoyable. So the concept of creating interfaces
            that bridge the disparity between the Man and the Machine by making
            machines intelligent enough to operate in the human world is highly
            fascinating for me. 
          </Typography>
        </div>
        <div className={classNames(styles.content)}>
          <Typography
            variant="display1"
            component="h3"
            className={styles.textHeader}
          >
            Persistance
          </Typography>
          <Typography
            variant="display1"
            align="justify"
            className={styles.textContent}
          >
            Data persistance is the key that enables the web to thrive. 
            Data centers store most of this information that is then easily retrieved from even our smartphones.
            I have had experince working with a variety of storage solutions including RDBMS and NoSQL databases. 
            There has also been a trend in storing source codes in git and hence an evolution of gitops recently.
            Experience with MLops applications has also got me working on ML model and architecture storage solutions.<br />
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

        <div className={classNames(styles.outerContent)}>
        <Typography
            variant="display1"
            component="h3"
            className={styles.textHeader}
          >
            The Learning Experience
          </Typography>
          <Typography
            variant="display1"
            align="justify"
            className={styles.textContent}
          >
            The software world is growing more rapidly than ever before. As the techonlogy improves, a developer skillset also needs to learn and adapt to the new ideas and capabilities. The modern work experience has demonstrated a learning dimension that I have cherished in all the major domains in the web development world. I have had the oppurtunity to work on a eclectic variety of computer languages, technology stacks, and problem spaces that I consider myself a polyglot even in this domain.
          </Typography>
          <Typography
            variant="display1"
            align="justify"
            className={styles.textContent}
          >
            I am a currently working as a member of the Innovation and
            Development team at Mu Sigma Inc at Bangalore. I hold a Graduate Degree of Bachelors in Technology from
            National Institute of Technology, Goa in Electronics and
            Communication Engineering. During graduation, I worked on several
            projects in the field of Data analysis, Pattern Recognition and
            Machine Learning. Also, I have an internship experience at the CERN
            LHC site in Geneva where I worked on research projects on Data
            extraction, Internet of Things, and Streaming Data Visualization.
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
    // const canvas = document.getElementsByTagName('canvas')[0];
    // const ctx = canvas.getContext('2d');
    // var img = new Image();
    // img.onload = function() {
    //     ctx.drawImage(img,0,0,canvas.width,canvas.height);
    //     // this.grayscale(canvas,ctx);
    //     this.dither(canvas,ctx);
    // }.bind(this);
    // img.src = backgroundImage;     
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
