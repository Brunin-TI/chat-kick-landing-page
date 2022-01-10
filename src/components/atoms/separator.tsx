import React from "react";

interface Separator {
  className: string;
}
const Separator: React.FC<Separator> = ({ className }) => {
  return <div className={className} />;
};

export default Separator;
