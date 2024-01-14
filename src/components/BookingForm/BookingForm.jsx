import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./BookingForm.css";

const BookingForm = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    title: "",
    url: "",
    description: "",
    duration: "",
  });

  useEffect(() => {
    // Check if there is an index in the query parameters
    const queryParams = new URLSearchParams(location.search);
    const index = queryParams.get("index");

    if (index !== null) {
      const existingBookings =
        JSON.parse(localStorage.getItem("bookingData")) || [];
      const editingBooking = existingBookings[index];

      if (editingBooking) {
        setFormData({
          title: editingBooking.title,
          url: editingBooking.url,
          description: editingBooking.description,
          duration: editingBooking.duration,
        });
      } else {
        Navigate("/Home");
      }
    }
  }, [location, Navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.url ||
      !formData.description ||
      !formData.duration
    ) {
      alert("Please fill in all fields");
      return;
    }

    if (formData.title.length > 150 || formData.url.length > 150) {
      alert("Title and URL cannot exceed 150 characters");
      return;
    }

    const existingBookings =
      JSON.parse(localStorage.getItem("bookingData")) || [];

    const queryParams = new URLSearchParams(location.search);
    const index = queryParams.get("index");

    if (index !== null) {
      existingBookings[index] = formData;
    } else {
      existingBookings.push(formData);
    }

    localStorage.setItem("bookingData", JSON.stringify(existingBookings));
    Navigate("/Home");
  };

  const handleCancel = () => {
    Navigate("/Home");
  };

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="Booking-form maindash-container">
        <form className="bookling-form-container" onSubmit={handleSubmit}>
          <h2>Create new booking type</h2>
          <label className="form-label-booking">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="form-input-booking "
          />

          <label className="form-label-booking">URL:</label>
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            className="form-input-booking "
          />

          <label className="form-label-booking">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            placeholder="Event discription here"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="form-input-booking  text-area"
          ></textarea>

          <label className="form-label-booking">Duration:</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
            className="form-input-booking duration"
          />
          <hr className="line-booking" />
          <div className="submit-cancel-container">
            <button onClick={handleCancel} className="cancel-button">
              Cancel
            </button>
            <button type="submit" className="submit-button">
              {location.search ? "Update booking type" : "Create booking type"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
