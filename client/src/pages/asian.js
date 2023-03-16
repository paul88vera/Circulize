import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

import Selection from '../props/selection';
import { useState } from 'react';


const Asian = () => {
  const [selectionData] = useState([
    {
      _id: 1,
      img: 'https://s3.amazonaws.com/circulate.com/assets/images/asian.jpeg',
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Asian",
      name: "Golden Wok",
    },
    {
      _id: 2,
      img: 'https://s3.amazonaws.com/circulate.com/assets/images/asian.jpeg',
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Asian",
      name: "Panda Express",
    },
  ])
  return (
    <div className="cuisine-gallery">
      <Navbar />
      <Banner />
      <h4 className='cuisine-title'>Asian Food</h4>

      <Selection
        selection={selectionData}
      />

    </div>
  );
}

export default Asian;