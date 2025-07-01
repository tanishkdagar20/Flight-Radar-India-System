const Error = ({ message }) => {
  return (
    <div className="error">
      <p>Flight data could not be retrieved</p>
      <p>{message}</p>
    </div>
  );
};

export default Error;
