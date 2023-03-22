import React from 'react'

const Categories = ({categories, filteredItems}) => {

  return (
    <div className="btn-container">
      {categories.map((category, id)=>{
        return (
          <button 
          type='button'
          className='filter-btn'
          key={id}
          onClick={()=>filteredItems(category) }
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories