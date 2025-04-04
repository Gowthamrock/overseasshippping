import React from "react";
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Test() {
  const  showSuccess = () => {
    toast.success("Success Notification");
  };
  return (
   <div>
    <button className="info" onClick={showSuccess}></button>
   </div>
  );
}

export default Test;
