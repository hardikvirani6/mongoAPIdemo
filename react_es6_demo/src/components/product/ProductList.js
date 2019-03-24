import React, {PropTypes} from 'react';
import ProductListRow from './ProductListRow';

const ProductList = ({product}) => {
  return(
    <table className="table">
      <thead>
      <tr>
        <th>Delete</th>
        <th>Update</th>
        <th>Name</th>
        <th>Date</th>
        <th>price</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      {product.map(product =>
        <ProductListRow product={product} key={product._id} />
      )}
      </tbody>
    </table>
  );
};

ProductList.propTypes = {
  product : PropTypes.array.isRequired
};

export default ProductList;
