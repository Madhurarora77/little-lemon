import LoginImage from "../assets/food/food4.webp";
export const Login = () => {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={LoginImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Login</h1>
      </div>
    </header>
  )
}