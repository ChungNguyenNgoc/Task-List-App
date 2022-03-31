import React, { FC, useState, FormEvent } from "react";
import { useDispatch } from "react-redux";

import { List } from "../store/constant/types";
import { addList } from "../store/actions/listActions";
import { setNotification } from "../store/actions/notificationActions";

const CreateNewList: FC = () => {
  const [listName, setListName] = useState("");
  const dispatch = useDispatch();

  const inputChangHandler = (e: FormEvent<HTMLInputElement>) => {
    setListName(e.currentTarget.value);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (listName.trim() === "") {
      return alert("List name is requied!");
    }

    const newList: List = {
      id: `list-${new Date().getTime()}`,
      name: listName,
      tasks: [],
    };

    dispatch(addList(newList));
    dispatch(setNotification(`New list("${newList.name}") created!`));
    setListName("");
  };

  return (
    <div className="card mb-5">
      <div className="card-header">
        <p className="card-header-title">Create New List</p>
      </div>
      <div className="card-content">
        <form onSubmit={submitHandler}>
          <div className="field">
            <label className="label">List Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                placeholder="List Name"
                name="listName"
                value={listName}
                onChange={inputChangHandler}
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-primary">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewList;
