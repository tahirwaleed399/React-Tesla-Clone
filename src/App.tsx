 
import './App.css';
import Section from './Components/section';
import useScrollSnap from 'react-use-scroll-snap';
import { useRef } from 'react';
import Navbar from './Components/navbar';
import { Car } from './Interfaces/car';
import { useSelector } from 'react-redux';

function App() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
  const car:Car[] = useSelector((state : any)=> state.car);


 
  return (
    <div>


      <Navbar></Navbar>
      <div ref={scrollRef}>

{/* <Section imageName="model-3.jpg"></Section>
<Section  imageName="solar-panel.jpg"></Section>
<Section  imageName="solar-roof.jpg"></Section>
<Section  imageName="model-y.jpg"></Section>
<Section  imageName="model-x.jpg"></Section>
<Section  imageName="model-s.jpg"></Section> */}
{
  car && car.map((car:Car)=> {
    return(
<Section key={car.id} description={car.description} title={car.title} image={car.image}></Section>
      
    )
  })
}
      </div>

    </div>
  );
}

export default App;
 
// 80 masron , 80 chno