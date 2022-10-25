import React from 'react'
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
        }
      ];

    return (
      <ListContainer title="Marketplace" data={data} />
    )
}

export default Marketplace