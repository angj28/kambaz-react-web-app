import { Modal, Button } from "react-bootstrap";
export default function DeleteAssignmentModal({
  show,
  handleClose,
  assignmentId,
  deleteThisAssignment,
}: {
  show: boolean;
  handleClose: () => void;
  assignmentId: string;
  deleteThisAssignment: (assignmentId: string) => void;
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Do you want to delete this assignment?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            deleteThisAssignment(assignmentId);
            handleClose();
          }}
        >
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
