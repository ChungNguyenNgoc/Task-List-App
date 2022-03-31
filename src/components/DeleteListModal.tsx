import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import {
  getListById,
  deleteList,
  setListIdToDelete,
} from "../store/actions/listActions";
import { setNotification } from "../store/actions/notificationActions";

interface DeleteListModalProps {
  listId: string;
}

const DeleteListModal: FC<DeleteListModalProps> = ({ listId }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head has-text-centered">
          <p className="modal-card-title">
            Are you sure you want to delete this list ?
          </p>
        </header>
        <div className="modal-card-body">
          <h2 className="is-size-5 has-text-centered">
            All tasks related to this list will be deleted
          </h2>
          <div className="content"></div>
        </div>
        <footer className="modal-card-foot">
          <button type="button" className="button is-danger">
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

export default DeleteListModal;
