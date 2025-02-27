import "./Search.css";
import { useState } from "react";

function Search() {
  const [formData, setFormData] = useState({
    location: "",
    priceRange: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="innerContainer">
        <h1>Find Your Perfect Home</h1>
        <form className="form">
          <div className="inputA">
           <div className="cont">
           <label id="location">Location <sup>*</sup></label>
            <input
              type="text"
              name="location"
              id="location"
              className="input"
              value={formData.location}
              onChange={handleChange}
            />
           </div>
          </div>

          <div className="inputB">
            <div className="cont">
            <label className="propertyType" >Property Type <sup>*</sup></label>
            <input
              type="text"
              name="propertyType"
              id="propertyType"
              className="input"
              value={formData.propertyType}
              onChange={handleChange}
            />
            </div>

            <div className="cont">
            <label>Bedrooms <sup>*</sup></label>
            <input
              type="number"
              name="bedrooms"
              className="input"
              value={formData.bedrooms}
              onChange={handleChange}
            />
            </div>
          </div>

          <div className="inputB">
           <div className="cont">
           <label>Bathrooms <sup>*</sup></label>
            <input
              type="number"
              name="bathrooms"
              className="input"
              value={formData.bathrooms}
              onChange={handleChange}
            />
           </div>

            <div className="cont">
            <label>Price Range <sup>*</sup></label>
            <input
              type="text"
              name="priceRange"
              className="input"
              value={formData.priceRange}
              onChange={handleChange}
            />
            </div>
          </div>

          <button type="submit" className="submitBtn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
