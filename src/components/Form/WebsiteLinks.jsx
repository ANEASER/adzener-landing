import React from "react";

const WebsiteLinks = ({ links, setLinks }) => {
  const handleAddLink = () => {
    setLinks([...links, ""]);
  };

  const handleChange = (index, value) => {
    const updatedLinks = [...links];
    updatedLinks[index] = value;
    setLinks(updatedLinks);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", flexDirection:"row", alignItems:"center", marginBottom: "10px" }}>
        <label>Add website links (optional)</label>
        <button
          type="button"
          onClick={handleAddLink}
          style={{
            background: "none",
            border: "none",
            color: "#5A5A5A",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            fontWeight: "500",
          }}
        >
        + Add more
        </button>
      </div>

      {links.map((link, index) => (
        <input
          key={index}
          type="text"
          value={link}
          onChange={(e) => handleChange(index, e.target.value)}
          placeholder="Company website link"
          style={{
            width: "100%",
            border: "1px solid #D2D4DA",
            borderRadius: "10px",
            marginBottom: "10px",
            fontSize: "14px",
            color: "#333",
            padding: "10px",
          }}
        />
      ))}
    </div>
  );
};

export default WebsiteLinks;
