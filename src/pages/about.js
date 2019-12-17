import React from 'react';
import '../css/about.css';
import Nav from '../components/Nav/nav';
import '../css/accordion.css'
import Footer from '../components/footer/footer'

class About extends React.Component {
  render() {
    let data = [
      {
        title: "CODE",
        content:  [
          "HTML",
          "CSS",
          "Sass",
          "JavaScript",
          "Drupal",
          "Wordpress"
        ]
      }, {
        title: "DESING",
        content: [
          "Figma",
          "Sketch",
          "XD Adobe",
          "After Effects",
          "Illustrator",
          "Photoshop"
        ]
      }, {
        title: "SOFT SKILL",
        content: [
          "Non-Violent Communication",
          "Desing Thinking"
        ]
      },{
      title: "EXTRAS",
        content:[
          "Photography",
          "Office"
        ]
      },
    ];

    return (
      <div className="wapper__about">
        <Nav />
        <h1 className="aboutme__title">About Me</h1>
        <img className="aboutme__img" src="./img/me.jpg" alt="Foto de Gloriana Angulo" />
        <div>
          <h2 className="info__sub">Hello !</h2>
          <p className="info__text">I am a student at El Parque la Libertad in CETAV, which is the Technology and Visual Arts Center located in San José Costa Rica. My sites are encoded with HTML5, CSS3 and JavaScript. In my sites I worry about the user feeling comfortable with what he sees on the web and that it is accessible by all users.</p>
          <p className="info__text">In my free time I love reading novels about romance or fantasy I consider myself a lover of that kind of stories, also trying to learn to play the guitar or with my camera taking pictures of ls paisages or people in the street and researching new metosdos CSS and JavaScript.</p>
        </div>
        <div className="wapper__skills">
          <h2 className="skills_sub">skills</h2>
          <div className="skills__text">
            <p>I know how to work as a team because I am one of those who thinks that more heads think better than one.</p>
            <p>I have knowledge of UX desing.</p>
          </div>
        </div>
        <div className="wapper__accordion">
          <Accordion data={data} />
        </div>
        <Footer/>
      </div>
    );
  }
};


class Accordion extends React.Component {
  constructor(){
    super();
    this.state = {
      accordion: [],
      accordionItems: ' '
    }
  }
  componentWillMount() {
  let {accordion} = this.state
    this.props.data.forEach((i) => {
      accordion.push({
        title: i.title,
        content: i.content,
        open: false
      });
    });

    this.setState({
      accordionItems: accordion
    });
  }

  click(i) {
    const {accordionItems} = this.state;
    const newAccordion = accordionItems.slice();
    const index = newAccordion.indexOf(i)

    newAccordion[index].open = !newAccordion[index].open;
    this.setState({ accordionItems: newAccordion });
  }

  render() {
    const {accordionItems} = this.state;
    const sections = accordionItems.map((i) => (
      <div key={accordionItems.indexOf(i)}>
        <div
          className="title"
          onClick={this.click}
        >
          <div className="arrow-wrapper">
            <i className={i.open
              ? "fa fa-angle-down fa-rotate-180"
              : "fa fa-angle-down"}
            ></i>
          </div>
          <span className="title-text">
            {i.title}
          </span>
        </div>
        <div className={i.open
          ? "content content-open"
          : "content"}
        >
          <div className={i.open
            ? "content-text content-text-open"
            : "content-text"}
          > {i.content}
          </div>
        </div>
      </div>
    ));

    return (
      <div className="accordion">
        {sections}
      </div>
    );
  }
}

export default About;