import React, { Component } from "react";

export default class Testimonials extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            
            <div className="two columns header-col">
              <h1>
              <p className="proverbe">
              Dans 20 ans, tu seras plus déçu par les choses que tu n'as pas
              faites que par celles que tu auras faites. Alors, sors des
              sentiers battus. Mets les voiles. Explore. Rêve. Découvre.
            </p>
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
