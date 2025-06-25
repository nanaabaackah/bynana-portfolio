import React, { useState } from 'react';
import '/src/components/LightboxViewer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const LightboxViewer = ({ source, type = 'pdf', buttonText = 'Open Preview' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => setIsOpen(true);
  const closeLightbox = () => setIsOpen(false);

  return (
    <>
      <button className="lightbox-btn" onClick={openLightbox}>
        {buttonText} <FontAwesomeIcon icon={faUpRightFromSquare} />
      </button>

      {isOpen && (
        <div className="lightbox-overlay" role="dialog" aria-modal="true">
          <span className="lightbox-close" onClick={closeLightbox}><FontAwesomeIcon icon={faCircleXmark} /></span>
          <div className="lightbox-content">
            {type === 'pdf' ? (
              <embed
                src={source}
                type="application/pdf"
                width="100%"
                height="100%"
                title="PDF Preview"
              />
            ) : (
              <iframe
                src={source}
                title="External Link Preview"
                width="100%"
                height="100%"
                loading='lazy'
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LightboxViewer;
