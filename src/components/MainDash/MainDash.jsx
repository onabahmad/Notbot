import React, { useEffect, useState } from "react";
import "./MainDash.css";
import { MdAdd } from "react-icons/md";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { LiaToggleOnSolid, LiaToggleOffSolid } from "react-icons/lia";
import { BiSolidMessageRounded } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const MainDash = () => {
  const [bookingData, setBookingData] = useState([]);
  const Navigate = useNavigate();

  const handleBooking = () => {
    Navigate("/booking");
  };

  useEffect(() => {
    const storedData = localStorage.getItem("bookingData");
    if (storedData) {
      setBookingData(JSON.parse(storedData));
    }
  }, []);

  const toggleBookingStatus = (index) => {
    const updatedBookings = [...bookingData];
    updatedBookings[index].isActive = !updatedBookings[index].isActive;
    setBookingData(updatedBookings);

    localStorage.setItem("bookingData", JSON.stringify(updatedBookings));
  };

  const deleteBooking = (index) => {
    const updatedBookings = [...bookingData];
    updatedBookings.splice(index, 1);
    setBookingData(updatedBookings);

    localStorage.setItem("bookingData", JSON.stringify(updatedBookings));
  };

  const cloneBooking = (index) => {
    const clonedBooking = { ...bookingData[index] };
    setBookingData([...bookingData, clonedBooking]);

    localStorage.setItem(
      "bookingData",
      JSON.stringify([...bookingData, clonedBooking])
    );
  };

  const handleEdit = (index) => {
    Navigate(`/booking?index=${index}`);
  };

  return (
    <div className="maindash-container">
      <div className="maindash-heading-buttons">
        <div className="mainDash-createBooking">
          <h2 className="booking-type-title">Booking type</h2>
          <div className="booking-buttons-container">
            <button onClick={handleBooking} className="create-booking-btn">
              <MdAdd />
              Create new booking type
            </button>
          </div>
        </div>

        <div className="embed-view-buttons-container">
          <button className="embed-booking-btn">
            Embed booking page <HiQuestionMarkCircle />
          </button>
          <button className="view-booking-btn">View your booking page</button>
        </div>
      </div>

      <div className="cards-container">
        {bookingData.map((booking, index) => (
          <div key={index} className="booking-card">
            <div className="title-url-duration">
              <h3>{booking.title}</h3>
              <h5>{booking.url}</h5>
              <hr />
              <button
                className="toggle-button"
                onClick={() => toggleBookingStatus(index)}
              >
                {booking.isActive ? (
                  <div>
                    {" "}
                    <LiaToggleOnSolid className="toggle on" />
                    <p>Booking is ON</p>
                  </div>
                ) : (
                  <div>
                    {" "}
                    <LiaToggleOffSolid className="toggle off" />
                    <p>Booking is Off</p>
                  </div>
                )}
              </button>
              <p className="duration-booking-type">
                <CiClock2 />
                {booking.duration} minutes
              </p>
            </div>
            <div className="booking-discription">
              <p>{booking.description}</p>
            </div>
            <div className="booking-share">
              <p>Share: </p> <BiSolidMessageRounded /> <IoMail />
              <FaLinkedinIn />
              <FaFacebookF />
              <FaTwitter />
            </div>
            <div className="embed">
              <p>Embed on website</p>
              <p>Embed on Email</p>
            </div>
            <div className="Delete-clone-edit">
              <button onClick={() => deleteBooking(index)} className="delete">
                Delete
              </button>
              <button onClick={() => cloneBooking(index)} className="clone">
                Clone
              </button>
              <button onClick={() => handleEdit(index)} className="edit">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainDash;
