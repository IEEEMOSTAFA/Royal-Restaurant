import React, { useEffect, useState } from 'react'
import SectionTittle from '../../components/SectionTittle/SectionTittle'
import MenuItem from '../../Shared/MenuItem/MenuItem';

export default function PopularMenu() {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(Items => Items.category === 'popular' || Items.category === 'salad');
            setMenu(popularItems)
        })
    }, [])
  return (
    <div>
        <section>
            <SectionTittle
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
            ></SectionTittle>




            <div className='grid md:grid-cols-2 gap-4 '>
                {
                    menu.map(item => (
                        <MenuItem key={item._id} item={item}>
                        
                        </MenuItem>
                        
                    ))
                }
            </div>
        </section>
      
    </div>
  )
}
