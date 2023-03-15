import { useState } from 'react';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

import Selection from '../props/selection';


const Italian = () => {
  const [selectionData] = useState([
    {
      id: 1,
      img: 'https://s3.amazonaws.com/circulate.com/assets/images/italian.jpeg',
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Italian",
      name: "Olive Garden",
    },
    {
      id: 2,
      img: 'https://s3.amazonaws.com/circulate.com/assets/images/italian.jpeg',
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Italian",
      name: "Little Ceasar's Pizza",
    },
  ])
    return (
      <div className="cuisine-gallery">
        <Navbar />
        <Banner />
        <h4 className='cuisine-title'>Italian Food</h4>

        <Selection
        selection={selectionData}
        key={selectionData.id}
      />
        
      </div>
    );
  }

export default Italian;