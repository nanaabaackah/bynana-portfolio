import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function FigmaEmbed({ figmaUrl, previewImage, alt }) {
  const [showEmbed, setShowEmbed] = useState(false);

  const handleClick = () => {
    setShowEmbed(true);
  };

  return (
    <div
      className="figma-placeholder"
      onClick={handleClick}
      style={{ cursor: 'pointer', textAlign: 'center' }}
    >
      {showEmbed ? (
        <iframe
          style={{
            border: '1px solid rgba(0, 0, 0, 0.1)',
            position: 'relative',
            width: '480px',
            height: '360px',
          }}
          src={figmaUrl}
          allowFullScreen
          title={alt}
        />
      ) : (
        <>
          <img src={previewImage} alt={alt} />
          <div className="middle">
            <p>
              Click to View <FontAwesomeIcon icon={faEye} />
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default FigmaEmbed;
