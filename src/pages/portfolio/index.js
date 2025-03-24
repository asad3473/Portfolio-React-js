import React, { useState, useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import LoaderPorfolio from "../portfolio/LoaderPortfolio";

export const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API or image loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        {loading ? (
          <LoaderPorfolio /> // Show Loader while loading
        ) : (
          <>
            <a name="myportfolio">
              <Row className="mb-5 mt-3 pt-md-3">
                <Col lg="8">
                  <h1 className="display-4 mb-4"> Portfolio </h1>
                  <hr className="t_border my-4 ml-0 text-left" />
                </Col>
              </Row>
            </a>
            <div className="mb-5 po_items_ho">
              {dataportfolio.map((data, i) => (
                <div key={i} className="po_item">
                  <img src={data.img} alt="" className="h-100 " />
                  <div className="content">
                    <p>{data.description}</p>
                    <a target="blank" href={data.link} className="btn btn-outline-danger">
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Container>
    </HelmetProvider>
  );
};
