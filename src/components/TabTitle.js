import React, { useCallback } from "react";

function TabTitle({ title, setSelectedTab, index }) {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
  );
}

export default TabTitle;
