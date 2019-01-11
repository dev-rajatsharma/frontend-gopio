import React,{Component} from 'react';
import './carousel.css';
import pic1 from '../../../../img/home/carousel/pic1.jpg';
import pic2 from '../../../../img/home/carousel/pic2.jpg';
import pic3 from '../../../../img/home/carousel/pic3.jpeg';
import pic4 from '../../../../img/home/carousel/pic4.jpg';
import pic5 from '../../../../img/home/carousel/pic5.jpeg';
import pic6 from '../../../../img/home/carousel/pic6.jpg';
import pic7 from '../../../../img/home/carousel/pic7.jpg';
import pic8 from '../../../../img/home/carousel/pic8.jpg';
import pic9 from '../../../../img/home/carousel/pic9.jpg';
import pic10 from '../../../../img/home/carousel/pic10.jpg';
import pic11 from '../../../../img/home/carousel/pic11.jpg';
import pic12 from '../../../../img/home/carousel/pic12.jpeg';
import pic13 from '../../../../img/home/carousel/pic13.jpeg';
import pic14 from '../../../../img/home/carousel/pic14.jpeg';
import pic15 from '../../../../img/home/carousel/pic15.jpeg';
import pic16 from '../../../../img/home/carousel/pic16.jpg';
import pic17 from '../../../../img/home/carousel/pic17.jpeg';
import pic18 from '../../../../img/home/carousel/pic18.jpeg';
import pic19 from '../../../../img/home/carousel/pic19.jpeg';

let pics = [
    {
        'src': pic1,
        'caption': ''
    },
    {
        'src': pic2,
        'caption': ''
    },
    {
        'src': pic3,
        'caption': ''
    },
    {
        'src': pic4,
        'caption': ''
    },
    {
        'src': pic5,
        'caption': ''
    },
    {
        'src': pic6,
        'caption': ''
    },
    {
        'src': pic7,
        'caption': ''
    },
    {
        'src': pic8,
        'caption': ''
    },
    {
        'src': pic9,
        'caption': ''
    },
    {
        'src': pic10,
        'caption': ''
    },
    {
        'src': pic11,
        'caption': ''
    },
    {
        'src': pic12,
        'caption': ''
    },
    {
        'src': pic13,
        'caption': ''
    },
    {
        'src': pic14,
        'caption': ''
    },
    {
        'src': pic15,
        'caption': ''
    },
    {
        'src': pic16,
        'caption': ''
    },
    {
        'src': pic17,
        'caption': ''
    },
    {
        'src': pic18,
        'caption': ''
    },
    {
        'src': pic19,
        'caption': ''
    },
]

export default class Corousel extends Component{
    // static defaultProps = {
    //     corouselItems : [
    //         {path: '../../../../img/home/nancyPelosi1.jpeg'},
    //         {path: '../../../../img/home/nancyPelosi2.jpeg'},
    //     ]
    // }
    // getImages = async()=>{
    //     let {corouselItems} = this.props;
    //     let pic1 = await import(corouselItems[0]);
    //     let pic2 = await import(corouselItems[1]);
    // }
    renderCarouselContent=()=>{
        return pics.map((item,index)=>{
            let className = index===0 ? 'carousel-item active' : 'carousel-item'
            return (
                <div className={className}>
                        <img className="d-block w-100" src={item.src} alt="First slide" onClick={this.openPoster}/>
                        <div class="carousel-caption d-none d-md-block">
                            {/* <h5>heading</h5> */}
                            <small className='carousel-caption-text'>{item.caption}</small>
                        </div>
                    </div>
            )
        })
    }
    openPoster=(e)=>{
        console.log(e.target.src)
        window.open(e.target.src)
    }
    render(){
        return(
            <div id="carouselExampleIndicators" className="carousel slide w-50" data-ride="carousel">
                {/* <ol className="carousel-indicators"> */}
                    {/* <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li> */}
                    {/* <li data-target="#carouselExampleIndicators" data-slide-to="1"></li> */}
                    {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
                {/* </ol> */}
                <div className="carousel-inner">
                    {this.renderCarouselContent()}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

