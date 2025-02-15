import './App.css';
import cat from './assets/images/cat.jpg';
import cat2 from './assets/images/cat@2x.png';
import cat3 from './assets/images/cat@3x.png';



function App() {
    return (
        <div className="App">
            <p>Hello, Retina &#128075;</p>
             {/*<div className={'bg'}></div>*/}
             {/*<img src={cat} srcSet={`${cat2} 2x, ${cat3} 3x`} alt="nature"/>*/}
            <picture>
                <source srcSet={`${cat} 1x, ${cat2} 2x, ${cat3} 3x`}/>
                <img src={cat} alt="nature"/>
            </picture>

            <figure>
                <img src={cat} srcSet={`${cat2} 2x, ${cat3} 3x`} alt="nature"/>
                <figcaption>ЭТО КОТ</figcaption>
            </figure>
        </div>
    );
}

export default App;


