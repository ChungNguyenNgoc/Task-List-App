import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { Task, List } from "../store/constant/types";
import { unsetTaskToDelete, deleteTask } from "../store/actions/listActions";
import { setNotification } from "../store/actions/notificationActions";

interface EditTaskModalProps {
  taskToEdit: {
    task: Task;
    list: List;
  };
}

const EditTaskModal: FC<EditTaskModalProps> = ({
  taskToEdit: { task, list },
}) => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <form className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit Task</p>
          <button type="button" className="delete"></button>
        </header>
        <div className="modal-card-body">
          <div className="field">
            <label className="label">Task Name</label>
            <div className="control">
              <input type="text" className="input" placeholder="Task Name" />
            </div>
          </div>
          <div className="field">
            <label className="label">Complete task</label>
            <label className="checkbox">
              <input type="checkbox" /> Complete
            </label>
          </div>
        </div>
        <footer className="modal-card-foot">
          <button type="submit" className="button is-success">
            Save changes
          </button>
          <button type="button" className="button">
            Cancel
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EditTaskModal;
