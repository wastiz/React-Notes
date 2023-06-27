import { useEffect, useState, useCallback, useMemo} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     componentDidMount() {
//         document.title = `Slide: ${this.state.slide}`;
//     }

//     componentDidUpdate() {
//         document.title = `Slide: ${this.state.slide}`;
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }


const totalizer = (num) => {
    console.log('counting..');
    return num + 10;
}
const Slider = (props) => {

    const [slide, setSlide] = useState(0);
    function changeSlide(i) {
        setSlide(slide + i);
    }

    const [autoplay, setAutoplay] = useState(false);
    function toggleAutoplay () {
        setAutoplay(!autoplay);
    }

    useEffect(() => {
        document.title = `Slide: ${slide}`;
    })

    const getSomeImages = useCallback(() => {
        console.log('fetching');
        return [
            'https://static.toiimg.com/photo/75503656.cms', 
            'https://images.theconversation.com/files/405333/original/file-20210609-14808-1kzzyhj.png?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
        ]
    }, [])

    const totalSlides = useMemo(() => {
        return totalizer(slide);
    }, [slide])

    const style = useMemo(() => ({
        color: slide > 4 ? 'red' : 'green',
    }), [slide])

    useEffect(() => {
        console.log('styled')
    }, [style])
    return (
        <Container>
            <div className="slider w-50 m-auto">
                

                <Slide getSomeImages={getSomeImages}/>

                <div className="text-center mt-5">Active slide {slide} <br/> 
                {autoplay ? 'auto' : null}
                </div>
                <div className="text-center mt-5">{`Total slides: ${totalSlides}`}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImages());
    }, [getSomeImages]);

    return (
        <>
            {images.map((url, i) => <img className="d-block w-100" src={url} alt="slide" key={i}/>)}
        </>
    )
}


function App() {
  return (
        <Slider/>
  );
}

export default App;
