import '../assets/css/form.css';
import {Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ShoppingItem({shopName}) {
    
  return (
    <div>
        {/*  <Card style={{ width: '18rem' }}>
        <Card.Header className='text-align-left'>
            <Form>
                    {[''].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                    <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={` ${type}`}
                    />

                    </div>
                ))}
            </Form>

            {shopName}</Card.Header>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      <Card.Title>Medicine</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}
        <Container>
              <Row className="text-uppercase-heading" >
                <Col xs lg="1">Select Item</Col>
                <Col xs lg="5">Discription</Col>
                <Col xs lg="2">Price</Col>
                <Col xs lg="2">Qty</Col>
                <Col xs lg="2">Subtotal</Col>
              </Row>
              <Row className="text-heading" >
                <Col xs lg="1">
                    <div className="cart-header-checkbox" style={{ middle: '100px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <label className="comet-v2-checkbox">
                          <span className="comet-v2-checkbox-icon">
                            <span className="comet-v2-checkbox-circle"></span>
                          </span>
                          <input type="checkbox" className="comet-v2-checkbox-input" value={true} />
                        </label>
                      </div>
                    </div>
                  </Col>

                <Col xs lg="5" className="img-holder item">
                  <td>
                  <a
                    href="https://www.healthguard.lk/osartil-50mg-tab-100s"
                    title="OSARTIL 50MG TAB 100S"
                    tabIndex="-1"
                    className="product-item-photo"
                  >
                  <img
                    className="img-fluid product-image-photo"
                    src="https://www.healthguard.lk/pub/media/catalog/product/cache/3a98496dd7cb0c8b28c4c254a98f915a/p/h/pharmadefault_1_1_3.jpg"
                    alt="OSARTIL 50MG TAB 100S"
                  />
                  </a>
                  </td>             
                  <td> 
                    <div className="product-item-details">
                      <strong className="product-item-name">
                        <a className="product-title" href="https://www.healthguard.lk/osartil-50mg-tab-100s">
                          OSARTIL 50MG TAB 100S
                        </a>
                      </strong>
                    </div>
                  </td>
                </Col>

                <Col xs lg="2">
                    <span className="price-excluding-tax" data-label="Excl. Tax">
                      <span className="cart-price">
                        <span className="price">LKR10.50</span>
                      </span>
                    </span>
                </Col>
                <Col xs lg="2" className="qty">
                  <input
                    id="cart-400936-qty"
                    name="cart[400936][qty]"
                    data-cart-item-id="032305"
                    value="1"
                    type="number"
                    size="4"
                    title="Qty"
                    className="form-control input-text qty"
                    data-validate="{required:true,'validate-greater-than-zero':true}"
                    data-role="cart-item-qty"
                  />
                </Col>

                <Col xs lg="2" className="col price subtotal">
                    <span className="price-excluding-tax" data-label="Excl. Tax">
                        <span className="cart-price">
                          <span className="price">LKR10.50</span>
                        </span>
                      </span>
                </Col>

              </Row>
        </Container>
      
      
      
      
      {/*<tbody className="cart item">
        <tr className="repeater-block item-info">
        <td className = "Select-Item">
        <div className="cart-header-checkbox" style={{ top: '50px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <label className="comet-v2-checkbox">
                <span className="comet-v2-checkbox-icon">
                  <span className="comet-v2-checkbox-circle"></span>
                </span>
                <input type="checkbox" className="comet-v2-checkbox-input" value={true} />
            </label>
            </div>
          </div>
        </td>
        <td data-th="Item" className="img-holder item">
          <a
            href="https://www.healthguard.lk/osartil-50mg-tab-100s"
            title="OSARTIL 50MG TAB 100S"
            tabIndex="-1"
            className="product-item-photo"
          >
            <img
              className="img-fluid product-image-photo"
              src="https://www.healthguard.lk/pub/media/catalog/product/cache/3a98496dd7cb0c8b28c4c254a98f915a/p/h/pharmadefault_1_1_3.jpg"
              alt="OSARTIL 50MG TAB 100S"
            />
          </a>
        </td>
        <td className="text-left desc">
          <div className="product-item-details">
            <strong className="product-item-name">
              <a className="product-title" href="https://www.healthguard.lk/osartil-50mg-tab-100s">
                OSARTIL 50MG TAB 100S
              </a>
            </strong>
          </div>
        </td>
        <td className="price" data-th="Price">
          <span className="price-excluding-tax" data-label="Excl. Tax">
            <span className="cart-price">
              <span className="price">LKR10.50</span>
            </span>
          </span>
        </td>
        <td className="qty" data-th="Qty">
          <input
            id="cart-400936-qty"
            name="cart[400936][qty]"
            data-cart-item-id="032305"
            value="1"
            type="number"
            size="4"
            title="Qty"
            className="form-control input-text qty"
            data-validate="{required:true,'validate-greater-than-zero':true}"
            data-role="cart-item-qty"
          />
        </td>
        <td className="col price subtotal" data-th="Subtotal">
          <span className="price-excluding-tax" data-label="Excl. Tax">
            <span className="cart-price">
              <span className="price">LKR10.50</span>
            </span>
          </span>
        </td>
      </tr>
  </tbody>*/}
     
     <Container>
              <Row className="button-holder" >
                <Col md={{ span: 5, offset: 4}} >                
                  <Button className= "clearShoppingCart" type="button" class="btn btn-success"> Clear Shopping Cart </Button>                
                </Col>
                <Col md="auto" >
                  <Button className='updateShoppingCart' type="button" class="btn btn-success">Update Shopping Cart</Button>
                </Col>
              </Row>
      </Container>
     

  

    </div>


  );
}

export default ShoppingItem;