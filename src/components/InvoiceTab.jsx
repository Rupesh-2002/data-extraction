import React from "react";
import Cell from "./Cell";
import "./InvoiceTab.css";
import { useDispatch, useSelector } from "react-redux";
import { getInvoicesData, updateData } from "../reduxstore/slices/dataSlice";

export default function InvoiceTab() {
  const invoicesData = useSelector(getInvoicesData());
  const dispatch = useDispatch();
  const updateValue = ({ objKey, value, additionalInfo }) => {
    dispatch(updateData({ objKey, value, additionalInfo }));
  };
  

  if (invoicesData.length === 0) {
    return <></>;
  }
  return (
    <>
    <h1>Invoices</h1>
    <table>
      <thead>
        <tr>
          <th>Serial Number</th>
          <th>Customer Name</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Tax</th>
          <th>Total Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {invoicesData.map((invoice, index) => {
          return (


            <tr key={index}>
              <td className={invoice.serialNumber === null ? 'highlight' : ''}>
                <Cell
                  data={invoice.serialNumber}
                  objKey="serialNumber"
                  additionalInfo={{
                    productId: invoice.productId,
                    customerId: invoice.customerId,
                  }}
                  updateValue={updateValue}
                />
              </td>
              <td className={invoice.customerName === null? 'highlight' : ''}>
                <Cell
                  data={invoice.customerName}
                  objKey="customerName"
                  additionalInfo={{
                    productId: invoice.productId,
                    customerId: invoice.customerId,
                  }}
                  updateValue={updateValue}
                />
              </td>
              <td className={invoice.productName === null? 'highlight' : ''}>
                <Cell
                  data={invoice.productName}
                  objKey="productName"
                  additionalInfo={{
                    productId: invoice.productId,
                    customerId: invoice.customerId,
                  }}
                  updateValue={updateValue}
                />
              </td>
              <td className={invoice.quantity === null? 'highlight' : ''}>
                <Cell
                  data={invoice.quantity}
                  objKey="quantity"
                  additionalInfo={{
                    productId: invoice.productId,
                    customerId: invoice.customerId,
                  }}
                  updateValue={updateValue}
                />
              </td>
              <td className={invoice.tax === null ? 'highlight' : ''}>
                <Cell
                  data={invoice.tax}
                  objKey="tax"
                  additionalInfo={{
                    productId: invoice.productId,
                    customerId: invoice.customerId,
                  }}
                  updateValue={updateValue}
                />
              </td>
              <td className={invoice.totalAmount === null? 'highlight' : ''}>
                <Cell
                  data={invoice.totalAmount}
                  objKey="totalAmount"
                  additionalInfo={{
                    productId: invoice.productId,
                    customerId: invoice.customerId,
                  }}
                  updateValue={updateValue}
                />
              </td>
              <td className={invoice.date === null? 'highlight' : ''}>
                <Cell
                  data={invoice.date}
                  objKey="data"
                  updateValue={updateValue}
                  additionalInfo={{
                    productId: invoice.productId,
                    customerId: invoice.customerId,
                  }}
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
