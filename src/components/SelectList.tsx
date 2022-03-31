import React, { FC, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { List } from "../store/constant/types";
import { setSelectedList } from "../store/actions/listActions";
import { RootState } from "../store/store";

const SelectList: FC = () => {
  return (
    <section>
      <h2 className="is-size-4 has-text-centered mb-4">Choose a list</h2>
      <div className="field mb-5">
        <div className="control has-icons-left">
          <div className="select fullwidth">
            <select className="fullwidth">
              <option value="">Select List</option>
            </select>
          </div>
          <div className="icon is-small is-left">
            <i className="fas fa-list"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectList;
