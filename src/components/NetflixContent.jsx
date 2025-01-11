import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

const NetflixContent = ({ title, apiUrl }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error(`Errore API: Codice ${response.status}`);
      })
      .then((data) => {
        if (data.Search) {
          setData(data.Search); // Aggiorna lo stato con i risultati dell'API
        } else {
          setError('Nessun risultato trovato');
        }
      })
      .catch((error) => setError(error.message));
  }, [apiUrl]);

  if (error) {
    return <p className="text-danger">{error}</p>;
  }

  return (
    <div>
      <h4>{title}</h4>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
        {data.map((item, i) => (
          <Col key={i} className="mb-2 text-center px-1">
            <img
              className="img-fluid"
              src={item.Poster}
              alt={item.Title}
              style={{ height: '250px', objectFit: 'cover' }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NetflixContent;
