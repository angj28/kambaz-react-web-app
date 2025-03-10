import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { BsSlashCircle } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";
import ProtectedFaculty from "../../ProtectedFaculty";
export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="wd-modules-controls" className="d-flex flex-nowrap text-nowrap">
      <ProtectedFaculty
        studentAccess={
          <>
            <Button
              size="lg"
              className="me-1 float-end bg-white border-white"
              id="wd-collapse-all-invis-btn"
            >
              Collapse All
            </Button>
            <Button
              size="lg"
              className="me-1 float-end bg-white border-white"
              id="wd-collapse-all-invis-btn"
            >
              View Progress
            </Button>
          </>
        }
      >
        <Button
          variant="danger"
          size="lg"
          className="me-1 float-end"
          id="wd-add-module-btn"
          onClick={handleShow}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Module
        </Button>
        <Dropdown className="float-end me-2">
          <Dropdown.Toggle
            variant="secondary"
            size="lg"
            id="wd-publish-all-btn"
          >
            <GreenCheckmark /> Publish All
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item id="wd-publish-all">
              <GreenCheckmark /> Publish All
            </Dropdown.Item>
            <Dropdown.Item id="wd-publish-all-modules-and-items">
              <GreenCheckmark /> Publish all modules and items
            </Dropdown.Item>
            <Dropdown.Item id="wd-publish-modules-only">
              <GreenCheckmark /> Publish modules only
            </Dropdown.Item>
            <Dropdown.Item id="wd-unpublish-all-modules-and-items">
              <BsSlashCircle /> Unpublish all modules
            </Dropdown.Item>
            <Dropdown.Item id="wd-unpublish-modules-only">
              <BsSlashCircle /> Unpublish modules only
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ProtectedFaculty>
      <Button
        size="lg"
        className="me-1 float-end btn-secondary"
        id="wd-collapse-all-btn"
      >
        Collapse All
      </Button>
      <Button
        size="lg"
        className="me-1 float-end btn-secondary"
        id="wd-collapse-all-btn"
      >
        View Progress
      </Button>
      <ModuleEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}
