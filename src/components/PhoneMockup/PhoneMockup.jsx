
const PhoneMockup = ({ imageSrc, link, width = "280px", height = "560px", objectFit = "cover", objectPosition = 'center' }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        className="custom-phone-mockup"
        style={{
          width: width,
          height: height,
          border: "12px solid #1f2937",
          borderRadius: "36px",
          background: "#1f2937",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="custom-phone-screen"
          style={{
            width: "100%",
            height: "100%",
            background: "#0f172a",
            overflow: "hidden",
          }}
        >
          <img
            src={imageSrc}
            alt="App screenshot"
            style={{
                width: "100%",
                height: "100%",
                objectFit: objectFit,
                objectPosition: objectPosition,            
            }}
          />
        </div>
      </div>
    </a>
  );
};

export default PhoneMockup;
