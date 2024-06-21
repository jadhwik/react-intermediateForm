import { useNavigate } from "react-router-dom";
import tick from "./assets/checked.png";

const dataDisplay = ({ formData }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  if (!formData) {
    return (
      <div className="flex flex-col items-center mt-10">
        <p className="text-lg">No data available</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
          onClick={handleBack}
        >
          Go Back to Form
        </button>
      </div>
    );
  }

  console.log(formData);

  return (
    <div>
      <div className="flex flex-row items-center gap-5">
        <p className="text-5xl">Application Sent</p>
        <img src={tick} className="w-14"></img>
      </div>

      <div className="flex flex-col bg-white px-10 items-center mt-10 space-y-4 text-lg ">
        {formData && (
          <div className="flex flex-col items-start px-10 py-5 gap-5 ">
            <p className="text-center">
              <span className="text-red-500"> Name : </span>
              {formData.firstName}
              {formData.middleName && ` ${formData.middleName} `}
              {formData.LastName}
            </p>
            <p className="text-center">
              {" "}
              <span className="text-red-500"> Email : </span> {formData.email}
            </p>
            <p className="text-center">
              {" "}
              <span className="text-red-500"> Phone Number : </span>
              {formData.phoneNumber}
            </p>
            <p className="text-center">
              {" "}
              <span className="text-red-500">Position : </span>
              {formData.position}
            </p>
            {formData.position === "Developer" && (
              <div className="flex flex-col gap-5">
                <p>
                  {" "}
                  <span className="text-red-500">Years of Experience : </span>
                  {formData.experience}
                </p>
                <p>
                  {" "}
                  <span className="text-red-500">Profile URL :</span>{" "}
                  {formData.URL}
                </p>
              </div>
            )}
            {formData.position === "Designer" && (
              <p>
                {" "}
                <span className="text-red-500"> Years of Experience:</span>
                {formData.experience}
              </p>
            )}
            {formData.position === "Manager" && (
              <p>
                {" "}
                <span className="text-red-500"> Management Experienec:</span>
                {formData.ManagementExp}
              </p>
            )}
            <div className="flex flex-row">
              <p className="text-red-500">Skills are : </p>
              {formData.skills && formData.skills.length > 0 ? (
                formData.skills.map((item, index) => (
                  <p key={index}>
                    {item}
                    {index < formData.skills.length - 1 && ", "}
                  </p>
                ))
              ) : (
                <p>No skills listed</p>
              )}
            </div>
            <p>
              {" "}
              <span className="text-red-500"> Preffered Date : </span>
              {formData.date}
            </p>

            <p>
              {" "}
              <span className="text-red-500"> Preffered Time : </span>
              {formData.time}
            </p>
          </div>
        )}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
        onClick={handleBack}
      >
        Go Back to Form
      </button>
    </div>
  );
};

export default dataDisplay;
