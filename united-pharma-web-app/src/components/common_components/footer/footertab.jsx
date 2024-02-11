import React from "react";
import '../footer/footer.css';

const FooterTab = ()=>{

    return(
<>

<div className="footer_main">

    <div className="footer_one_from_left">
        <div className="footer_main_logo">
            
        </div>
        <div className="footer_main_caption">
            Embark on a revolutionary journey with<br></br>
            us-where every drug purchase unfolds<br></br>
            as a novel experience,blending<br></br>
            Innovation with care to reduce your<br></br>
            path to wellness.

<div className="icons">

    <div className="social_media">
    {/* <i class="fa fa-facebook" aria-hidden="true"></i> */}
    </div>

    <div className="social_media">
    {/* <i class="fa fa-twitter" aria-hidden="true"></i> */}
    </div>

    <div className="social_media">
    {/* <i class="fa fa-instagram" aria-hidden="true"></i> */}
    </div>

</div>

        </div>
    </div>


    <div className="footer_two_from_left">
        <div className="footer_two_from_left_title">
            ABOUT US
        </div>
        <div className="footer_two_from_left_body">
           <a href="" className="anchore"> About Company</a><div className="line_spc"></div>
           <a href="" className="anchore">Company Branches</a><div className="line_spc"></div>
           <a href="" className="anchore">Our Shop</a> <div className="line_spc"></div>
           <a href="" className="anchore">Price & Plans</a>
        </div>
    </div>

    <div className="footer_two_from_left">
        <div className="footer_two_from_left_title">
            SUPPORT
        </div>
        <div className="footer_two_from_left_body">
        <a href="" className="anchore"> Blog</a><div className="line_spc"></div>
        <a href="" className="anchore"> FAQ</a><div className="line_spc"></div>
        <a href="" className="anchore"> Team</a><div className="line_spc"></div>
        <a href="" className="anchore"> Contact</a>
        </div>
    </div>

    <div className="footer_three_from_left">
    <div className="footer_three_from_left_title">
    CONTACT
    </div>
    <div className="footer_three_from_left_body_one">
        No.1055, Maradana Road,<div className="address_spc"></div>
        Punchi Borella.
    </div>

    <div className="private_credentials">
<div className="left_icon">
    icon
</div>
<div className="parameter">
0912231315
</div>
    </div>
    <div className="private_credentials">
<div className="left_icon">
    icon
</div>
<div className="parameter">
    upheadoffice@gmail.com
</div>
    </div>
    <div className="private_credentials">
<div className="left_icon">
    icon
</div>
<div className="parameter">
    ww.unitedpharma.lk
</div>
    </div>

    </div>




</div>


</>
    )

}

export default FooterTab;