import Input from "../Input/Input.component";
import { shippingFields } from "./CheckoutForm.constants";

function CheckoutForm() {
  return (
    <div className="checkout-form">
      <h2>Shipping Address</h2>
      <form>
        {shippingFields.map((input) => (
          <Input key={input.name} {...input} />
        ))}
      </form>
    </div>
  );
}

export default CheckoutForm;
