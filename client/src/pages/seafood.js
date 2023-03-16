import { useState } from 'react';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

import Selection from '../props/selection';


const Seafood = () => {
  const [selectionData] = useState([
    {
      id: 1,
      img: 'https://s3.amazonaws.com/circulate.com/assets/images/seafood.jpeg',
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Seafood",
      name: "Goggi Street",
    },
    {
      id: 2,
      img: 'https://s3.amazonaws.com/circulate.com/assets/images/seafood.jpeg',
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Seafood",
      name: "Don Pedro's Too",
    },
  ])
    return (
      <div className="cuisine-gallery">
        <Navbar />
        <Banner />
        <h4 className='cuisine-title'>Seafood</h4>

        <Selection
        selection={selectionData}
        key={selectionData.id}
      />
        
      </div>
    );
  }

export default Seafood;