import { skills } from "../constants";
import CardHeading from "./CardHeading";

const Skills = () => {
  return (
    <div className="container my-10">
      <CardHeading title="My Experties" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5">
        {skills.map((data, key) => (
          <div className="bg-[#2a2934] rounded mt-10 py-5 px-5" key={key}>
            <div className="text-xl text-gray-300  py-3 mb-5">
              {data.category}
            </div>
            <div className="flex flex-wrap gap-4">
              {data.skills.map((data, key) => (
                <div
                  key={key}
                  className="bg-[#14131a] gap-2 cursor-pointer  rounded-[10px] p-2 flex items-center flex-wrap"
                  style={{
                    border: `1px solid ${data.color}`,
                    color: `${data.color}`,
                  }}
                >
                  <div className="px-2 text-gray-300">{data.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
