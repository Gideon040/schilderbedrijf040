import React from 'react';

export function Map() {
  return (
    <section className="h-[400px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.0897075749456!2d5.4534!3d51.4416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6d90176aa5579%3A0x8ef7996b9a88094!2sJacob%20van%20Campenweg%2022%2C%205624CD%20Eindhoven!5e0!3m2!1sen!2snl!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}