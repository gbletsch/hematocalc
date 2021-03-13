import React, { useState } from "react";
import TabTitle from "./TabTitle";

function Tabs({ children }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="tabs__container">
      <ul className="tabs__ul">
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </div>
  );
}

export default Tabs;
