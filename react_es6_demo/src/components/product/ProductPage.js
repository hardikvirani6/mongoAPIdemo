import React, {PropTypes} from "react";
import * as productAction from '../../actions/productAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ProductList from './ProductList';
import {browserHistory} from 'react-router';

class ProductPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage= this.redirectToAddCoursePage.bind(this);

    this.state = {
      product: Object.assign({}, props.product)
    };
  }

  redirectToAddCoursePage(){
    browserHistory.push('/products');
  }


  render() {
    const {product} = this.props;

    return (
      <div className="jumbotron">
        <h2>Product</h2>
        <input type="submit"
               value="Add New Product"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <ProductList product={product} />
      </div>
    );
  }
}

ProductPage.propTypes = {
  product: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps) {
  return{
    product: state.product
  };
}

function mapDispatchToProps(dispatch) {
  return{
    actions: bindActionCreators(productAction,dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
