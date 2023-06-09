import React from 'react'

const Menu = ({menuItems}) => {
  return (
    <div className='section-centre'>
   {menuItems.map((menuItem)=>{
    const{id, price, title, img, desc} = menuItem
    return (
        <article key={id} className='menu-item'>
        <img src={img} alt={title} className='photo'/>
        <div className='item-info'>
    <header>
        <h4>{title}</h4>
        <h4>${price}</h4>
    </header>
    <p>{desc}</p>
  </div>
        </article>
    )
   })}
    </div>
  )
}

export default Menu