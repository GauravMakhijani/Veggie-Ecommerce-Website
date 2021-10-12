import React from "react";
import { useForm } from "react-hook-form";
import { Col, Form, Button, Row, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { setContactDetails } from "../../redux/Products/products.action";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  "First Name": yup.string().required(),
  "Last Name": yup.string().required(),
  Email: yup.string().email().required(),
  "Mobile Number": yup
    .string()
    .required()
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "to short")
    .max(10, "to long"),
  Address: yup.string().required(),
  City: yup.string().required(),
  Zip: yup
    .number()
    .required()
    .positive()
    .integer()
    .typeError("Please enter a valid Zip"),
});

function CheckoutForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    props.dispatch(setContactDetails(data));
    props.onShow();
  };
  console.log(errors);
  return (
    <Container>
      <h3 className="cart-h3">Billing details</h3>

      <Form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              placeholder="First Name"
              {...register("First Name", { required: true, maxLength: 80 })}
            />
            <p className="invalid-msg">{errors["First Name"]?.message}</p>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridLname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              placeholder="Last Name"
              {...register("Last Name", { required: true, maxLength: 100 })}
            />
            <p className="invalid-msg">{errors["Last Name"]?.message}</p>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            <p className="invalid-msg">{errors["Email"]?.message}</p>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Mobile Number"
              {...register("Mobile Number", {
                required: true,
                minLength: 10,
                maxLength: 10,
              })}
            />
            <p className="invalid-msg">{errors["Mobile Number"]?.message}</p>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="1234 Main St"
            {...register("Address", { required: true })}
          />
          <p className="invalid-msg">{errors["Address"]?.message}</p>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control {...register("City", { required: true })} />
            <p className="invalid-msg">{errors["City"]?.message}</p>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>

            <Form.Control
              as="select"
              {...register("State", { required: true })}
            >
              <option>Madhya Pradesh</option>
            </Form.Control>
            <p></p>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control {...register("Zip", { required: true })} />
            <p className="invalid-msg">{errors["Zip"]?.message}</p>
          </Form.Group>
        </Row>
        <Button className="cart-button" type="submit">
          Review Order
        </Button>
      </Form>
    </Container>
  );
}
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}
export default connect(mapStateToProps)(CheckoutForm);
