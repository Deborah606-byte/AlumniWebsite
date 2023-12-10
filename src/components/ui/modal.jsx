const styles = {
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    position: "relative",
    background: "white",
    padding: "20px",
    borderRadius: "2px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },

  closebtn: {
    cursor: "pointer",
    position: "absolute",
    top: 3,
    right: 10,
  },
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.root}>
      <div style={styles.modal}>
        <b style={styles.closebtn} onClick={onClose}>
          X
        </b>
        {children}
      </div>
    </div>
  );
};

export default Modal;
