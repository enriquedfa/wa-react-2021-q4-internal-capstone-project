function CheckoutForm() {
  return (
    <div className="checkout-form">
      <h2>Shipping Address</h2>
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" />
        </label>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <label>
          City:
          <input type="text" name="city" />
        </label>
        <label>
          State:
          <input type="text" name="state" />
        </label>
        <label>
          Zip Code:
          <input type="text" name="zipCode" />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phoneNumber" />
        </label>
        <label>
          Email:
          <input type="text" name="email" />
        </label>
        <label>
          Order Notes:
          <textarea name="orderNotes" />
        </label>
      </form>
    </div>
  );
}

export default CheckoutForm;
