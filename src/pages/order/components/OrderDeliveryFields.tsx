import ProductCard from './ProductCard';
import { useStyles } from '../styles';
import { Order } from '../types';
import { PRODUCTS } from '../../../constants';
import { useEffect, useRef, useState } from 'react';
import React from 'react';

interface PropTypes {
  handleChange: (e: any) => void;
  values: Order;
}
const OrderDeliveryFields: React.FC<PropTypes> = ({ handleChange, values }) => {
  const productRef = useRef(null);
  const classes = useStyles();
  const [productEditing, setProductEditing] = useState<number | null>(null);

  const handleClickEvent = (e: any) => {
    //@ts-ignore
    if (productRef?.current && !productRef?.current.contains(e.target)) {
      setProductEditing(null)
    }
  };
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickEvent);
  }, []);

  return (
    <>
      <h1>Select a flavor</h1>
      <div className={classes.products} ref={productRef}>
        {PRODUCTS.map((product, i) => (
          <ProductCard
            key={'product-' + i}
            product={product}
            isEditing={productEditing === product.id}
            onClick={() => {
              setProductEditing(product.id);
            }}
          />
        ))}
      </div>
    </>
  );
};
export default OrderDeliveryFields;
