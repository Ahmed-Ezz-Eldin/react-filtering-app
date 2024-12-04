import { Form } from 'react-bootstrap';
const Colors = ({handleChange}) => {
  return (
    <div className="mt-3">
      <h2>Colors</h2>
      <Form>
        <Form.Check type="radio" value="" label="All" id="all-colors" name="colors" onChange={handleChange} />
        <Form.Check type="radio" value="black" label="Black" id="Black" name="colors" onChange={handleChange} />
        <Form.Check type="radio" value="blue" label="Blue" id="Blue" name="colors" onChange={handleChange} />
        <Form.Check type="radio" value="red" label="Red" id="Red" name="colors" onChange={handleChange} />
        <Form.Check type="radio" value="green" label="Green" id="Green" name="colors" onChange={handleChange} />
        <Form.Check type="radio" value="white" label="White" id="White" name="colors" onChange={handleChange} />
      </Form>
    </div>
  );
};

export default Colors;
