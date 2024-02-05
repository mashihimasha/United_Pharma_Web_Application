import React from "react";
import '../wholesale/wholesale.css';
import  { useState, useEffect } from 'react';


const Wholesale =()=>{

    const [data, setData] = useState([
        { id: 100, name: 'Amoxolline', email: 'Box', phone: '50.00' },
        { id: 101, name: 'Paracetamol', email: 'Box', phone: '100.00' },
        { id: 102, name: 'Dexa', email: 'Box', phone: '200.00' },
        { id: 103, name: 'Pyridoxin', email: 'Box', phone: '175.00' },
        { id: 104, name: 'Azythromycin', email: 'Box', phone: '115.00' },
        { id: 105, name: 'Betadin', email: 'Bottle', phone: '127.00' },
        { id: 106, name: 'Panadiene', email: 'Box', phone: '175.00' },
        { id: 107, name: 'Cephalexin', email: 'Box', phone: '65.00' },
        { id: 108, name: 'Metformin', email: 'Box', phone: '15.00' },
        { id: 109, name: 'Citrazin', email: 'Box', phone: '205.00' },
        { id: 110, name: 'Xanax', email: 'Box', phone: '325.00' },
        { id: 110, name: 'Augmentin', email: 'Box', phone: '54.00' },
        { id: 111, name: 'Gabapentin', email: 'Box', phone: '1000.00' },
      ]);

      const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    // Update filteredData when data changes or searchTerm changes
    const filtered = data.filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to the first page when the search term changes
  }, [data, searchTerm]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

    return(
        <>
            <div className="navbar_wholesale">

            <div className="navbar_company_logo"></div> 

            <div className="navbar_company_name">
                <b>UNITED PHARMA</b>
            <div className="subtitle">The Health Shop</div>  
            </div> 
            
            <div className="slogan"><i>"A novel experience on your drug purchase"</i></div>

            <div className="quotation_navbar">
                <button className="quote">QUOTATION</button>
                </div>

            <div className="navbar_logout">
            <button className="lgt_btn">LOGOUT</button>
                </div>


            </div>

            <div className="body_wholesale">
                
            <div className="spc"></div>
             <div className="table_title">
                <b>WHOLESALE PRODUCT INFORMATION</b>
             </div>


            <div id="table_body_main">

            <input
        className="search"
        type="text"
        placeholder="Find Your Item"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="table_border" >
        <thead>
          <tr>
            <th className="theader">Item Code</th>
            <th className="theader"> Drug Name</th>
            <th className="theader">Selling Unit</th>
            <th className="theader">Unit Price(Rs)</th>
          </tr>
        </thead>
        <tbody className="table_border">
          {currentItems.map((item) => (
            <tr key={item.id}>
              <td >{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button className="pagination_button"
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              style={{
                backgroundColor: pageNumber === currentPage ? '#4CAF50' : 'white',
                color: pageNumber === currentPage ? 'white' : 'black',
              }}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
        
            </div>



            </div>

            <div className="footer_wholesale">
                footer here common component
            </div>
            <div className="bottom_footer">bottom line common component</div>

</>
    )
}
export default Wholesale;