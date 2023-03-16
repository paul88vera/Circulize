import { useState } from 'react';

import Selection from '../props/selection';


const Italian = () => {
  const [selectionData] = useState([
    {
      _id: 1,
      img: 'https://s3.amazonaws.com/circulate.com/assets/images/italian.jpeg',
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Italian",
      name: "Olive Garden",
    },
    {
      _id: 2,
      img: 'https://s3.amazonaws.com/circulate.com/assets/images/italian.jpeg',
      alt: "This is an alt image",
      city: "San Antonio",
      cuisine: "Italian",
      name: "Little Ceasar's Pizza",
    },
  ])
  return (
    <div className="cuisine-gallery">
      <h4 className='cuisine-title'>Italian Food</h4>

      <Selection
        selection={selectionData}
      />

    </div>
  );
}

export default Italian;