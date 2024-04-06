import React from 'react'

import PropTypes from 'prop-types'

import './category-card.css'

const CategoryCard = (props) => {
  return (
    <div className="category-card-category-card">
      <img
        alt={props.imageAlt}
        src={props.categoryImg}
        className="category-card-image"
      />
      <span className="category-card-text">{props.name}</span>
    </div>
  )
}

CategoryCard.defaultProps = {
  categoryImg: '/2-1500w.png',
  imageAlt: 'image',
  name: 'ESSENCE',
}

CategoryCard.propTypes = {
  categoryImg: PropTypes.string,
  imageAlt: PropTypes.string,
  name: PropTypes.string,
}

export default CategoryCard
