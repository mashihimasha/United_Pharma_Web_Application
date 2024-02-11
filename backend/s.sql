CREATE TABLE users
(
  password INT NOT NULL,
  email INT NOT NULL,
  user_group INT NOT NULL,
  user_id INT NOT NULL,
  createdAt INT NOT NULL,
  updatedAt INT NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE (email)
);

CREATE TABLE customer
(
  first_name INT NOT NULL,
  last_name INT NOT NULL,
  contact_number INT NOT NULL,
  address_number INT NOT NULL,
  street INT NOT NULL,
  city INT NOT NULL,
  province INT NOT NULL,
  zip_code INT NOT NULL,
  customer_id INT NOT NULL,
  c_type INT NOT NULL,
  company INT,
  user_id INT NOT NULL,
  PRIMARY KEY (customer_id, user_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE product
(
  product_id INT NOT NULL,
  product_descrip INT NOT NULL,
  product_name INT NOT NULL,
  unit_cost INT NOT NULL,
  product_category INT NOT NULL,
  product_brand INT NOT NULL,
  SKU INT NOT NULL,
  PRIMARY KEY (product_id)
);

CREATE TABLE pharmacy
(
  branch_id INT NOT NULL,
  address_no INT NOT NULL,
  street INT NOT NULL,
  city INT NOT NULL,
  province INT NOT NULL,
  zip_code INT NOT NULL,
  contact_number INT NOT NULL,
  co-ordinates INT NOT NULL,
  PRIMARY KEY (branch_id)
);

CREATE TABLE card
(
  card_type INT NOT NULL,
  card_number INT NOT NULL,
  name_on_card INT NOT NULL,
  expiry_date INT NOT NULL,
  CVV INT NOT NULL,
  customer_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (card_number, customer_id, user_id),
  FOREIGN KEY (customer_id, user_id) REFERENCES customer(customer_id, user_id)
);

CREATE TABLE quotation
(
  message INT NOT NULL,
  quotation_id INT NOT NULL,
  customer_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (quotation_id),
  FOREIGN KEY (customer_id, user_id) REFERENCES customer(customer_id, user_id)
);

CREATE TABLE order
(
  order_id INT NOT NULL,
  order_date INT NOT NULL,
  order_status INT NOT NULL,
  order_type INT NOT NULL,
  prescription INT,
  quantity INT NOT NULL,
  number_of_items INT NOT NULL,
  customer_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (order_id, customer_id, user_id),
  FOREIGN KEY (customer_id, user_id) REFERENCES customer(customer_id, user_id)
);

CREATE TABLE payment
(
  payment_id INT NOT NULL,
  payment_date INT NOT NULL,
  payment_status INT NOT NULL,
  payment_amount INT NOT NULL,
  order_id INT NOT NULL,
  card_number INT NOT NULL,
  customer_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (payment_id, order_id),
  FOREIGN KEY (order_id) REFERENCES order(order_id),
  FOREIGN KEY (card_number, customer_id, user_id) REFERENCES card(card_number, customer_id, user_id)
);

CREATE TABLE medicine
(
  medicine_id INT NOT NULL,
  product_id INT NOT NULL,
  PRIMARY KEY (product_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id),
  UNIQUE (medicine_id)
);

CREATE TABLE wellness
(
  product_id INT NOT NULL,
  PRIMARY KEY (product_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
);

CREATE TABLE personal_care
(
  product_id INT NOT NULL,
  PRIMARY KEY (product_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
);

CREATE TABLE equipment
(
  equipment_id INT NOT NULL,
  model_number INT NOT NULL,
  product_id INT NOT NULL,
  PRIMARY KEY (product_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id),
  UNIQUE (equipment_id)
);

CREATE TABLE prescription
(
  product_id INT NOT NULL,
  PRIMARY KEY (product_id),
  FOREIGN KEY (product_id) REFERENCES medicine(product_id)
);

CREATE TABLE non-prescription
(
  product_id INT NOT NULL,
  PRIMARY KEY (product_id),
  FOREIGN KEY (product_id) REFERENCES medicine(product_id)
);

CREATE TABLE promotion
(
  discount_percent INT NOT NULL,
  promo_id INT NOT NULL,
  start_date INT NOT NULL,
  end_date INT NOT NULL,
  product_id INT NOT NULL,
  PRIMARY KEY (promo_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
);

CREATE TABLE has
(
  product_id INT NOT NULL,
  order_id INT NOT NULL,
  PRIMARY KEY (product_id, order_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id),
  FOREIGN KEY (order_id) REFERENCES order(order_id)
);

CREATE TABLE employee
(
  employee_id INT NOT NULL,
  first_name INT NOT NULL,
  last_name INT NOT NULL,
  employee_type INT NOT NULL,
  contact_number INT NOT NULL,
  user_id INT NOT NULL,
  branch_id INT NOT NULL,
  PRIMARY KEY (employee_id, user_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (branch_id) REFERENCES pharmacy(branch_id)
);