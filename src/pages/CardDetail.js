import React from "react";
import { useParams } from "react-router-dom";
import ageCategories from "../assets/ages"; // Import the news data

const Details = () => {
  const { id } = useParams(); // Retrieve the news item ID from URL parameters

  // Find the news item with the matching ID
  const selectedNewsItem = ageCategories.find(
    (item) => item.id === parseInt(id)
  );

  // Check if selectedNewsItem exists before attempting to access its properties
  if (!selectedNewsItem) {
    return <div>Item not found</div>;
  }

  const paragraphs = selectedNewsItem.developText.split("##");
  const paragraphs2 = selectedNewsItem.developText2.split("##");
  const paragraphs2_1 = selectedNewsItem.developText2_1.split("##");
  return (
    <div className="details-body-container">
      <div className="details-body">
        {selectedNewsItem && (
          <div>
            <div className="details-head">
              <img
                className="details-img"
                src={selectedNewsItem.imageUrl}
                alt={selectedNewsItem.title}
              />
              <h2>
                {selectedNewsItem.title} насны хүмүүсийн сэтгэл зүй ямар байдаг
                вэ?
              </h2>
            </div>
            <ul className="cardDetailList">
              <li>§ {selectedNewsItem.title} насны биеийн хөгжил</li>
              <li>§ {selectedNewsItem.title} танин мэдэхүйн хөгжил</li>
              <li>§ {selectedNewsItem.title} сэтгэлийн хөдөлгөөн</li>
              <li>§ {selectedNewsItem.title} зан авир ба хэрэгцээ, сэдэл</li>
            </ul>
          </div>
        )}

        {selectedNewsItem.firstP && (
          <div>
            <h2>§ {selectedNewsItem.title} насны биеийн хөгжил :</h2>
            <div className="paragraphFix">
              <h3>§ 1: {selectedNewsItem.firstP}</h3>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="details-p">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        )}

        {selectedNewsItem.secondP && (
          <div>
            <div className="paragraphFix">
              <h3>§ 2: {selectedNewsItem.firstP}</h3>
              {paragraphs2.map((paragraph, index) => (
                <p key={index} className="details-p">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        )}
        {selectedNewsItem.thirdP && (
          <div>
            <div className="paragraphFix">
              <h3>§ 2: {selectedNewsItem.firstP}</h3>
              {paragraphs2.map((paragraph, index) => (
                <p key={index} className="details-p">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        )}
        {selectedNewsItem.forthP && (
          <div>
            <div className="paragraphFix">
              <h3>§ 2: {selectedNewsItem.firstP}</h3>
              {paragraphs2.map((paragraph, index) => (
                <p key={index} className="details-p">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        )}
        {selectedNewsItem.secondGroupFirstP && (
          <div>
            <h2>§ {selectedNewsItem.title} танин мэдэхүйн хөгжил :</h2>
            <div className="paragraphFix">
              <h3>§ 2.1: {selectedNewsItem.secondGroupFirstP}</h3>
              {paragraphs2_1.map((paragraph, index) => (
                <p key={index} className="details-p">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
