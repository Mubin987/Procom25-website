import { motion } from "framer-motion";

const ImageUplift = ({img, imgStyle, alt, height, width}) => {
  return (
    <motion.div
      whileHover={{
        y: -10, // Moves the container upward on hover
        transition: { duration: 0.3, ease: "easeOut" }, // Smooth and responsive
      }}
    >
      <motion.img
        src={img}
        alt={alt}
        className={imgStyle}
        height={height}
        width={width}
        whileHover={{
          scale: 1.2, // Slightly enlarges the image on hover
          transition: { duration: 0.2, ease: "easeOut" },
        }}
      />
    </motion.div>
  );
};

export default ImageUplift;