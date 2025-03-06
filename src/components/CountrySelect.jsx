
// import React, { useState } from "react";

// const countries = [
//   {
//     code: "IN",
//     name: "INDIA",
//     flag: "https://flagcdn.com/in.svg",
//     link: "https://www.cloudare.in/",
//   },
//   {
//     code: "MY",
//     name: "MALAYSIA",
//     flag: "https://flagcdn.com/my.svg",
//     link: "https://www.cloudare.in/tax/my",
//   },
//   {
//     code: "SA",
//     name: "SAUDI ARABIA",
//     flag: "https://flagcdn.com/sa.svg",
//     link: "https://www.cloudare.in/tax/ksa",
//   },
//   {
//     code: "US",
//     name: "USA",
//     flag: "https://flagcdn.com/us.svg",
//     link: "https://www.cloudare.in/staffing",
//   },
//   {
//     code: "CA",
//     name: "CANADA",
//     flag: "https://flagcdn.com/ca.svg",
//     link: "https://www.cloudare.in/staffing",
//   },
  
  
//   // Add more countries as needed
// ];

// const CountrySelect = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === 'IN'));

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country);
//     setIsOpen(false);
//     window.open(country.link, "_self"); // Open the country link in same tab
//   };

//   return (
//     <div>
//       {/* <label htmlFor="country-select">Select Country: </label> */}
//       <div style={{ position: "relative", width: "180px" }}>
//         <div
//           id="country-select"
//           onClick={toggleDropdown}
//           style={{
//             padding: "5px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             cursor: "pointer",
//             backgroundColor: "#fff",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           {selectedCountry ? (
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <img
//                 src={selectedCountry.flag}
//                 alt={`${selectedCountry.name} flag`}
//                 style={{ width: "20px", marginRight: "10px" }}
//               />
//               <span>{selectedCountry.name}</span>
//             </div>
//           ) : (
//             <span>Select a country</span>
//           )}
//           <span>{isOpen ? "▲" : "▼"}</span>
//         </div>

//         {isOpen && (
//           <div
//             style={{
//               position: "absolute",
//               zIndex: 1,
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//               backgroundColor: "#fff",
//               width: "100%",
//               maxHeight: "200px",
//               overflowY: "auto",
//             }}
//           >
//             {countries.map((country) => (
//               <div
//                 key={country.code}
//                 onClick={() => handleCountrySelect(country)}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   padding: "10px",
//                   cursor: "pointer",
//                 }}
//               >
//                 <img
//                   src={country.flag}
//                   alt={`${country.name} flag`}
//                   style={{ width: "20px", marginRight: "10px" }}
//                 />
//                 <span style={{fontSize:"15px"}}>{country.name}</span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       {/* {selectedCountry && <p>You selected: {selectedCountry.name}</p>} */}
//     </div>
//   );
// };

// export default CountrySelect;






// import React, { useState } from "react";

// const countries = [
//   {
//     code: "IN",
//     name: "INDIA",
//     flag: "https://flagcdn.com/in.svg",
//     link: "https://www.cloudare.in/",
//   },
//   {
//     code: "MY",
//     name: "MALAYSIA",
//     flag: "https://flagcdn.com/my.svg",
//     link: "https://www.cloudare.in/tax/my",
//   },
//   {
//     code: "SA",
//     name: "KSA",
//     flag: "https://flagcdn.com/sa.svg",
//     link: "https://www.cloudare.in/tax/ksa",
//   },
//   {
//     code: "US",
//     name: "USA",
//     flag: "https://flagcdn.com/us.svg",
//     link: "http://localhost:3000/staffing",
//   },
//   {
//     code: "CA",
//     name: "CANADA",
//     flag: "https://flagcdn.com/ca.svg",
//     link: "http://localhost:3000/staffing",
//   },
//   // Add more countries as needed
// ];

// const CountrySelect = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   // No default country selected initially
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country); // Update the selected country
//     setIsOpen(false); // Close dropdown after selection
//     window.open(country.link, "_self"); // Open the country link in the same tab
//   };

//   return (
//     <div>
//       {/* Dropdown Container */}
//       <div style={{ position: "relative", width: "180px" }}>
//         <div
//           id="country-select"
//           onClick={toggleDropdown}
//           style={{
//             padding: "5px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             cursor: "pointer",
//             backgroundColor: "#fff",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           {/* Display selected country or prompt to select */}
//           {selectedCountry ? (
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <img
//                 src={selectedCountry.flag}
//                 alt={`${selectedCountry.name} flag`}
//                 style={{ width: "20px", marginRight: "10px" }}
//               />
//               <span>{selectedCountry.name}</span>
//             </div>
//           ) : (
//             <span>Select a country</span>
//           )}
//           <span>{isOpen ? "▲" : "▼"}</span>
//         </div>

//         {/* Dropdown options */}
//         {isOpen && (
//           <div
//             style={{
//               position: "absolute",
//               zIndex: 1,
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//               backgroundColor: "#fff",
//               width: "100%",
//               maxHeight: "200px",
//               overflowY: "auto",
//             }}
//           >
//             {countries.map((country) => (
//               <div
//                 key={country.code}
//                 onClick={() => handleCountrySelect(country)} // Set the selected country on click
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   padding: "10px",
//                   cursor: "pointer",
//                   backgroundColor: selectedCountry?.code === country.code ? "#f0f0f0" : "#fff", // Highlight the selected country
//                 }}
//               >
//                 <img
//                   src={country.flag}
//                   alt={`${country.name} flag`}
//                   style={{ width: "20px", marginRight: "10px" }}
//                 />
//                 <span style={{ fontSize: "15px" }}>{country.name}</span>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CountrySelect;


import React, { useState, useEffect } from "react";
import "../styles/country.css";

const countries = [
  {
    code: "IN",
    name: "INDIA",
    flag: "https://flagcdn.com/in.svg",
    link: "https://www.cloudare.in/",

  },
  {
    code: "MY",
    name: "MALAYSIA",
    flag: "https://flagcdn.com/my.svg",
    link: "https://www.cloudare.in/tax/my",
  },
  {
    code: "SA",
    name: "KSA",
    flag: "https://flagcdn.com/sa.svg",
    link: "https://www.cloudare.in/tax/ksa",
  },
  {
    code: "US",
    name: "USA",
    flag: "https://flagcdn.com/us.svg",
    link: "https://www.cloudare.in/staffing",
  },
  {
    code: "CA",
    name: "CANADA",
    flag: "https://flagcdn.com/ca.svg",
    link: "https://www.cloudare.in/staffing",
  },
];

const CountrySelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Set "India" as the default selected country
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((country) => country.code === "IN")
  );

  useEffect(() => {
    const savedCountry = localStorage.getItem("selectedCountry");
    if (savedCountry) {
      setSelectedCountry(JSON.parse(savedCountry)); // Load country from localStorage if available
    }
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country); // Update selected country
    setIsOpen(false); // Close dropdown
    localStorage.setItem("selectedCountry", JSON.stringify(country)); // Store in localStorage
    window.open(country.link, "_self"); // Open the country link in the same tab
  };

  return (
    <div className="country-select-container"> 
      {/* Dropdown Container */}
      <div style={{ position: "relative", width: "160px" }}>
        <div
          id="country-select"
          onClick={toggleDropdown}
          className="country-select-box"
        >
          {/* Display selected country by default */}
          {selectedCountry && (
            <div className="country-display">
              <img
                src={selectedCountry.flag}
                alt={`${selectedCountry.name} flag`}
                className="country-flag"
              />
              <span className="country-name">{selectedCountry.name}</span>
            </div>
          )}
          <span>{isOpen ? "▲" : "▼"}</span>
        </div>

        {/* Dropdown options */}
        {isOpen && (
          <div
            className="country-dropdown"
          >
            {countries.map((country) => (
              <div
              className="country-item"
                key={country.code}
                onClick={() => handleCountrySelect(country)} // Set the selected country on click
                
              >
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="country-flag"
                />
                <span className="country-name">{country.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default CountrySelect;
