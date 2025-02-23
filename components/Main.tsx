import Image from "next/image";

const Main = () => {
  return (
    <div id="main">
      <button type="button" className="main-btn">
          <div className="main-btn-div"></div>
          Available
        </button>

        <Image 
          src="/home.svg"
          alt="home-quote"
          width={1177}
          height={235}
          className="md:w-3/4 sm:w-3/4"
        />

        <h2 className="main-h2">FRONTEND DEVELOPER & UI/UX DESIGNER</h2>
    </div>
  );
}

export default Main;
