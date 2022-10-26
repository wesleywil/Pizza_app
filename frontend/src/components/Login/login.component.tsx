import {
  ButtonCancel,
  ButtonLoginRegister,
} from "../ButtonsForm/buttonsForm.component";

const Login = () => {
  return (
    <div className="w-11/12 xl:w-1/3 xl:h-72 md:w-3/4 mx-auto mt-4 p-2 text-xl rounded-xl bg-black/30 backdrop-blur-sm  ">
      <h1 className="text-center text-3xl xl:text-5xl text-[#f1f2f2] ">
        Login
      </h1>
      <form className="flex flex-col gap-4 mt-2">
        <input
          type="text"
          placeholder="Login"
          className="w-full pl-1 py-1 rounded-xl bg-[#cb0033]/70 text-[#f1f2f2]"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full pl-1 py-1 rounded-xl bg-[#cb0033]/70 text-[#f1f2f2]"
        />
        <div className="flex gap-2 justify-center mt-2">
          <ButtonLoginRegister title="Login" />
          <ButtonCancel />
        </div>
      </form>
    </div>
  );
};

export default Login;
