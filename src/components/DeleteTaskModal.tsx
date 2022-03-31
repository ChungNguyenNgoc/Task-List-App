import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { Task, List } from "../store/constant/types";
import { unsetTaskToDelete, deleteTask } from "../store/actions/listActions";
import { setNotification } from "../store/actions/notificationActions";

interface DeleteTaskModalProps {
  taskToDelete: {
    task: Task;
    list: List;
  };
}

const DeleteTaskModal: FC<DeleteTaskModalProps> = ({
  taskToDelete: { task, list },
}) => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head has-text-centered">
          <p className="modal-card-title">
            Are you sure you want to delete this task ?
          </p>
        </header>
        <footer className="modal-card-foot">
          <button type="submit" className="button is-danger">
            Delete
          </button>
          <button type="button" className="button">
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default DeleteTaskModal;
