import React from 'react';
import SKILLS_DATA from './skills.data';
import {bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import axios from 'axios';

import './homepage.styles.scss';


//Import Owl Carousel
import Owlcarousel from '../../components/owlcarousel/owlcarousel.component';

import Projects from '../../components/projects/projects.component';

const  styles = {
    bounce: {
        animation: 'y 5s',
        animationName: Radium.keyframes(bounce, 'bounce')
      }
} 

class HomePage extends React.Component {
    constructor (){
        super();
        this.state = {
            skills: SKILLS_DATA,
            isLoading: false,
            name: '',
            email: '',
            phone: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }; 

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    async handleSubmit(e) {
        e.preventDefault();
        const {name, email, phone, message} = this.state;
        this.setState({isLoading: true});
        await axios.post('/api/form', {
            name,
            email,
            phone,
            message
        })
        .then(response => {
            if(response.data.success) {
                
                this.props.history.push('/thankyou');
            } else {
                this.props.history.push('/error'); 
            }
        }) 
        .catch((err) => {
            console.error(err);
        })
    }

    render (){
        return (
            <div className='homepage'>
                {/* ====================Start site banner==================== */}
                <section className='site-banner'>
                    <div className='row'>
                        <div className="col-lg-6 col-12 site-title">
                            <img src="/assets/img/avatar.png" className="rounded-circle img"></img>
                            <h3 className="title-text">Welcome to My Portfolio!</h3>
                            <h1 className="title-text">I am Anh Duc Le</h1>
                            <h4 className="title-text">A Full-stack Web Developer</h4>
                        </div>
                        <div className="col-lg-6 col-md-12 projects_banner">
                            <Owlcarousel />
                        </div>
                    </div>
                </section>
                {/* ====================End site banner==================== */}

                {/* ====================Start projects==================== */}
                <section className='projects' id={'projects_section'}>
                    <div className='row'>
                        <div className='col-md-12 section-title'>
                            <h1>Projects Demo</h1>
                        </div>
                        <div className='col-md-12'>
                            <Projects />
                        </div>
                    </div>
                </section>
                {/* ====================End projects==================== */}

                {/* ==================Start Previous Experience============== */}
                <section className='experience' id={'experience_section'}>
                    <div className='row'>
                        <div className='col-12 section-title'>
                            <h1>Education & Previous ICT Experience</h1>
                        </div>
                        <div className='col-12 exp'>
                            <div className='work-exp'>                                
                                <i className="fas fa-project-diagram" style={{color: '#118AB2'}}></i>
                                <div className='company'>
                                    <p>2019-present: <strong>Freelancer</strong></p>
                                    <p>Build and deploy business-web-projects for customers</p>
                                </div>
                            </div>
                            <div className='work-exp'>                                
                                <i className="fas fa-project-diagram" style={{color: '#118AB2'}}></i>
                                <div className='company'>
                                    <p>2014-2019: <strong>BOSCH</strong></p>
                                    <p>Sofware developer for Car Multimedia project</p>
                                </div>
                            </div>
                            <div className='work-exp'>                                
                                <i className="fas fa-project-diagram" style={{color: '#118AB2'}}></i>
                                <div className='company'>
                                    <p>2013-2014: <strong>W2 Solution</strong></p>
                                    <p>Software Engineer for w2Commerce project</p>
                                </div>
                            </div>
                            <div className='work-exp'>                                
                                <i className="fas fa-project-diagram" style={{color: '#118AB2'}}></i>
                                <div className='company'>
                                    <p>2012-2014: <strong>Lotte Data Communication Company</strong></p>
                                    <p>Software Engineer for Lotte Cinema, Lotte Mart, Lotte Homeshopping projects</p>
                                </div>
                            </div>
                            <div className='work-exp'>                                
                                <i className="fas fa-project-diagram" style={{color: '#118AB2'}}></i>
                                <div className='company'>
                                    <p>Education: <strong>University of Technology, Vietnam</strong></p>
                                    <p>Bachelor of Computer Science, Class 2007</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==================End Previous Experience============== */}

                {/* ==================Start Technical Knowledge============== */}

                {/* <section className='technical' id='technical_section'>
                    <div className='row'>
                        <div className='col-12 section-title'>
                            <h1>Technical Skills</h1>
                        </div>
                        <div className='col-12 skills'> 
                            {this.state.skills.map((skill, index) => (
                                <StyleRoot key={index} >
                                    <div className='tech-skill d-inline-block' style={styles.bounce}>
                                        <i className="fas fa-tags"></i>
                                        <p>{skill}</p>
                                    </div>   
                                </StyleRoot>
                               
                            ))}
                        </div> 
                    </div>
                </section> */}
                {/* ==================End Technical Knowledge============== */}

                {/* ==================Start About Me============== */}
                <section className='about_me' id='about_me_section'>
                    <div className='row'>
                        <div className='col'>
                            <div className='col-12 section-title'>
                                <h1>About Me</h1>
                            </div>
                            <div className='col-12 about-content'>
                                <p>Ambitious problem solver with a passion for online businesses and open-minded developer. </p>
                                <p>Having much experience of creating logical and innovative solutions to complex problems. </p>
                                <p>Keeping interest in technology, mobile applications and user experience. Take responsibility for my own personal development, I am continually evaluating and upgrading my skills so that I stay at the cutting edge of web development. </p>
                                <p>A natural problem solver, who has proven myself by successfully completing projects for IT consultancies, software houses, web design agencies, and IT departments.</p>
                            </div>
                        </div>

                        <div className='col' >
                            <div className='col-12 section-title' >
                                <h1>Technical Skills</h1>
                            </div>
                            <div className='col-12 skills' id='technical_section'> 
                                {this.state.skills.map((skill, index) => (
                                    <StyleRoot key={index} >
                                        <div className='tech-skill d-inline-block' style={styles.bounce}>
                                            <i className="fas fa-tags"></i>
                                            <p>{skill}</p>
                                        </div>   
                                    </StyleRoot>
                                
                                ))}
                            </div> 
                        </div>
                        
                    </div>
                </section>
                {/* ==================End About Me============== */}

                {/* ==================Start Contact============== */}
                <section className='contact' id='contact_section'>
                    <div className="row">                    
                        <div className='col'>
                            <div className='col-12 copy-rights'>
                                <div className='contact_details text-center'>         
                                    <br />
                                    <br />                   
                                    <h4>Lê Đức Anh </h4>
                                    <p>Mobile <i className="fas fa-mobile-alt"></i> : 033.303.7357</p>
                                    <p>Email <i className="far fa-envelope"></i> : manwithcode@live.com</p>                            
                                    <p>
                                        Copyright © Anh Duc Le. Confidential information for hiring process only.
                                    </p>
                                </div> 
                            </div>                
                        </div>
                        <div className='col'>
                            <div className='col-12 section-title'>
                                    <h1>Contact</h1>
                                </div>
                            <div className='col-12 contact_me' >
                                    <form className='col-6' onSubmit={this.handleSubmit}>
                                        <div className='form-group'>
                                            <label htmlFor='name'>Name:</label>
                                            <input type='text' className='form-control' 
                                            id='name' name='name' onChange={this.handleChange}></input>
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='email'>Email:</label>
                                            <input type='email' className='form-control' 
                                            id='email' name='email' onChange={this.handleChange}></input>
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='phone'>Phone Number:</label>
                                            <input type='number' className='form-control' 
                                            id='phone' name='phone' onChange={this.handleChange}></input>
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='message'>Message:</label>
                                            <textarea type='text' className='form-control' 
                                            id='message' name='message' rows='5' onChange={this.handleChange}></textarea>
                                        </div>  
                                        <button type='submit' className="btn btn-primary ml-auto"
                                            disabled={this.state.isLoading}>
                                                {this.state.isLoading ? "Loading..." : "Send"}
                                        </button>  
                                    </form>
                                </div>                                    
                        </div>
                    </div>                    
                </section>
                {/* ==================End Contact============== */}


                
            </div>
        );
    }
    
};

export default HomePage;
