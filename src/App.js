import { motion } from "framer-motion"

function App() {
  return (
    <div>
      {/* <p style={{ color: "blue" }}>hi..</p> */}
      <motion.button
        className="save-button"
        onClick={() => null}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >Launch modal</motion.button>
    </div>
  );
}

export default App;
