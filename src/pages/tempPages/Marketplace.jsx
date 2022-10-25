import React from 'react'
import { Link } from 'react-router-dom'
import ListContainer from '../../containers/ListContainer/ListContainer'

const Marketplace = () => {

    const data = [
        {
          heading: "Earn a £5 Amazon Voucher",
          id: 1,
          image:
            "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/market-place%2Famazon-logo.png?alt=media&token=0c9914b9-b020-421c-acaa-e87ff25be8a0",
          isLocked: false,
          overview:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
          skillPoints: 400,
          trophies: 1,
        },
      ];

    return (
        <div>
            <ListContainer title="Marketplace" data={data} />
            
            Marketplace<br/>
            <Link to="/addprize">Add prize</Link><br/>
            <Link to="singleitem" >SingleItem</Link>
        </div>
    )
}

export default Marketplace