import React, { useState } from "react";
import "../styles/gallery.css";

interface GalleryProps {
  data: {
    id: number;
    name: string;
    path: string;
    Category: string;
    desc: string;
    available: boolean;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState<null | typeof data[0]>(null);

  return (
    <div className="gallery-container">
      <h1 className="gallery-heading">Gallery</h1>
      <div className="gallery-grid">
        {data.map((item) => (
          <div 
            key={item.id} 
            className="gallery-item" 
            onClick={() => setSelectedItem(item)}
          >
            <img src={item.path} alt={item.name} className="gallery-image" />
            <div className="gallery-info">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedItem && (
        <div className="popup-overlay" onClick={() => setSelectedItem(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setSelectedItem(null)}>&times;</span>
            <img src={selectedItem.path} alt={selectedItem.name} className="popup-image" />
            <div className="popup-info">
              {/* <h2>{selectedItem.id}</h2> */}
              <h2>{selectedItem.name}</h2>
              <p><strong>Category:</strong> {selectedItem.Category}</p>
              <p>{selectedItem.desc}</p>
              <p className={`availability ${selectedItem.available ? "in-stock" : "out-of-stock"}`}>
                {selectedItem.available ? "Available" : "Out of Stock"}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
