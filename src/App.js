// import './App.css';
import { useEffect, useState } from 'react';
import './Index.css'

import MainTour from './components/MainTour';

function App() {
  const DataUrl = `https://course-api.com/react-tours-project`

  const[tours,settour] = useState([])

  const getTour = async ()=>{
    const responce = await fetch(DataUrl);
    const tours = await responce.json();
    settour(tours);
  }
useEffect(()=>{
  getTour()
},[])

  function Deletetours(id){
    const onedelete = tours.filter((tour)=> tour.id !== id);
    settour(onedelete)
  }


  return (
    <main>
    <MainTour tours={tours} Deletetours= {Deletetours} />
    </main>
  );
}

export default App;
