import { Form } from 'react-bootstrap';

const Category = ({handleChange}) => {
  return (
    <div className='mt-3'>
      <h2>Category</h2>
      <Form>
        <Form.Check type="radio" value=""  label="All" id="All" name='cate'  onChange={handleChange}/>
        <Form.Check type="radio" value="sneakers"  label="Sneakers" id="Sneakers" name='cate'  onChange={handleChange}/>
        <Form.Check type="radio" value="flats"  label="Flats" id="Flats" name='cate'  onChange={handleChange}/>
        <Form.Check type="radio" value="sandals"  label="Sandals" id="Sandals" name='cate'  onChange={handleChange}/>
        <Form.Check type="radio" value="heels"  label="Heels" id="Heels" name='cate'  onChange={handleChange}/>
      </Form>
    </div>
  );
};

export default Category;
