import React from 'react';
import FileUpload from './components/FileUpload';
import InvoiceTab from './components/InvoiceTab';
import ProductsTab from './components/ProductsTab'
import CustomersTab from './components/CustomersTab';

function App() {
  
  return (
    <>
        <FileUpload></FileUpload>
        <InvoiceTab></InvoiceTab>
        <ProductsTab></ProductsTab>
        <CustomersTab></CustomersTab>

    </>
  )
}

export default App
