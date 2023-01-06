// import './App.css';
import { useEffect, useState } from 'react';
import './Index.css'

import MainTour from './components/MainTour';

function App() {
  // const DataUrl = 

  const[tours,settour] = useState([])


  function Deletetours(id){
    const onedelete = tours.filter((tour)=> tour.id !== id);
    settour(onedelete)
  }

  


  useEffect(()=>{
    const getTour = async ()=>{
      const responce = await fetch(`https://course-api.com/react-tours-project`);
      const tours = await responce.json();
      settour(tours);
    }
      getTour();
  },[])



  return (
    <main>
    <MainTour tours={tours} Deletetours= {Deletetours} />
    </main>
  );
}

export default App;
