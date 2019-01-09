import React,{Component} from 'react';
import './carousel.css';
import pic1 from '../../../../img/home/nancyPelosi1.jpeg';
import pic2 from '../../../../img/home/nancyPelosi2.jpeg';
import pic3 from '../../../../img/home/shruti1.jpeg';
import pic4 from '../../../../img/home/shruti2.jpeg';
import pic5 from '../../../../img/home/gopio1.jpg';
import pic6 from '../../../../img/home/gopio2.jpeg';

let pics = [
    {
        'src': pic1,
        'caption': 'Parliament speaker Nancy Pelosi(right)'
    },
    // {
    //     'src': pic2,
    //     'caption': 'caption2'
    // },
    {
        'src': pic3,
        'caption': 'Deputy chief of mission,Embassy of India,Washington DC'
    },
    {
        'src': pic4,
        'caption': 'Congressman Dick Black(middle)'
    },
    {
        'src': pic5,
        'caption': 'GOPIO Virginia welcome event'
    },{
        'src': pic6,
        'caption': 'GOPIO Virginia award function'
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

