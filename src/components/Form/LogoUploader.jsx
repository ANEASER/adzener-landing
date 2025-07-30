import { UploadCloud } from "lucide-react";
import React, { useState, useCallback } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

const LogoUploader = () => {
  const [logos, setLogos] = useState([null, null]);

  const handleFileChange = useCallback(async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ["image/png", "image/jpeg", "image/svg+xml"];
    if (!allowedTypes.includes(file.type)) {
      toast.error("Only SVG, PNG, and JPG files are allowed.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error("Maximum file size is 10MB.");
      return;
    }

    // Generate a unique filename
    const extension = file.name.split('.').pop();
    const uniqueFilename = `${uuidv4()}.${extension}`;

    // Prepare form data
    const formData = new FormData();
    const renamedFile = new File([file], uniqueFilename, { type: file.type });
    formData.append("file", renamedFile);

    try {
      const response = await fetch("http://127.0.0.1:8080/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Upload failed");
      }

      toast.success("Uploaded successfully!");

      // Save logo preview in UI
      const updatedLogos = [...logos];
      updatedLogos[index] = renamedFile;
      setLogos(updatedLogos);

      // Save to localStorage
      const saved = JSON.parse(localStorage.getItem("logo-urls") || "[]");
      localStorage.setItem("logo-urls", JSON.stringify([...saved, data.url]));

      console.log(localStorage.getItem("logo-urls"));
    } catch (err) {
      toast.error(err.message || "Upload failed");
    }
  }, [logos]);

  const handleAddSlot = () => {
    setLogos([...logos, null]);
  };

  return (
    <div style={{ maxWidth: "484.5px", width: "100%" }}>
      <h3 style={{ marginBottom: "0.5rem" }}>Upload logos</h3>
      <p style={{ fontSize: "14px", color: "#666" }}>
        Please add your company logos: one primary logo for general use (e.g., headers and branding),
        and one square version typically used for icons, favicons, or apps.
      </p>

      <div style={{
        display: "flex", gap: "1rem", flexWrap: "wrap",
        alignItems: "center", marginTop: "1rem"
      }}>
        {logos.map((logo, index) => (
          <label key={index} style={{
            width: "100px", height: "100px", border: "1px dashed #ccc",
            borderRadius: "12px", backgroundColor: "#fff", display: "flex",
            justifyContent: "center", alignItems: "center", cursor: "pointer", position: "relative"
          }}>
            {logo ? (
              <img
                src={URL.createObjectURL(logo)}
                alt={`Logo ${index + 1}`}
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "10px" }}
              />
            ) : (
              <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_618_8064)">
                  <path d="M13.7585 4.00322L13.7498 23.3007C13.7498 23.6322 13.8815 23.9502 14.1159 24.1846C14.3503 24.419 14.6682 24.5507 14.9998 24.5507C15.3313 24.5507 15.6492 24.419 15.8836 24.1846C16.1181 23.9502 16.2498 23.6322 16.2498 23.3007L16.2585 4.02447L19.8985 7.66572C20.1329 7.90006 20.4508 8.03171 20.7823 8.03171C21.1137 8.03171 21.4316 7.90006 21.666 7.66572C21.9004 7.43131 22.032 7.11343 22.032 6.78197C22.032 6.45052 21.9004 6.13263 21.666 5.89822L17.6523 1.87947C17.304 1.531 16.8905 1.25456 16.4354 1.06596C15.9803 0.87735 15.4924 0.780273 14.9998 0.780273C14.5071 0.780273 14.0193 0.87735 13.5641 1.06596C13.109 1.25456 12.6955 1.531 12.3473 1.87947L8.33351 5.89447C8.09917 6.12888 7.96753 6.44677 7.96753 6.77822C7.96753 7.10968 8.09917 7.42756 8.33351 7.66197C8.56792 7.89631 8.88581 8.02796 9.21726 8.02796C9.54872 8.02796 9.8666 7.89631 10.101 7.66197L13.7585 4.00322Z" fill="#282A3A" fill-opacity="0.6"/>
                  <path d="M27.5 22.0298V27.0298C27.5 27.3613 27.3683 27.6792 27.1339 27.9137C26.8995 28.1481 26.5815 28.2798 26.25 28.2798H3.75C3.41848 28.2798 3.10054 28.1481 2.86612 27.9137C2.6317 27.6792 2.5 27.3613 2.5 27.0298V22.0298C2.5 21.6983 2.3683 21.3803 2.13388 21.1459C1.89946 20.9115 1.58152 20.7798 1.25 20.7798C0.918479 20.7798 0.600537 20.9115 0.366117 21.1459C0.131696 21.3803 0 21.6983 0 22.0298L0 27.0298C0 28.0243 0.395088 28.9782 1.09835 29.6814C1.80161 30.3847 2.75544 30.7798 3.75 30.7798H26.25C27.2446 30.7798 28.1984 30.3847 28.9017 29.6814C29.6049 28.9782 30 28.0243 30 27.0298V22.0298C30 21.6983 29.8683 21.3803 29.6339 21.1459C29.3995 20.9115 29.0815 20.7798 28.75 20.7798C28.4185 20.7798 28.1005 20.9115 27.8661 21.1459C27.6317 21.3803 27.5 21.6983 27.5 22.0298Z" fill="#282A3A" fill-opacity="0.6"/>
                </g>
                <defs>
                  <clipPath id="clip0_618_8064">
                  <rect width="30" height="30" fill="white" transform="translate(0 0.780762)"/>
                </clipPath>
                </defs>
              </svg>
            )}
            <input
              type="file"
              accept=".svg,.png,.jpg,.jpeg"
              onChange={(e) => handleFileChange(e, index)}
              style={{ display: "none" }}
            />
          </label>
        ))}

        <button
          type="button"
          onClick={handleAddSlot}
          >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1069_12)">
              <path
                d="M12 0.780762C9.62663 0.780762 7.30655 1.48455 5.33316 2.80313C3.35977 4.1217 1.8217 5.99585 0.913451 8.18856C0.00519943 10.3813 -0.232441 12.7941 0.230582 15.1218C0.693605 17.4496 1.83649 19.5878 3.51472 21.266C5.19295 22.9443 7.33115 24.0872 9.65892 24.5502C11.9867 25.0132 14.3995 24.7756 16.5922 23.8673C18.7849 22.9591 20.6591 21.421 21.9776 19.4476C23.2962 17.4742 24 15.1541 24 12.7808C23.9966 9.59922 22.7312 6.54897 20.4815 4.29928C18.2318 2.04959 15.1815 0.784203 12 0.780762ZM12 22.7808C10.0222 22.7808 8.08879 22.1943 6.4443 21.0955C4.79981 19.9966 3.51809 18.4349 2.76121 16.6076C2.00433 14.7803 1.8063 12.7697 2.19215 10.8299C2.578 8.89005 3.53041 7.10822 4.92894 5.70969C6.32746 4.31117 8.10929 3.35876 10.0491 2.97291C11.9889 2.58706 13.9996 2.78509 15.8268 3.54197C17.6541 4.29884 19.2159 5.58057 20.3147 7.22506C21.4135 8.86955 22 10.8029 22 12.7808C21.9971 15.432 20.9426 17.9739 19.0679 19.8486C17.1931 21.7233 14.6513 22.7779 12 22.7808ZM17 12.7808C17 13.046 16.8946 13.3003 16.7071 13.4879C16.5196 13.6754 16.2652 13.7808 16 13.7808H13V16.7808C13 17.046 12.8946 17.3003 12.7071 17.4879C12.5196 17.6754 12.2652 17.7808 12 17.7808C11.7348 17.7808 11.4804 17.6754 11.2929 17.4879C11.1054 17.3003 11 17.046 11 16.7808V13.7808H8.00001C7.73479 13.7808 7.48043 13.6754 7.2929 13.4879C7.10536 13.3003 7.00001 13.046 7.00001 12.7808C7.00001 12.5155 7.10536 12.2612 7.2929 12.0737C7.48043 11.8861 7.73479 11.7808 8.00001 11.7808H11V8.78076C11 8.51555 11.1054 8.26119 11.2929 8.07366C11.4804 7.88612 11.7348 7.78076 12 7.78076C12.2652 7.78076 12.5196 7.88612 12.7071 8.07366C12.8946 8.26119 13 8.51555 13 8.78076V11.7808H16C16.2652 11.7808 16.5196 11.8861 16.7071 12.0737C16.8946 12.2612 17 12.5155 17 12.7808Z"
                fill="#282A3A"
              />
            </g>
            <defs>
              <clipPath id="clip0_1069_12">
                <rect width="24" height="24" fill="white" transform="translate(0 0.780762)" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>

      <p style={{ fontSize: "12px", color: "#888", marginTop: "1rem" }}>
        Upload svg, png or jpg. Maximum file size is 10MB
      </p>
    </div>
  );
};

export default LogoUploader;
