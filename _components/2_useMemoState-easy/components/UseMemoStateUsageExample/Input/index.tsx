export const Input = ({ reference, typeOfInput }) => {
  console.log(typeOfInput);
  return (
    <div>
      <label htmlFor="input-initial-string">STRING, value: </label>
      <input ref={reference} type={typeOfInput} id="input-string" />
    </div>
  );
};
