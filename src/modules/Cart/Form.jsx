import React, { useState } from 'react';

const DeliveryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Виконайте додаткові дії з даними форми, такі як відправка на сервер або обробка
    console.log(formData);
    // Очистити форму після відправки
    setFormData({
      name: '',
      phone: '',
      address: '',
      email: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Ім'я користувача:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Телефон:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Адреса:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Відправити</button>
    </form>
  );
};

export default DeliveryForm;
