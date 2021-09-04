import GaugeSpeed from "./GaugeSpeed";
import Collaborators from "./Collaborators";
import ActivitiesComponents from "./ActivitiesComponent";

function Activities() {
  return (
    <div className="bg-bg-white ml-5 flex-auto px-7 py-5">
      <div className="flex ">
        <div className=" w-3/4">
          activities
          <ActivitiesComponents />
        </div>
        <div className="w-1/4 h-full">
          <div className="h-2/5">
            <GaugeSpeed />
          </div>
          <hr className='text-border' />
          <Collaborators />
        </div>
      </div>
      <script src="ActivityComponent.js"></script>
    </div>
  );
}

export default Activities;
