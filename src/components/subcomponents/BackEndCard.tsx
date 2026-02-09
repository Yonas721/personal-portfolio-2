import SingleSkill from "./SingleSkill";

const BackEndCard = () => {
  return (
    <div className="flex flex-col border border-gray-200 rounded-md p-4 sm:p-8 mb-4 w-full max-w-md">
      <h3 className="font-bold  text-center">Backend developer</h3>
      <div className="flex gap-3 sm:gap-5 mt-4">
        <div>
          <SingleSkill title="PHP" level="intermediate" />
          <SingleSkill title="Laravel" level="intermediate" />
          <SingleSkill title="REST API" level="intermediate" />
        </div>
        <div>
          <SingleSkill title="MySQL" level="intermediate" />
          <SingleSkill title="Postman" level="intermediate" />
          <SingleSkill title="Redis" level="intermediate" />
        </div>
      </div>
    </div>
  );
};

export default BackEndCard;
