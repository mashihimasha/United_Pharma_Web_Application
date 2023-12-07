import React from 'react';

class ItemDesc extends React.Component {
  render() {
    return (
        
          <div className="product-desc-wrap">
            <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link active"
                  id="description-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#description"
                  role="tab"
                  aria-controls="description"
                  aria-selected="true"
                >
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  id="information-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#information"
                  role="tab"
                  aria-controls="information"
                  aria-selected="false"
                >
                  Additional information
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link"
                  id="review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#review"
                  role="tab"
                  aria-controls="review"
                  aria-selected="false"
                >
                  Reviews (3)
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContentTwo">
              <div
                className="tab-pane fade active show"
                id="description"
                role="tabpanel"
                aria-labelledby="description-tab"
              >
                <div className="product-desc-content">
                  
                  <h4 className="title">HERBION NATURALS COUGH SYRUP :</h4>
                  <ul className="product-desc-list list-wrap">
                    <li>Throat Syrup: Relieves cough, soothes throat, optimizes the immune system, and supports bronchial passages and lung function.</li>
                    <li>Sugar-Free Immunity Enhancer: This supplement is sugar-free, non-sedative, and contains Stevia, a natural low-calorie sweetener with a pleasant taste. It also provides antioxidants to support the immune system.</li>
                    <li>Effective for All Ages: Suitable for both adults and children aged six months and above, this remedy is free of artificial colors, flavors, alcohol, and gluten.</li>
                    <li>High-Quality Natural Ingredients: Our syrup is crafted with a blend of potent herbs, including Malabar Nut, Marshmallow, Large Leaf Geiger Tree, Licorice, Jujube, Borage, Long Pepper, Hyssop, Sweet Violet, and Greater Galangal, ensuring a natural and effective remedy.</li>
                    <li>Formulated with Excellence: Herbion Naturals products are meticulously crafted in an ultramodern pharmaceutical facility, adhering to the highest international cGMP (current Good Manufacturing Practice) standards. This ensures the quality and efficacy of our remedies for your well-being.</li>
                  </ul>
                </div>
              </div>
              <div className="tab-pane fade" id="information" role="tabpanel" aria-labelledby="information-tab">
                <div className="product-desc-content">
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <th scope="row">Calories</th>
                        <td>110</td>
                      </tr>
                      <tr>
                        <th scope="row">Total Fat</th>
                        <td>1kg</td>
                      </tr>
                      <tr>
                        <th scope="row">Saturated Fat</th>
                        <td>0.5g</td>
                      </tr>
                      <tr>
                        <th scope="row">Cholesterol</th>
                        <td>40mg</td>
                      </tr>
                      <tr>
                        <th scope="row">Total Carbohydrate</th>
                        <td>2g</td>
                      </tr>
                      <tr>
                        <th scope="row">Protein</th>
                        <td>24g</td>
                      </tr>
                      <tr>
                        <th scope="row">Total Sugars</th>
                        <td>2g</td>
                      </tr>
                      <tr>
                        <th scope="row">Sodium</th>
                        <td>100mg</td>
                      </tr>
                      <tr>
                        <th scope="row">Calcium</th>
                        <td>140 mg</td>
                      </tr>
                      <tr>
                        <th scope="row">Potassium</th>
                        <td>160 mg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                <div className="product-desc-content">
                  <div className="reviews-comment">
                    <div className="review-info">
                      <div className="review-img">
                        <img src="assets/img/others/p_review_img01.jpg" alt="" />
                      </div>
                      <div className="review-content">
                        <ul className="review-rating list-wrap">
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                        <div className="review-meta">
                          <h6>Chenai Simon <span>-May 12, 2022</span></h6>
                        </div>
                        <p>
                          There are many variations of passages of lorem ipsum available, but the majority
                          have suffered alteration in some form, by injected humour, or randomised words which
                          don’t look even slightly believable. If you are going to use a passage of lorem ipsum.
                        </p>
                      </div>
                    </div>
                    <div className="review-info">
                      <div className="review-img">
                        <img src="assets/img/others/p_review_img02.jpg" alt="" />
                      </div>
                      <div className="review-content">
                        <ul className="review-rating list-wrap">
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </li>
                        </ul>
                        <div className="review-meta">
                          <h6>Finn Castaneda <span>-June 17, 2022</span></h6>
                        </div>
                        <p>
                          There are many variations of passages of lorem ipsum available, but the majority
                          have suffered alteration in some form, by injected humour, or randomised words which
                          don’t look even slightly believable. If you are going to use a passage of lorem ipsum.
                        </p>
                      </div>
                    </div>
                    <div className="review-info">
                      <div className="review-img">
                        <img src="assets/img/others/p_review_img03.jpg" alt="" />
                      </div>
                      <div className="review-content">
                        <ul className="review-rating list-wrap">
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                          </li>
                        </ul>
                        <div className="review-meta">
                          <h6>Bayley Robertson <span>-May 28, 2022</span></h6>
                        </div>
                        <p>
                          There are many variations of passages of lorem ipsum available, but the majority
                          have suffered alteration in some form, by injected humour, or randomised words which
                          don’t look even slightly believable. If you are going to use a passage of lorem ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="add-review">
                    <h4 className="title">Add a review</h4>
                    <form action="#">
                      <p>Your email address will not be published.Required fields are marked <span>*</span></p>
                      <div className="from-grp">
                        <label htmlFor="name">Your name <span>*</span></label>
                        <input type="text" id="name" />
                      </div>
                      <div className="from-grp">
                        <label htmlFor="email">Your email <span>*</span></label>
                        <input type="text" id="email" />
                      </div>
                      <div className="from-grp checkbox-grp">
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">Don’t show your email address</label>
                      </div>
                      <div className="form-rating">
                        <label>your rating</label>
                        <ul className="list-wrap">
                          <li>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </li>
                        </ul>
                      </div>
                      <div className="from-grp">
                        <label htmlFor="comment">Write Your review <span>*</span></label>
                        <textarea id="comment" cols="30" rows="10"></textarea>
                      </div>
                      <button className="btn">Submit Now</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
    );
  }
}

export default ItemDesc;
