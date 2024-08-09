export const ObjectInput = ({ reference }) => {
  const handleTest = () => {
    const givenValue = reference.current.value;

    try {
      const parsedObject = JSON.parse(givenValue);
      console.log(parsedObject);
    } catch (e) {
      console.error('Błędny format JSON: ', e.message);
    }
  };

  return (
    <>
      <textarea ref={reference} />;<button onClick={handleTest}>test it</button>
    </>
  );
};
