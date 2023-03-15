import { useState } from 'react';

import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

import Selection from '../props/selection';


const Barbecue = () => {
  const [selectionData] = useState([
    {
      id: 1,
      img: 'https://s3.amazonaws.com/circulate.com/assets/images/bbq.jpeg',
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Barbecue",
      name: "Bill Millers BBQ",
    },
    {
      id: 2,
      img: 'https://s3.amazonaws.com/circulate.com/assets/images/bbq.jpeg',
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Barbecue",
      name: "Salt Grass Steakhouse",
    },
  ])
    return (
      <div id="restuarant">

      <Navbar />
      <Banner />

      <h4 className='cuisine-title'>Barbecue</h4>

        <Selection
        selection={selectionData}
        key={selectionData.id}
      />
     
    </div>
    );
  }

export default Barbecue;