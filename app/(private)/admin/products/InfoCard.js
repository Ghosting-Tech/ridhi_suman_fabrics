import React from 'react';
import PropTypes from 'prop-types';

const InfoCard = ({ icon, label, value, borderColor, textColor }) => {
  return (
    <div className={`flex items-center justify-between p-4 border-2 rounded-lg ${borderColor} m-2 w-80`}>
      <img src={icon} alt={label} className="w-10 h-10 mr-4" />
      <div className='flex flex-col items-end'>
        <div className={`text-xl font-bold ${textColor}`}>{value}</div>
        <div className={textColor}>{label}</div>
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  borderColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default InfoCard;
