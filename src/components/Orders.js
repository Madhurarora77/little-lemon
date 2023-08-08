import OrderImage from "../assets/food/food4.webp";
export const Orders = () => {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={OrderImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Order Online</h1>
      </div>
    </header>
  )
}