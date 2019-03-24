import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ProductListRow = ({product}) => {
  return(
    <tr>
      <td><Link to={'/products/' + product._id}>Delete</Link></td>
      <td><Link to={'/products/' + product._id}>Update</Link></td>
      <td>{product.name}</td>
      <td>{product.date}</td>
      <td>{product.price}</td>
      <td>{product.__v}</td>
    </tr>
  );
};

ProductListRow.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListRow;
