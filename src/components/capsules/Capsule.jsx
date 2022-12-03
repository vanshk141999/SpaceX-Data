import Modal from "./Modal";

function Capsule(props) {
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white w-96">
          <div className="p-6 text-center">
            <h5 className="text-gray-900 text-xl mb-2 font-bold uppercase">
              {props.title} - {props.id}
            </h5>
            <h6 className="mb-2">
              <span className="font-medium uppercase">Lauch Date - </span>
              {props.date}
            </h6>
            <h6 className="mb-2">
              <span className="font-medium uppercase">Lauch Time - </span>{" "}
              {props.time}
            </h6>
            <Modal
              target={props.id}
              currentTitle={props.title}
              currentDetails={props.details}
              currentStatus={props.status}
              currentLandings={props.landings}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Capsule;
