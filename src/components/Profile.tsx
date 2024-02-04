const Profile = () => {
  return (
    <div className="container">
      <div className="bg-[url('/blurBg.jpg')] bg-no-repeat bg-cover rounded-xl">
        <div className="flex items-start py-7 rounded-xl bg-blur backdrop-filter backdrop-blur-md px-10">
          <img
            src="/jatin.jpg"
            alt="Jatin"
            className="rounded-full w-28 h-28 p-0.5 bg-btnBg"
          />
          <span className="ps-5 pt-5">
            <p className="text-3xl font-bold">Jatin Panesiya</p>
            <p className="text-slate-300 font-bold">Web Developer</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
