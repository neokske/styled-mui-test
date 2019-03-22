import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import styled from "styled-components";

const TabComponent = styled.div`
  padding: 20px;
  color: red;
`;

const TestComp = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleChangeCurrentPage = (event, value) => setCurrentPage(value);

  return (
    <div>
      <Tabs value={currentPage} onChange={handleChangeCurrentPage}>
        <Tab label="Label 1" />
        <Tab label="Label 2" />
        <Tab label="Label 3" />
      </Tabs>
      <div className="tab-content">
        {currentPage === 0 && <span>Page1</span>}
        {currentPage === 1 && <span>Page2</span>}
        {currentPage === 2 && <span>Page3</span>}
      </div>
    </div>
  );
};

export default styled(TestComp)`
  > .tab-content: {
    padding: 20px;
    color: red;
  }
`;
