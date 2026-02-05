import SingleSkill from "./SingleSkill"


const FrontEndCard = () => {
  return (
    <div className="flex flex-col border border-gray-200 rounded-md p-8 mb-4 ">
      <h3 className="font-bold mb-2 text-center">Frontend developer</h3>
      <div className="flex gap-5 mt-4">
        <div>
          <SingleSkill title="HTML" level="Basic" />
          <SingleSkill title="CSS" level="Advanced" />
          <SingleSkill title="JavsScript" level="intermediate" />
          <SingleSkill title="TypeScript" level="intermediate" />
        </div>
        <div>
          <SingleSkill title="React" level="intermediate" />
          <SingleSkill title="Tailwind" level="intermediate" />
          <SingleSkill title="Git" level="intermediate" />
          <SingleSkill title="Boostrap" level="intermediate" />
        </div>
      </div>
    </div>
  );
}

export default FrontEndCard