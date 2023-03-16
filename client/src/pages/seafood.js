import { useState } from 'react';

import Selection from '../props/selection';


const Seafood = () => {
  const [selectionData] = useState([
    {
      _id: 1,
      img: 'https://s3.amazonaws.com/circulate.com/assets/images/seafood.jpeg',
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Seafood",
      name: "Goggi Street",
    },
    {
      _id: 2,
      img: 'https://s3.amazonaws.com/circulate.com/assets/images/seafood.jpeg',
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Seafood",
      name: "Don Pedro's Too",
    },
  ])
  return (
    <div className="cuisine-gallery">
      <h4 className='cuisine-title'>Seafood</h4>

      <Selection
        selection={selectionData}
      />

    </div>
  );
}

export default Seafood;