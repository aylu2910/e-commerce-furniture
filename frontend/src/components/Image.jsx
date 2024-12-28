import Placeholder from "../assets/placeholder.jpg";
export const Image = ({ src = Placeholder, title, alt, style }) => {
  return (
    <div
      style={{
        display: "flex",
        placeItems: "center",
        border: "1px solid lightgray",
        minHeight: "200px",
        backgroundColor: "white",
      }}
    >
      <img
        src={src}
        alt={alt}
        title={title}
        style={{ width: "100%", ...style }}
      />
    </div>
  );
};
