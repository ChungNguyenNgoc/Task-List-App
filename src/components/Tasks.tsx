import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Task } from "../store/constant/types";
import { setTaskToDelete, setTaskToEdit } from "../store/actions/listActions";
import { RootState } from "../store/store";

interface TasksProps {
  tasks: Task[];
}

const Tasks: FC<TasksProps> = ({ tasks }) => {
  const tasksTable = (
    <table className="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th>Task</th>
          <th className="has-text-centered">Edit</th>
          <th className="has-text-centered">Delete</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );

  return (
    <section className="section">
      <h2 className="is-size-4 has-text-centered">
        List of tasks in selected list
      </h2>
      {tasks.length === 0 ? (
        <p className="py-4 has-text-centered">No Tasks</p>
      ) : (
        tasksTable
      )}
    </section>
  );
};

export default Tasks;
