const Profile = () => {
  return (
    <div className="container">
      <div className="bg-[url('/blurBg.jpg')] bg-no-repeat bg-cover rounded-xl">
        <div className="375:flex justify-center  375:justify-normal grid items-start py-7 rounded-xl bg-blur backdrop-filter backdrop-blur-md px-3 500:px-10">
          <img
            src="/jatin.jpg"
            alt="Jatin"
            className="rounded-full 375:mx-0 mx-auto w-20 h-20 450:w-28 450:h-28 p-1 bg-gradient-to-br from-btnBg via-green-500 to-blue-500"
          />
          <span className="ps-5 pt-3 450:pt-5 text-center 375:text-start">
            <p className="text-2xl 450:text-3xl font-bold">Jatin Panesiya</p>
            <p className="font-bold">Web Developer</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
