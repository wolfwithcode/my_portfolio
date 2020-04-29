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
                            <a href='https://mayin3d.herokuapp.com/'><img alt="printer3d" className="img" src= {'assets/img/printer3d.jpg'}/></a>  
                            <a href='https://wolfwithcode.github.io/beautifulPortfolio/'><img alt="simpleportfolio" className="img" src= {'assets/img/simpleportfolio.png'}/></a>  
                            <a href='https://flamboyant-dijkstra-a8c3ab.netlify.app/'><img alt="todolist" className="img" src= {'assets/img/todolist.png'}/></a>  
                            <a href='https://myhomestay.netlify.app/'><img alt="img4" className="myhomestay" src= {'assets/img/myhomestay.png'}/></a>  
                            <a href='https://lets-travel-2020.herokuapp.com/'><img alt="img5" className="letstravel" src= {'assets/img/letstravel.png'}/></a>  
                            <a href='https://wolfwithcode.github.io/banhmyshop/'><img alt="img6" className="banhmyshop" src= {'assets/img/banhmyshop.png'}/></a>  
                        </OwlCarousel>  
                    </div>                   
                </div>                 
            </div>   
        )  
    }  
}  
        
  
export default Owlcarousel  