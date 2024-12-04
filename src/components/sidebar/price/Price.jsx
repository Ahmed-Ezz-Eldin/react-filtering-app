import { Form } from 'react-bootstrap';

const Price = ({handleChange}) => {
  return (
    <div className="mt-3">
      <h2>Price</h2>

      <Form>
        <Form.Check type="radio" value="" label="All" id="all" name="price"  onChange={handleChange} />
        <Form.Check type="radio" value={50} label="$0 - 50$" id="$0 - 50$" name="price"  onChange={handleChange} />
        <Form.Check type="radio" value={100} label="$50 - 100$" id="$50 - 100$" name="price"  onChange={handleChange} />
        <Form.Check type="radio" value={150} label="$100 - 150$" id="$100 - 150$" name="price"  onChange={handleChange} />
        <Form.Check type="radio" value={200} label="Over $150" id="$150 - 200$" name="price"  onChange={handleChange} />
      </Form>
    </div>
  );
};

export default Price;
