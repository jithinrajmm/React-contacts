import { useForm } from "react-hook-form";
import { Redirect } from "react-router";
import {useState} from "react"

export default function Form({formData}) {
  const [phonelength, setphonelength] = useState('10')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    trigger,
  } = useForm();
  const onSubmit = (data) => {
    data.id = Date.now();
    data.fav = false;
    formData(data)
    console.log(data);
    reset();
  };
  var inputBox = document.getElementById("inputBox");

var invalidChars = [
  "-",
  "+",
  "e",
];


  return (
    <div className="shadow-lg p-3 mb-5  rounded tran mt-3 containers ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group my-2 ">
          <input
            type="text"
            className={errors.name ? "form-control border" : "form-control bgInput" }
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
            {...register("name", {
              required: "this feild is required",
              pattern: {
                value: /^[a-zA-Z ]\S+$/,
                message: "name shoul be characters",
              },
              maxLength: { value: 16, message: "Maximum length is 16" },
              minLength:{value:3,message:"Minimum length is 3"}
            })}
            onKeyUp={() => {
              trigger("name");
            }}
          />
          {errors.name && (
            <small id="emailHelp" className="form-text text-left text-danger">
              {errors.name.message}
            </small>
          )}
        </div>

        <div className="form-group my-2 ">
          <input
            type="number"
            className={errors.phonenumber ? "form-control bgInput border": "form-control bgInput"}
            id="exampleInputPassword1"
            placeholder="phone number"
            {...register("phonenumber", {
              required: "Phone number is mandatory",
              pattern:{value:/^([+]\d{2})?\d*$/,message:"only numbers are allowed"}
            })}
            onKeyDown={(e) => {
              trigger("phonenumber");
              setphonelength(e.target.value.length)
              if (invalidChars.includes(e.key)) {
                e.preventDefault();
              }
              
            }}
          />
          {errors.phonenumber ? 
            <small id="emailHelp" className="form-text text-left text-danger ">
              {errors.phonenumber.message}
            </small>
          : phonelength < 10 ? <small id="emailHelp" className="form-text text-left text-danger ">
          10 numbers required you gave {phonelength}
        </small>: phonelength>10 ? <small id="emailHelp" className="form-text text-left text-danger ">
              only 10 numbers are allowed you gave {phonelength}
            </small>: null}
        </div>

        <div className="form-group my-2">
          <input
            type="email"
            className={errors.email ? "form-control bgInput border": "form-control bgInput"}
            id="exampleInputPassword1"
            placeholder="Email"
            {...register("email", { required: "Email is mandatory",pattern:{value:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"not a valid email"} })}
            onKeyUp={() => {
              trigger("email");
            }}
          />
          {errors.email && (
            <small
              id="emailHelp"
              className=" my-2 form-text text-left text-danger "
            >
              {errors.email.message}
            </small>
          )}
        </div>

        <button type="submit" className=" my-2  btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
}
