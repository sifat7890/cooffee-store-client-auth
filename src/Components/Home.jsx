import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './CoffeeCard';

const Home = () => {
   
  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees]=useState(loadedCoffees);

  return (
    <div>
      <h1 className='text-6xl text-center my-20 text-purple-600'>Hot && cold coffee:{coffees.length}</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4'>

        {
          coffees.map(coffee =>
            <CoffeeCard key={coffee._id}
               coffees={coffees} 
               setCoffees={setCoffees}
              coffee={coffee}>
            </CoffeeCard>)

        }
      </div>

    </div>
  )
};

export default Home;