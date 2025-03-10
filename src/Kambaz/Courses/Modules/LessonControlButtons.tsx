import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import ProtectedFaculty from "../../ProtectedFaculty";
export default function LessonControlButtons() {
  return (
    <ProtectedFaculty studentAccess={<></>}>
      <div className="float-end">
        <GreenCheckmark />
        <IoEllipsisVertical className="fs-4" />
      </div>
    </ProtectedFaculty>
  );
}
