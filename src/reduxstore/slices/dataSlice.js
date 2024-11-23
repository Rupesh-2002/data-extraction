import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  customers: [],
  products: [],
  invoices: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.invoices = action.payload.invoices;
      state.products = action.payload.products;
      state.customers = action.payload.customers;
    });
  },
  reducers: {
    setInvoices: (state, action) => {
      state.invoices = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCustomers: (state, action) => {
      state.customers = action.payload;
    },
    updateData: (state, action) => {
      const { objKey, value, additionalInfo } = action.payload;

      if (additionalInfo.productId) {
        const productId = additionalInfo.productId;
        const product = state.products.find((product) => {
          return product.productId === productId;
        });
        if (product && product[objKey]) {
          product[objKey] = value;
        }
      }

      if (additionalInfo.customerId) {
        const customerId = additionalInfo.customerId;
        const customer = state.customers.find((customer) => {
          return customer.customerId === customerId;
        });
        if (customer && customer[objKey]) {
          customer[objKey] = value;
        }
      }

      const productId = additionalInfo.productId,
        customerId = additionalInfo.customerId;
      if (productId && customerId) {
        state.invoices.forEach((invoice) => {
          if (
            invoice.customerId === customerId &&
            invoice.productId === productId
          ) {
            invoice[objKey] = value;
          }
        });
      } else if (customerId || productId) {
        state.invoices.forEach((invoice) => {
          if (
            invoice.customerId === customerId ||
            invoice.productId === productId
          ) {
            if (invoice[objKey]) invoice[objKey] = value;
          }
        });
      }
    },
  },
});
const addRelation = (data) => {
  data.invoices.forEach((invoice, index) => {
    invoice.productId = index + 1;
    invoice.customerId = 1;
  });
  data.customers.forEach((customer) => {
    customer.customerId = 1;
  });
  data.products.forEach((product, index) => {
    product.productId = index + 1;
  });
};
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
export const fetchData = createAsyncThunk(
  "data/fetchData",
  async (formData) => {
    const response = await axios.post(`${apiUrl}/upload`, formData);
    addRelation(response.data);
    // console.log(response.data)
    return response.data;
  }
);

const getInvoicesData = () => (state) => state.data.invoices;
const getCustomersData = () => (state) => state.data.customers;
const getProductsData = () => (state) => state.data.products;

export { getCustomersData, getProductsData, getInvoicesData };
export const { setInvoices, setProducts, updateProductName, updateData } =
  dataSlice.actions;
export default dataSlice.reducer;
