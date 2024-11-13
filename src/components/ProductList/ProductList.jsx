/* eslint-disable react/prop-types */
import s from '../ProductList/ProductList.module.css'

const ProductList = ({products}) => {
  return (
    <div className={s.block}>
      <h2>
        {products
        .filter(pro => pro.inStock)
        .map((product, index) => <p key={index}>{product.name} / ${product.price} </p>)
        }
      </h2>
    </div>
  )
}

export default ProductList