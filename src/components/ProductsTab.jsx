import React from "react";
import Cell from "./Cell";
import { getProductsData, updateData } from "../reduxstore/slices/dataSlice";
import { useSelector, useDispatch } from "react-redux";

export default function ProductsData() {
  const productsData = useSelector(getProductsData());
  const dispatch = useDispatch();
  const updateValue = ({ objKey, value, additionalInfo }) => {
    dispatch(updateData({ objKey, value, additionalInfo }));
  };

  if (productsData.length === 0) return <></>;
  
  return (
    <>
    <h1>Products</h1>
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>unit Price</th>
          <th>Tax</th>
          <th>Price with Tax</th>
        </tr>
      </thead>
      <tbody>
        {productsData.map((product, index) => {
          return (
            <tr key={index}>
              <td className={product.productName === null? 'highlight' : ''}>
                <Cell
                  data={product.productName}
                  objKey="productName"
                  additionalInfo={{ productId: product.productId }}
                  updateValue={updateValue}
                />
              </td>
              <td className={product.quantity === null? 'highlight' : ''}>
                <Cell
                  data={product.quantity}
                  objKey="quantity"
                  additionalInfo={{ productId: product.productId }}
                  updateValue={updateValue}
                />
              </td>
              <td className={product.unitPrice === null? 'highlight' : ''}>
                <Cell
                  data={product.unitPrice}
                  objKey="unitPrice"
                  additionalInfo={{ productId: product.productId }}
                  updateValue={updateValue}
                />
              </td>
              <td className={product.tax === null? 'highlight' : ''}>
                <Cell
                  data={product.tax}
                  objKey="tax"
                  additionalInfo={{ productId: product.productId }}
                  updateValue={updateValue}
                />
              </td>
              <td className={product.priceWithTax === null? 'highlight' : ''}>
                <Cell
                  data={product.priceWithTax}
                  objKey="priceWithTax"
                  additionalInfo={{ productId: product.productId }}
                  updateValue={updateValue}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </>
  );
}
