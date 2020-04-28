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
                            <h3 className="title-text">Welcome to My Portfolio!</h3>
                            <h1 className="title-text">I am Anh Nguyen</h1>
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
                                    <p>2018-present: <strong>Freelancer</strong></p>
                                    <p>Run a small business (online shop) and done some business-web-projects.</p>
                                </div>
                            </div>
                            <div className='work-exp'>                                
                                <i className="fas fa-project-diagram" style={{color: '#118AB2'}}></i>
                                <div className='company'>
                                    <p>2017-2018: <strong>FECredit</strong></p>
                                    <p>Reporting & Analysis Specialist (PL/SQL Developer)</p>
                                </div>
                            </div>
                            <div className='work-exp'>                                
                                <i className="fas fa-project-diagram" style={{color: '#118AB2'}}></i>
                                <div className='company'>
                                    <p>2016: <strong>Robert Bosch Engineering</strong></p>
                                    <p>Associate Software Engineer (C++ Developer)</p>
                                </div>
                            </div>
                            <div className='work-exp'>                                
                                <i className="fas fa-project-diagram" style={{color: '#118AB2'}}></i>
                                <div className='company'>
                                    <p>Education: <strong>University of Cincinnati, Ohio, US</strong></p>
                                    <p>Bachelor of Science in Applied Mathematics - Class of 2015</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ==================End Previous Experience============== */}

                {/* ==================Start Technical Knowledge============== */}

                <section className='technical' id='technical_section'>
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
                </section>
                {/* ==================End Technical Knowledge============== */}

                {/* ==================Start About Me============== */}
                <section className='about_me' id='about_me_section'>
                    <div className='row'>
                        <div className='col-12 section-title'>
                            <h1>About Me</h1>
                        </div>
                        <div className='col-12 about-content'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum rutrum dui, in finibus orci. Sed sed sem nec mi convallis fermentum eu sit amet libero. Proin vitae libero mattis, faucibus dolor ut, dignissim lectus. Integer feugiat nibh ac lacus blandit, vitae consectetur urna bibendum. Vestibulum vitae imperdiet libero. Ut a mauris molestie, vestibulum turpis vel, tincidunt ante. Duis ut mauris quis sem efficitur lacinia et ac turpis. Nam libero metus, pharetra vel quam ut, ullamcorper tempus ante. Maecenas ut efficitur justo. Mauris porta sodales ligula, non porttitor nisl pulvinar sed.

                                Phasellus volutpat blandit ipsum eleifend vulputate. Etiam gravida tempus gravida. Sed lectus turpis, sollicitudin ac nunc ac, lacinia viverra velit. Integer quis elit sollicitudin, condimentum mi aliquet, consectetur justo. Integer vitae eros lectus. Praesent faucibus erat lectus, viverra scelerisque sem interdum maximus. Curabitur et ante ante. Pellentesque vel massa ac massa ullamcorper hendrerit sed in velit. Curabitur tincidunt, felis ut facilisis finibus, sem quam ornare nisl, quis tempus lacus dolor sed turpis. Proin rhoncus ultrices porta. Integer eget eros sit amet ante hendrerit auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vel quam non turpis vehicula pharetra non venenatis sapien. Donec orci eros, congue eu nunc nec, pharetra tempus est. Pellentesque efficitur egestas enim in vehicula.

                                Vivamus neque felis, malesuada vitae ornare at, blandit eget lorem. Nunc dapibus risus orci, eget vestibulum nulla luctus viverra. Maecenas lacinia luctus urna. Morbi luctus, turpis ullamcorper porttitor lobortis, nunc augue porttitor ante, eget mollis lacus lorem eu sapien. Sed id odio egestas, mattis metus in, rutrum dui. Curabitur rhoncus non ex eget convallis. Morbi sem urna, molestie eu odio sed, lacinia ultricies diam.</p>
                        </div>
                    </div>
                </section>
                {/* ==================End About Me============== */}

                {/* ==================Start Contact============== */}
                <section className='contact' id='contact_section'>
                    <div className='row'>
                        <div className='col-12 section-title'>
                            <h1>Contact</h1>
                        </div>
                        <div className='col-12 contact_me'>
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
                                <button type='submit' className="btn btn-primary ml-auto">Send</button>  
                            </form>
                        </div>
                    </div>
                </section>
                {/* ==================End Contact============== */}


                {/* ==================Start Footer============== */}
                <section className='footer' id='footer_section'>
                    <div className='col-12 copy-rights'>
                        <div className='contact_details'>                            
                            <h4>Xuân Anh Nguyễn</h4>
                            <p>Mobile <i className="fas fa-mobile-alt"></i> : 0564 715 868</p>
                            <p>Email <i className="far fa-envelope"></i> : nguyenax73@gmail.com</p>                            
                            <p>
                                Copyright © Anh X. Nguyen. Confidential information for hiring process only.
                            </p>
                        </div> 
                    </div>
                </section>
                {/* ==================End Footer============== */}
            </div>
        );
    }
    
};

export default HomePage;