import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Voici quelques uns de mes projets.</h1>
            <div id="portfolio-wrapper" className="portfolio-gallery">
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, index) => (
                  <div className="columns portfolio-item" key={index}>
                    <div className="">
                      <a href={item.link} target="_blank" rel="noopener noreferrer"> 
                        <img src={item.imgurl} className="item-img" alt={item.name} />
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
