import React from "react";
import '../quotation/quotationForm.css';
import Swal from 'sweetalert2';
import DataTable from "../../components/dataTable/dataTable";

const Quotation = ()=>{

    const Add=()=>{
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your details have been added",
            showConfirmButton: false,
            timer: 1500
          });
    }
    
    return(
        
        <div className="form">
            {/* Start Form header in Quotation Page  */}
            <div className="form_header">
                <div className="logo_qout"></div>
                <div>
                    <div className="name">
                        <b>UNITED PHARMA HEALTH SHOP</b>
                    </div>
                    <div className="slogan_quot">
                        <i>"Your Wellness is Our Priority"</i>
                    </div>
                </div>
                <div className="quotation_mark">
                    QUOTATION
                </div>
            </div>
            {/* Finish Form header in Quotation Page  */}
        
            {/* Start Quotation Details in Quotation Page   */}
            <div className="user_details_quotation">
                <div className="form_data">
                    <div className="form_data_caption">
                        Buyer Name 
                    </div>
                    <input className="text_fields" type="text" placeholder="Enter Your Name"></input>
                </div>

                <div className="form_data">
                    <div className="form_data_caption">
                        Order Date
                    </div>
                    <input className="text_fields" type="date" placeholder="Enter Date"></input>
                </div>

                <div className="form_data">
                    <div className="form_data_caption">
                        Contact Number
                    </div>
                    <input className="text_fields" type="number" placeholder="Enter Contact Number"></input>
                </div>

                <div className="form_data">
                    <div className="form_data_caption">
                        Delivery Address
                    </div>
                    <input className="text_fields" type="text" placeholder="Enter Your Address"></input>
                </div>

                <div className="form_data">
                    <div className="form_data_caption">
                        Buyer E-Mail
                    </div>
                    <input className="text_fields" type="text" placeholder="Enter Your E-Mail"></input>
                </div>

                <button className="add_button" onClick={()=>Add()}>ADD DETAILS</button>
        
            </div>
            {/* Finish Quotation Details in Quotation Page   */}

            <DataTable/>
            <input className="notes" type="text" placeholder="Notes"></input>
            <button className="submit_btn">SUBMIT QUOTATION</button>

            <div className="quotation_bottom">
                <i>A customer agent of our company will contact you within twenty four hours in order to confirm the purchase
                    and discuss about the convienient delivery schedules.Thank you.
                </i>
            </div>
      
        </div>
    
        
    )
}
export default Quotation;