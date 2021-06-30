import { Col, Container, Row } from "reactstrap";
import PortfolioList from "./PortfolioList";
import PortfolioModal from "./PortfolioModal";

import axios from "axios";

import { API_URL } from "../constants";
import { useState, useEffect } from "react";

function Home(props) {
    const [portfolios, setPortfolios] = useState([]);

    const refreshList = () => {
        axios
          .get(API_URL)
          .then((res) => setPortfolios(res.data)) // Update list to the most recent list
          .catch((err) => console.log(err));
      };

    useEffect(()=>{
        refreshList()
    },[])

    const getPortfolios = () => {
        axios.get(API_URL).then(res => setPortfolios(res.data));
    };

    const resetState = () => {
        getPortfolios();
    };

    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <PortfolioList
              portfolios={portfolios}
              resetState={resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <PortfolioModal create={true} resetState={resetState} />
          </Col>
        </Row>
      </Container>
    );

}

export default Home;