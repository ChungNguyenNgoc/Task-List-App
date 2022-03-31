import React, { FC, useState, FormEvent } from "react";

import { List, Task } from "../store/constant/types";

interface AddNewTaskProps {
  list: List;
}

const AddNewTask: FC<AddNewTaskProps> = ({ list }) => {
  return (
    <section className="section">
      <h2 className="is-size-4 has-text-centered">
        Add new task to selected field
      </h2>
      <form>
        <div className="field">
          <label className="label">Task Name</label>
          <div className="control">
            <input type="text" className="input" placeholder="Add Task" />
          </div>
          <div className="control mt-4">
            <input
              type="submit"
              value="Add New Task"
              className="button is-primary"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddNewTask;
