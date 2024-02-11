import React, { useState } from 'react';
import '../../components/dataTable/dataTable.css';

const DataTable = () => {
  const [data, setData] = useState([
    { id: 10001, name: 'paracetamol tablets - box (100g)', category: 'Abvie', price: 120 },
    { id: 10002, name: 'cephalexin capsules - box (200g)', category: 'Merck', price: 400 },
    { id: 10003, name: 'tramadol tablets - box (250g)', category: 'Odolo', price: 640 },
    { id: 10004, name: 'alprazolam(Xanax) - box (250g)', category: 'Xanax', price: 880 },
    { id: 10005, name: 'hydroxychloroquine - box (450g)', category: 'pfizer', price: 990 },
    { id: 10006, name: 'sildenafil - box (250g)', category: ' Viagra', price: 220 },
    { id: 10007, name: 'naloxone - box (300g)', category: ' Narcan', price: 380 },
    { id: 10008, name: 'clindamycin capsules - box (200g)', category: '  Cleocin HCl', price:530 },
    { id: 10009, name: 'naloxone tablets box (250g)', category: '  Aleve', price: 310 },
    { id: 10010, name: 'gabapentin capsules box (250g)', category: '  Gabarone', price: 5500 },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (item, quantity) => {
    const newItem = { ...item, quantity };
    setSelectedItems([...selectedItems, newItem]);
  };

  const handleRemoveItem = (item) => {
    const updatedItems = selectedItems.filter(
      (selectedItem) => selectedItem.id !== item.id
    );
    setSelectedItems(updatedItems);
  };

  // Calculate total price
  const totalPrice = selectedItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <div className='main_table'>
      <h2>Product List</h2>

      <table className='table_data'>
        <thead>
          <tr>
            <th className='table_one_headers_id'>Product ID</th>
            <th className='table_one_headers_name'>Drug Name</th>
            <th className='table_one_headers_brand'>Brand Name</th>
            <th className='table_one_headers_uqs'>Unit Price</th>
            <th className='table_one_headers_uqs'>Quantity</th>
            <th className='table_one_headers_uqs'>Select</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>Rs{item.price}</td>
              <td>
                <select onChange={(e) => handleSelectItem(item, parseInt(e.target.value))}>
                  {[1, 2, 3, 4, 5].map((quantity) => (
                    <option key={quantity} value={quantity}>
                      {quantity}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="checkbox"
                  onChange={() => handleSelectItem(item, 1)}
                  checked={selectedItems.some(
                    (selectedItem) => selectedItem.id === item.id
                  )}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className='table_two_header'>Selected Items</h2>
      <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
        <table className='table_data'>
          <thead>
            <tr>
              <th className='select_one_headers_id'>Product ID</th>
              <th className='select_one_headers_name'>Name</th>
              <th className='select_one_headers_brand'>Category</th>
              <th className='select_one_headers_uqs'>Price</th>
              <th className='select_one_headers_uqs'>Quantity</th>
              <th className='select_one_headers_uqs'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>Rs{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button onClick={() => handleRemoveItem(item)} className='remove_btn'>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='total_price'>Total Price: Rs{totalPrice}</div>
    </div>
  );
};

export default DataTable;