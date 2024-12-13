import React from "react";

const ContactCard = ({  Icon, title, description, iconColor }) => {
  return (
    <div className="bg-gray-100 p-3 rounded-lg flex items-center space-x-3">
      <Icon className={`${iconColor} text-2xl`} />
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ContactCard;
