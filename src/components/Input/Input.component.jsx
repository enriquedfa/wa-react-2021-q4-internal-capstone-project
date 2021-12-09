function Input({ label, type, name, placeholder, required }) {
  return (
    <label>
      {label}
      {type === "textarea" ? (
        <textarea name={name} placeholder={placeholder} required={required} />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
        />
      )}
    </label>
  );
}

export default Input;
