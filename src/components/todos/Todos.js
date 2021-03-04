import React from "react";
import Header from "../header/Header";
import "./todos.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import {
  TextField,
  Button,
  FormControlLabel,
  IconButton,
  Checkbox,
} from "@material-ui/core";
import { useNewTodo } from "./useNewTodo";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Todos() {
  const {input,setInput,addTodo,todos,onCheck,onDelete,deleteCol,name,} = useNewTodo();

  return (
    <div className="todos_page">
      <Header />
      <div className="todo_body">
        <div className="top_row">
          <Link to="/dashboard">
            <Button color="inherit">
              <ArrowBackIosIcon />
            </Button>
          </Link>
          <h2>{name}</h2>
          <Button onClick={deleteCol} className="delete_col" color="inherit">
            <DeleteForeverIcon />
          </Button>
        </div>

        <div className="main">
          {!todos && (
            <SkeletonTheme color="#36393e" highlightColor="#424549">
              <p>
                <Skeleton style={{marginBottom: '10px'}} height={40} width={200} />
                <Skeleton style={{marginBottom: '4px'}} count={5} height={40} />
                <Skeleton style={{marginTop: '15px'}} count={1} height={60} />
              </p>
            </SkeletonTheme>
          )}
          {todos && (
            <h3>
              Tasks remaining : {todos.filter((todo) => !todo.completed).length}
            </h3>
          )}

          {todos?.map((todo) => (
            <div onClick={() => onCheck(todo)}
              key={todo.key}
              className="todo"
              style={{
                opacity: todo.completed ? "0.5" : "",
                textDecoration: todo.completed ? "line-through" : "",
              }}
            >
              <FormControlLabel
                
                control={<Checkbox />}
                color="inherit"
                label={todo.todo}
                checked={todo.completed}
              />

              <IconButton
                color="inherit"
                aria-label="delete"
                onClick={() => onDelete(todo)}
              >
                <DeleteIcon color="inherit" />
              </IconButton>
            </div>
          ))}

          <form className="new_todo" onSubmit={addTodo}>
            {todos && (
              <TextField
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={addTodo} color="inherit">
                      <AddIcon color="inherit" />
                    </IconButton>
                  ),
                }}
                fullWidth
                id="outlined-basic"
                label="New Task"
                variant="filled"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Todos;
