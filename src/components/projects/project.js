import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Projects:</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Carrate - recipe web app</h3>
                                <p className="info"><span>•</span> <em className="date">1 month project</em></p>
                                <a href="https://carrate.herokuapp.com/">
                                    <img src="https://fontmeme.com/permalink/200625/7548fee49a4e952af37f400aad4fbf01.png" 
                                         alt="netflix-font" border="0" width="200px"/>
                                </a>
                                <p>The project is still in development. Our team worked hard to bring this app to live. 
                                    I have been a part of this great team where I was responsible for API integration 
                                    and app deployement.
                                </p>
                                 
                            </div>
                        </div> {/* item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Maxflix</h3>
                                <p className="info">Video Library<span>•</span> <em className="date">1 month project</em></p>
                                <a href="https://kodiri-maxflix.herokuapp.com/">
                                    <img src="https://fontmeme.com/permalink/200625/6e8754f9b03bd7bd5f2c0d93d765bc0c.png" 
                                         alt="netflix-font" border="0" width="200px"/>
                                </a>
                                <p>
                                    This is personal project based on tecj stack like HTML5, CSS3, JS ES6 and node.js.
                                    Represents a collection of my favourite movie where I learn how web technologies work
                                    in modern way.
                                </p>
                            </div>
                        </div> {/* item end */}
                    </div> {/* main-col end */}
                </div> {/* End Work */}
            </React.Fragment>
        )
    }
}