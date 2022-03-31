import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import {
  getLists,
  setListToEdit,
  setListIdToDelete,
} from "../store/actions/listActions";
import { List } from "../store/constant/types";

const Lists: FC = () => {
  return (
    <div className="panel is-primary">
      <p className="panel-heading">Your lists</p>
      <div></div>
    </div>
  );
};

export default Lists;
