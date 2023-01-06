import React, { useEffect } from "react";
import { render } from "react-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import Card from "./Card";
import{useParams} from 'react-router-dom';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./cardUtils";
import axios from "axios";
import Navbar from "./NavbarrIndiv";


const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function CreditCard() {
    const {id} = useParams();
  useEffect(() => {
    if (!window.document.getElementById("stripe-script")) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        window["Stripe"].setPublishableKey(
          "pk_test_51MDoVyEO7urBPxcBKXDMneoxAyNSEGyCNS2UftDoVK0II7QpQCa5DuCIk8CCGEYEC8XiKLCbt3crfy4D69xTZoEQ00OVvcHrBX"
        );
      };
      window.document.body.appendChild(s);
    }
  }, []);

  const onSubmit = async (values) => {
    await sleep(300);
    try {
      window.Stripe.card.createToken(
        {
          number: values.number,
          exp_month: values.expiry.split("/")[0],
          exp_year: values.expiry.split("/")[1],
          cvc: values.cvc,
          name: values.name,
        },
        (status, response) => {
          if (status === 200) {
            axios
              .post(`/indiviualtrainee/pay/${id}`, {
                token: response,
                email: values.email,
              })
              .then((res) => window.alert(JSON.stringify(res.data, 0, 2)))
              .catch((err) => console.log(err));
          } else {
            console.log(response.error.message);
          }
        }
      );
    } catch (error) {}
  };

  return (
    
    <Styles>
    
      <Form
        onSubmit={onSubmit}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
          active,
        }) => {
          return (
            
            <form onSubmit={handleSubmit}>
              
              <Card
                number={values.number || ""}
                name={values.name || ""}
                expiry={values.expiry || ""}
                cvc={values.cvc || ""}
                focused={active}
              />
              <div>
              
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder="Your email"
                />
              </div>
              <div>
                <Field
                  name="number"
                  component="input"
                  type="text"
                  pattern="[\d| ]{16,22}"
                  placeholder="Card Number"
                  format={formatCreditCardNumber}
                />
              </div>
              <div>
                <Field
                  name="name"
                  component="input"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div>
                <Field
                  name="expiry"
                  component="input"
                  type="text"
                  pattern="\d\d/\d\d"
                  placeholder="Valid Thru"
                  format={formatExpirationDate}
                />
                <Field
                  name="cvc"
                  component="input"
                  type="text"
                  pattern="\d{3,4}"
                  placeholder="CVC"
                  format={formatCVC}
                />
              </div>
              <div className="buttons">
                <button type="submit" disabled={submitting}>
                  Submit
                </button>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
              </div>
    
             </form>
          );
        }}
      />
    </Styles>
  );
}

render(<CreditCard />, document.getElementById("root"));
export default CreditCard;