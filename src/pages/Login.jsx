
import LoginForm from "../Components/LoginForm";
import MainImg from "../assets/images/connection.jpg";
const Login = () => {
  return (
    <section className="authentification">
      <div className="content-box">
        <LoginForm />
      </div>
      <div className="img-box">
        <img src={MainImg} />
        <div className="text-content">
          
        </div>
      </div>
    </section>
  );
};

export default Login;
