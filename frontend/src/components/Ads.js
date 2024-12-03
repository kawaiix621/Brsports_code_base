import React, { useState, useRef, useEffect } from 'react';
import "./ads.css"
const Ads = ({ adsData }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    //Optional:  Auto-scroll to the beginning when data changes.  Comment out if unwanted.
    if (containerRef.current) {
      containerRef.current.scrollLeft = 0;
    }
  }, [adsData]);


  const handlePageChange = (index) => {
    setCurrentPage(index);
    //Optional: Smooth scroll to the selected page.  Comment out for instant jump.
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: index * (containerRef.current.offsetWidth), // Assumes equal width items
        behavior: 'smooth', // For smooth scrolling
      });
    }
  };

  const renderPagination = () => {
    const pages = adsData.slice(0,4); //Only show 4 pages
    return (
      <div className="pagination">
        {pages.map((ad, index) => (
          <div
            key={index}
            className={`pagination-item ${currentPage === index ? 'active' : ''}`}
            onClick={() => handlePageChange(index)}
          >
            {index +1}
          </div>
        ))}
      </div>
    );
  };

  const renderAds = () => {
    const startIndex = currentPage * 1; // Assuming 1 ad per page
    const endIndex = Math.min(startIndex + 1, adsData.length); // 1 ad per page

    return (
      <div className="ads-container" ref={containerRef}>
        {adsData.slice(startIndex, endIndex).map((ad) => (
          <a key={ad.img} href={ad.redirectUrl} target="_blank" rel="noopener noreferrer">
          
            <img src={ad.img} alt={`Ad ${ad.img}`} className="ad-div" />
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="ads-component">
      {renderAds()}
      {renderPagination()}
    </div>
  );
};


export default Ads;