import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastConfigContainer = () => {
  return (
    <ToastContainer
      position={"top-right"}
      pauseOnHover
      hideProgressBar={false}
      theme="colored"
      toastStyle={{
        zIndex: 99999,
      }}
    />
  );
};

export default ToastConfigContainer;
