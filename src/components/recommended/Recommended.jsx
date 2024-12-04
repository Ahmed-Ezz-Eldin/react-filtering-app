import { Tabs, Tab } from 'react-bootstrap';

const Recommended = ({ handleClick }) => {
  return (
    <div className="mb-5">
      <h2 className="my-3">Recommended</h2>
      <Tabs
        activeKey={'all'}
        onSelect={handleClick}
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="" title="All Products" />
        <Tab eventKey="Nike" title="Nike" />
        <Tab eventKey="Adidas" title="Adidas" />
        <Tab eventKey="Puma" title="Puma" />
        <Tab eventKey="Vans" title="Vans" />
      </Tabs>
    </div>
  );
};

export default Recommended;
