const CardHeading = ({ title }: { title: string }) => {
  return (
    <div className="text-5xl font-bold heading-font flex">
      <p className="px-1 bg-gradient-to-b from-btnBg via-btnBg/70 to-green-500 rounded-2xl mr-5" />
      <p className="py-3">{title}</p>
    </div>
  );
};

export default CardHeading;
