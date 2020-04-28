import React from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import './owlcarousel.styles.scss';  


export class Owlcarousel extends React.Component {  
    render()  
    {  
        return ( 
            <div className='container-fluid'>     
                <div className='row project_carousel'>
                    <div className='col-lg-12 title'>
                        <p>Past Projects</p>
                    </div>
                    <br />
                    <div className='col-lg-12'>
                        <OwlCarousel items={1} margin={8} autoplay ={true}  
                            className="owl-theme"  
                            loop  
                            >  
                            <a href='https://mayin3d.herokuapp.com/'><img alt="img1" className="img" src= {'assets/img/img1.jpg'}/></a>  
                            <a href='/'><img alt="img2" className="img" src= {'assets/img/img2.jpg'}/></a>  
                            <a href='/'><img alt="img3" className="img" src= {'assets/img/img4.jpg'}/></a>  
                            <a href='/'><img alt="img4" className="img" src= {'assets/img/img3.jpg'}/></a>  
                            <a href='/'><img alt="img5" className="img" src= {'assets/img/img5.jpg'}/></a>  
                            <a href='/'><img alt="img6" className="img" src= {'assets/img/img6.jpg'}/></a>  
                            <a href='/'><img alt="img7" className="img" src= {'assets/img/img7.jpg'}/></a>  
                        </OwlCarousel>  
                    </div>                   
                </div>                 
            </div>   
        )  
    }  
}  
        
  
export default Owlcarousel  