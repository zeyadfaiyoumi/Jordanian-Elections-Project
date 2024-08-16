import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Createlist = () => {
  const [location, setLocation] = useState('');
  const [district, setDistrict] = useState('');
  const [seats, setSeats] = useState('');
  const [list_name, setlist_name] = useState('');
  const [logo, setlogo] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Update seats based on location
  useEffect(() => {
    console.log('Location in useEffect:', location);
    console.log('District in useEffect:', district);
    if (location === 'amman') {
      setSeats(6);
    } else if (location === 'zarqa') {
      setSeats(10);
    } else {
      setSeats('');
    }
    console.log('Seats updated:', seats); // Debug log
  }, [location]);

  useEffect(() => {
    if (location === 'zarqa' && !district) {
      setDistrict('zarqad');
    }
  }, [location]);

  const handleLocationChange = (e) => {
    const selectedLocation = e.target.value;
    setLocation(selectedLocation);
    setDistrict(''); // Reset district when location changes
    console.log('Location changed:', selectedLocation); // Debug log
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setDistrict(selectedDistrict);
    console.log('District changed:', selectedDistrict); // Debug log
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Prepare the data to send
    const data = {
      location,
      district,
      list_name,
      logo
    };

    console.log('Submitting data:', data);

    try {
      const response = await axios.post('http://localhost:5000/api/submit-form-Createlist', data); // Update the URL to your backend endpoint
      if (response.status === 200) {
        // Handle success
        setSuccess('Data submitted successfully');
        setError(null);
        // Optionally clear the form
        setLocation('');
        setDistrict('');
        setlist_name('');
        setlogo('');
      }
    } catch (error) {
      // Handle errors
      setError('Failed to submit data');
      setSuccess(null);
    }
  };

  return (
    <form className='m-12' onSubmit={handleSubmit}>
      تقديم طلب للترشح ضمن القوائم المحلية 
      <br />
      <div>
        <select id="location" value={location} onChange={handleLocationChange}>
          <option value="">اختيار المحافظة</option>
          <option value="amman">عمان</option>
          <option value="zarqa">الزرقاء</option>
        </select>
        <label htmlFor="location">:المحافظة</label>
      </div>

      {location && (
        <div>
    <select id="district" value={district} onChange={handleDistrictChange}>
  {location === 'amman' ? (
    <>
      <option value="amman1">عمان الأولى</option>
      <option value="amman3">عمان الثالثة</option>
    </>
  ) : location === 'zarqa' ? (
    <>

    {/* here two option  */}
    
      <option value="zarqad" >دائرة الزرقاء</option> 
      
    </>
  ) : null}
</select>
 
        </div>
      )}

      {location && (
        <div>
          <input
            className='bg-red-100'
            type="number"
            id="seats"
            value={seats}
            readOnly
          />
          <label htmlFor="seats">عدد المقاعد</label>
        </div>
      )}

      <div>
        <input
          className='bg-red-100'
          type="text"
          required
          id="listName"
          value={list_name}
          onChange={(e) => setlist_name(e.target.value)}
        />
        <label htmlFor="listName">اسم القائمة</label>
      </div>

      <div>
        <input
          className='bg-red-100'
          type="text"
          required
          id="logo"
          value={logo}
          onChange={(e) => setlogo(e.target.value)}
        />
        <label htmlFor="logo">شعار القائمة</label>
      </div>

      <button type="submit" className='bg-red-500 p-2'>تقديم بيانات القائمة</button>
    </form>
  );
};

export default Createlist;
