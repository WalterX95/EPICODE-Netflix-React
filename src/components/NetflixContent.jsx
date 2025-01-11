import { Row, Col } from 'react-bootstrap';

const NetflixContent = ({ title, startImageIndex }) => {
  return (
    <div>
      <h4 className='text-white'>{title}</h4>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4" style={{backgroundColor: '#221f1f'}}>
        {[...Array(6)].map((_, i) => (
          <Col key={i} className="mb-2 text-center px-1">
            <img
              className="img-fluid"
              src={`/src/assets/${startImageIndex + i}.png`}
              alt="movie picture"
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NetflixContent;