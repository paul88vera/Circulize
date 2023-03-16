import { useState } from 'react';

import Selection from '../props/selection';


const Barbecue = () => {
  const [selectionData] = useState([
    {
      _id: 1,
      img: 'https://s3.amazonaws.com/circulate.com/assets/images/bbq.jpeg',
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Barbecue",
      name: "Bill Millers BBQ",
    },
    {
      _id: 2,
      img: 'https://s3.amazonaws.com/circulate.com/assets/images/bbq.jpeg',
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Barbecue",
      name: "Salt Grass Steakhouse",
    },
  ])
  return (
    <div id="restuarant">
      <h4 className='cuisine-title'>Barbecue</h4>

      <Selection
        selection={selectionData}
      />

    </div>
  );
}

export default Barbecue;