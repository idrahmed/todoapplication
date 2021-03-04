import React from "react";
import "./dashboard.css";
import LabelIcon from "@material-ui/icons/Label";
import Header from "../header/Header";
import { useCollectionSetter } from "./useCollectionSetter";
import { Link } from "react-router-dom";
import { IconButton, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Dashboard() {
  const { input, setInput, addCollection, lists } = useCollectionSetter();
  
  return (
    <div className="dashboard">
      <Header />
      <div className="body">
      {!lists && (
          <SkeletonTheme color="#36393e" highlightColor="#424549">
            <p className="body">
              <Skeleton count={5} className="skeleton"/>
              <Skeleton className="skeleton" height={60} />
            </p>
          </SkeletonTheme>
        )}
        {lists && lists.length === 0 && (
          <h2 className="first_list">Create your first Collection!</h2>
        )}

        {lists?.map((list) => (
          <Link to={`/dashboard/${list.key}`}>
            <div className="list" key={list.key}>
              <LabelIcon fontSize="large" />
              <div className="list_titles">
                <h2>{list.list}</h2>
                
              </div>
            </div>
          </Link>
        ))}

        <form className="list new_collection" onSubmit={addCollection}>
          {lists && (
            <TextField
              InputProps={{
                endAdornment: (
                  <IconButton onClick={addCollection} color="inherit">
                    <AddIcon color="inherit" />
                  </IconButton>
                ),
              }}
              fullWidth
              id="outlined-basic"
              label="New Collection"
              variant="filled"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
