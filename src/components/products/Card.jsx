import { Card as BCard, Col } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';

const Card = ({img, title, star, reviews, newPrice, prevPrice}) => {
  return (
    <Col md={3} className="mb-4">
      <BCard className="shadow-sm">
        <BCard.Img
          className="p-4 border-b-2"
          src={img}
        />
        <BCard.Body className="p-5">
          <BCard.Title as="h2" className="text-center py-4">
            {title}
          </BCard.Title>
          <BCard.Text className="flex items-center justify-between">
            <div className="flex">
              {/* <AiFillStar className="icon-color" />
              <AiFillStar className="icon-color" />
              <AiFillStar className="icon-color" />
              <AiFillStar className="icon-color" />
              <AiFillStar className="icon-color" /> */}
              {star}{star}{star}{star}
            </div>

            <p className="">Total Reviews {reviews} </p>
          </BCard.Text>

          <BCard.Text>
            <del>{prevPrice}</del> {newPrice}
          </BCard.Text>

          <div className="">
            <BsFillBagHeartFill className="text-2xl ms-auto cursor-pointer" />
          </div>
        </BCard.Body>
      </BCard>
    </Col>
  );
};

export default Card;
