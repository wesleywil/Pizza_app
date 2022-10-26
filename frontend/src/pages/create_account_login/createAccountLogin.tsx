import Login from "../../components/Login/login.component";
import Register from "../../components/Register/register.component";

const CreateAccountLogin = () => {
  return (
    <div className="bg_pizza">
      <div className=" bg-pink-900/40 flex flex-col justify-center size_screen_2">
        <div className="flex flex-col xl:flex-row gap-2 my-2">
          <Login />
          <Register />
        </div>
      </div>
    </div>
  );
};
export default CreateAccountLogin;
