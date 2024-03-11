const CardHeading = ({ title }: { title: string }) => {
  return (
    <div className="text-4xl font-bold heading-font flex mt-10 pt-5">
      <p className="px-1 bg-gradient-to-b from-btnBg via-btnBg/70 to-green-500 rounded-2xl mr-5" />
      <p className="py-2">{title}</p>
    </div>
  );
};

export default CardHeading;
