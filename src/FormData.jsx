import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const formData = ({ setFormData }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [data, setData] = useState({
    firstName: "",
    middleName: "",
    LastName: "",
    email: "",
    phoneNumber: "",
    position: "",
    experience: "",
    URL: "",
    ManagementExp: "",
    skills: "",
    date: "",
    time: "",
  });

  const [skills, setSkills] = useState({
    JavaScript: false,
    C: false,
    Java: false,
    python: false,
  });

  const handleSkillChange = (e) => {
    const { name, checked } = e.target;

    setSkills((prevSkills) => ({
      ...prevSkills,
      [name]: checked,
    }));

    setData((prevData) => {
      const updatedSkills = checked
        ? [...prevData.skills, name]
        : prevData.skills.filter((skill) => skill !== name);
      return {
        ...prevData,
        skills: updatedSkills,
      };
    });
  };
  const onSubmit = () => {
    console.log(data);
    setFormData(data);
    navigate("/data-display");
  };

  const formatTime = (time24) => {
    if (!time24) return "";
    const [hours, minutes] = time24.split(":");
    const hoursInt = parseInt(hours, 10);
    const ampm = hoursInt >= 12 ? "PM" : "AM";
    const hours12 = hoursInt % 12 || 12;
    return `${hours12.toString().padStart(2, "0")}:${minutes} ${ampm}`;
  };

  const handleTimeChange = (e) => {
    const time24 = e.target.value;
    const time12 = formatTime(time24);
    setData((prevData) => ({
      ...prevData,
      time: time12,
    }));
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20 rounded-lg">
        <p className="text-3xl m-5">Job Application</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center items-center"
        >
          <div className=" grid grid-cols-3 p-10">
            <span>
              <input
                type="text"
                placeholder=" first Name"
                className="sm:px-3 md:px-12 lg:px-16 xl:px-20 2xl:px-32 sm:text-xs md:text-md lg:text-lg py-1 m-5 rounded-lg bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-50"
                {...register("firstName", {
                  required: "  First Name is required",
                  onChange: (e) =>
                    setData((prevData) => ({
                      ...prevData,
                      firstName: e.target.value,
                    })),
                })}
              ></input>
              {errors.firstName && (
                <p className="text-red-500 ml-5">{errors.firstName.message}</p>
              )}
            </span>
            <span>
              <input
                type="text"
                placeholder="Middle name"
                className="sm:px-3 md:px-12 lg:px-16 xl:px-20 2xl:px-32 sm:text-xs md:text-md lg:text-lg py-1 m-5 rounded-lg bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-50"
                {...register(" middleName", {
                  onChange: (e) =>
                    setData((prevData) => ({
                      ...prevData,
                      middleNameame: e.target.value,
                    })),
                })}
              ></input>
            </span>
            <span>
              <input
                type="text"
                placeholder="Last name"
                className="sm:px-3 md:px-12 lg:px-16 xl:px-20 2xl:px-32 sm:text-xs md:text-md lg:text-lg py-1 m-5 rounded-lg bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-50"
                {...register("LastName", {
                  required: " Last Name is required",
                  onChange: (e) =>
                    setData((prevData) => ({
                      ...prevData,
                      LastName: e.target.value,
                    })),
                })}
              ></input>
              {errors.LastName && (
                <p className="text-red-500 ml-5">{errors.LastName.message}</p>
              )}
            </span>
            <span>
              <input
                type="email"
                placeholder="email"
                className="sm:px-3 md:px-12 lg:px-16 xl:px-20 2xl:px-32 sm:text-xs md:text-md lg:text-lg py-1 m-5 rounded-lg bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-50"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                  onChange: (e) =>
                    setData((prevData) => ({
                      ...prevData,
                      email: e.target.value,
                    })),
                })}
              ></input>
              {errors.email && (
                <p className="text-red-500 ml-5">{errors.email.message}</p>
              )}
            </span>
            <span>
              <input
                type="tel"
                placeholder="Phone number"
                className="sm:px-3 md:px-12 lg:px-16 xl:px-20 2xl:px-32 sm:text-xs md:text-md lg:text-lg py-1 m-5 rounded-lg bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-50"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value:
                      /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
                    message: "Invalid phone number format",
                  },
                  onChange: (e) =>
                    setData((prevData) => ({
                      ...prevData,
                      phoneNumber: e.target.value,
                    })),
                })}
              ></input>
              {errors.phoneNumber && (
                <p className="text-red-500 ml-5">
                  {errors.phoneNumber.message}
                </p>
              )}
            </span>
            <div>
              <select
                className="sm:px-3 md:px-12 lg:px-16 xl:px-20 2xl:px-32  sm:text-xs md:text-md lg:text-lg py-1 m-5 rounded-lg bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-50"
                {...register("position", {
                  required: "Please select the position",
                  validate: (value) =>
                    value !== "None" || "Please select a valid position",
                  onChange: (e) =>
                    setData((prevData) => ({
                      ...prevData,
                      position: e.target.value,
                    })),
                })}
              >
                <option>Select Position</option>
                <option>Developer</option>
                <option>Designer</option>
                <option>Manager</option>
              </select>
              {errors.position && (
                <p className="text-red-500 ml-5">{errors.position.message}</p>
              )}
              {(data.position === "Developer" ||
                data.position === "Designer") && (
                <div>
                  <input
                    type="number"
                    placeholder="Experience years"
                    className="sm:px-3 md:px-5 lg:px-10 sm:text-xs md:text-md lg:text-lg py-1 m-5 rounded-lg bg-slate-300 
                focus:outline-none focus:ring-2 focus:ring-blue-50"
                    {...register("experience", {
                      required: "experience is required",
                      onChange: (e) =>
                        setData((prevData) => ({
                          ...prevData,
                          experience: e.target.value,
                        })),
                    })}
                  ></input>
                  {errors.experience && (
                    <p className="text-red-500 ml-5">
                      {errors.experience.message}
                    </p>
                  )}
                </div>
              )}

              {data.position === "Developer" && (
                <div>
                  <input
                    type="url"
                    placeholder="Portfolio URL"
                    className="sm:px-3 md:px-5 lg:px-10 sm:text-xs md:text-md lg:text-lg py-1 m-5 rounded-lg bg-slate-300 
                focus:outline-none focus:ring-2 focus:ring-blue-50"
                    {...register("URL", {
                      required: "URL is required",
                      onChange: (e) =>
                        setData((prevData) => ({
                          ...prevData,
                          URL: e.target.value,
                        })),
                    })}
                  />
                  {errors.URL && (
                    <p className="text-red-500 ml-5">{errors.URL.message}</p>
                  )}
                </div>
              )}

              {data.position === "Manager" && (
                <div>
                  <textarea
                    placeholder="Management Experience "
                    className="px-16 resize-none py-1 m-5 rounded-lg bg-slate-300 
                focus:outline-none focus:ring-2 focus:ring-blue-50"
                    {...register("ManagementExp", {
                      required: "Experience  is required",
                      onChange: (e) =>
                        setData((prevData) => ({
                          ...prevData,
                          ManagementExp: e.target.value,
                        })),
                    })}
                  />
                  {errors.ManagementExp && (
                    <p className="text-red-500 ml-5">
                      {errors.ManagementExp.message}
                    </p>
                  )}
                </div>
              )}
            </div>
            <div className="ml-5">
              <h3 className=" sm:text-xs md:text-md lg:text-lg ml-5 font-bold">
                Additional Skills
              </h3>
              <div className="flex flex-col ml-5">
                {Object.keys(skills).map((skill) => (
                  <div className="ml-2">
                    <input
                      type="checkbox"
                      name={skill}
                      checked={skills[skill]}
                      className="transform scale-150 p-5"
                      onChange={handleSkillChange}
                    />{" "}
                    <span className="sm:text-xs md:text-md lg:text-lg p-2 ">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ml-5">
              <p className=" sm:text-xs md:text-md lg:text-lg ml-5 font-bold">
                Preffered Interview Time
              </p>
              <span>
                <input
                  type="date"
                  className="sm:px-3 md:px-5 lg:px-10 sm:text-xs md:text-md lg:text-lg py-1 m-5 rounded-lg bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-50"
                  {...register("date", {
                    required: "Preferred interview date is required",
                    onChange: (e) =>
                      setData((prevData) => ({
                        ...prevData,
                        date: e.target.value,
                      })),
                  })}
                />
                {errors.date && (
                  <p className="text-red-500 ml-5">{errors.date.message}</p>
                )}
              </span>
              <span>
                <input
                  type="time"
                  placeholder="set time"
                  className="sm:px-3 md:px-5 lg:px-10 sm:text-xs md:text-md lg:text-lg py-1 m-5 rounded-lg bg-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-50"
                  {...register("time", {
                    required: "Preferred interview time is required",
                    onChange: handleTimeChange,
                  })}
                />
                {errors.time && (
                  <p className="text-red-500 ml-5">{errors.time.message}</p>
                )}
              </span>
            </div>
          </div>
          <button className="bg-white py-2 px-5  rounded-lg bg-opacity-50 hover:bg-opacity-100 m-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default formData;
