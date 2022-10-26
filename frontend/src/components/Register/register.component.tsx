import {
  ButtonCancel,
  ButtonLoginRegister,
} from "../ButtonsForm/buttonsForm.component";
const Register = () => {
  return (
    <div className="w-11/12 xl:w-1/3 md:w-3/4 mx-auto mt-4 p-2 xl:p-4 text-xl rounded-xl  bg-black/30 backdrop-blur-sm">
      <h1 className="text-center text-3xl xl:text-5xl text-[#f1f2f2] ">
        Create Account
      </h1>
      <form className="flex flex-col gap-4 mt-2">
        <input
          type="text"
          placeholder="Username"
          className="w-full pl-1 py-1 rounded-xl bg-[#cb0033]/70 text-[#f1f2f2]"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full pl-1 py-1 rounded-xl bg-[#cb0033]/70 text-[#f1f2f2]"
        />
        <input
          type="tel"
          placeholder="Cellphone"
          className="w-full pl-1 py-1 rounded-xl bg-[#cb0033]/70 text-[#f1f2f2]"
        />
        <input
          type="text"
          placeholder="First Name"
          className="w-full pl-1 py-1 rounded-xl bg-[#cb0033]/70 text-[#f1f2f2]"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full pl-1 py-1 rounded-xl bg-[#cb0033]/70 text-[#f1f2f2]"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full pl-1 py-1 rounded-xl bg-[#cb0033]/70 text-[#f1f2f2]"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full pl-1 py-1 rounded-xl bg-[#cb0033]/70 text-[#f1f2f2]"
        />
        <div className="flex gap-2 justify-center mt-2">
          <ButtonLoginRegister title="Register" />
          <ButtonCancel />
        </div>
      </form>
    </div>
  );
};

export default Register;
