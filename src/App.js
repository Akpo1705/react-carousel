import './App.css';
import { Carousel } from './components/carousel';

import im1 from './images/01.jpg'
import im2 from './images/02.jpg'
import im3 from './images/03.jpg'
import im4 from './images/04.jpg'
import im5 from './images/05.jpg'

function App() {

  const images = [
    {src:im1, text:"first img"},
    {src:im2, text:"second image"},
    {src:im3, text:"thrid image"}, 
    {src:im4, text:"four image"}, 
    {src:im5, text:"five image"}
  ]

  return (
    <div className="App">
        <Carousel images={images} sideSmall={16} sideBig={24}/>
    </div>
  );
}

export default App;
