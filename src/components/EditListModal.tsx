import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { List } from "../store/constant/types";
import { setListToEdit, updateList } from "../store/actions/listActions";
import { setNotification } from "../store/actions/notificationActions";

interface EditListModalProps {
  list: List;
}

const EditListModal: FC<EditListModalProps> = ({ list }) => {
  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <form className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Edit List</p>
          <button type="button" className="delete"></button>
        </header>
        <div className="modal-card-body">
          <div className="field">
            <label className="label">List Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                name="listName"
                placeholder="List Name"
              />
            </div>
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

export default EditListModal;
