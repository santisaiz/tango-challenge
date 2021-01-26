import background from "..//home_image.jpg";

const Home = () => {
  return (
    <div>
      <h5>Welcome, this is an income tax calculator. </h5>
      <h5>Please press 'Tax Calculator' menu to start procesing incomes</h5>
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          width: "1000px",
          height: "1000px",
        }}
      ></div>
    </div>
  );
};
export default Home;
