import React, { useContext } from "react";
import { shiivam } from "./APIs/Api";
const Bollywood = () => {
  const [data] = useContext(shiivam);

  return (
    <>
    <div className="contentPage">
      
      {data.map((item) => {
        return (
          <a href={item.url}>
            <div className="card">
              <img src={item.ImageAsset} alt="BollyImg" />
              <p>{item.Title}</p>
              <p>{item.BlogContent}</p>
              <p>{item.PublishedDate}</p>
              <hr />
            </div></a>
        );
      })}
      </div>
      <div className="right">
        
      </div>
    </>
  );
};

export default Bollywood;





