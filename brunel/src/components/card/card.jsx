import React from 'react';
import styles from './card.module.css';


const Card = ({ borderRadius, height, width, backgroundColor, position, top, left, borderColor, children }) => {
  const cardStyle = {
    borderRadius: borderRadius || '10px', // Default border radius
    width: width || '200px', // Default width
    height: height || '150px', // Default height
    backgroundColor: backgroundColor || '#ffffff', // Default background color
    position: position || 'static', // Default position
    top: top || 'auto', // Default top position
    left: left || 'auto', // Default left position
    borderColor: borderColor|| '#FFF'
  };

  return (
    <div className={styles.card}style={cardStyle}>
      {children}
    </div>
  );
}

export default Card;
