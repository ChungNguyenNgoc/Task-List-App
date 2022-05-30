import React, { FC } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import CreateNewList from "./components/CreateNewList";
import DeleteListModal from "./components/DeleteListModal";
import EditListModal from "./components/EditListModal";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Notification from "./components/Notification";
import Sidebar from "./components/Sidebar";
import { RootState } from "./store/store";

const App: FC = () => {
  const notificationMsg = useSelector(
    (state: RootState) => state.notification.message,
  );
  const listIdToDelete = useSelector(
    (state: RootState) => state.listRdr.listIdToDelete,
  );
  const listToEdit = useSelector(
    (state: RootState) => state.listRdr.listToEdit,
  );

  return (
    <div className="App">
      <Header
        title="Task List App"
        subtitle="Create some lists and add some tasks to each list"
      />
      <div className="container px-5">
        <div className="columns">
          <Sidebar />
          <MainContent />
        </div>
      </div>

      <Notification msg={notificationMsg} />
      {listIdToDelete && <DeleteListModal listId={listIdToDelete} />}
      {listToEdit && <EditListModal list={listToEdit} />}
    </div>
  );
};

export default App;
