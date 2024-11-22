import React from "react";
import Cell from "./Cell";
import { getCustomersData, updateData } from "../reduxstore/slices/dataSlice";
import { useSelector, useDispatch } from "react-redux";

export default function CustomersTab() {
  const customersData = useSelector(getCustomersData());
  const dispatch = useDispatch();
  const updateValue = ({ objKey, value, additionalInfo }) => {
    dispatch(updateData({ objKey, value, additionalInfo }));
  };

  if (customersData.length === 0) return <></>;
  return (
    <>
    <h1>Customers</h1>
    <table>
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Phone Number</th>
          <th>Total Purchase Amount</th>
        </tr>
      </thead>
      <tbody>
        {customersData.map((customer, index) => {
          return (
            <tr key={index}>
              <td className={customer.customerName === null? 'highlight' : ''}>
                <Cell
                  data={customer.customerName}
                  objKey="customerName"
                  additionalInfo={{ customerId: customer.customerId }}
                  updateValue={updateValue}
                />
              </td>
              <td className={customer.phoneNumber === null? 'highlight' : ''}>
                <Cell
                  data={customer.phoneNumber}
                  objKey="phoneNumber"
                  additionalInfo={{ customerId: customer.customerId }}
                  updateValue={updateValue}
                />
              </td>
              <td className={customer.totalPurchaseAmount === null? 'highlight' : ''}>
                <Cell
                  data={customer.totalPurchaseAmount}
                  objKey="totalPurchaseAmount"
                  additionalInfo={{ customerId: customer.customerId }}
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
