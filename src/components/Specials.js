import MenuImage from "../assets/food/food4.webp";
export const Specials = () => {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={MenuImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>Menu</h1>
      </div>
    </header>
  )
}