import { useEffect, useState } from "react";
import db from "../../firebase";
import firebase from "firebase";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

export function useNewTodo() {
  const [input, setInput] = useState("");
  const { id } = useParams();
  const user = localStorage.getItem("user");
  const [todos, setTodos] = useState(null);
  const [name, setName] = useState('')
  const history = useHistory();

  useEffect(() => {
    if (id) {
     db.collection("users").doc(user).collection("lists").doc(id).get().then((doc) => {
      setName(doc.data()?.list)
    })}
    return () => {
    }
  }, [id])

  useEffect(() => {
    if (id) {
    db.collection("users")
      .doc(user)
      .collection("lists")
      .doc(id)
      .collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            key: doc.id,
            todo: doc.data().todo,
            completed: doc.data().completed,
          }))
        );
      });
    }
  }, [id, user]);

  const onCheck = (todo) => {
    if (todo.completed == false) {
      db.collection("users")
        .doc(user)
        .collection("lists")
        .doc(id)
        .collection("todos")
        .doc(todo.key)
        .update({ completed: true });
    } else {
      db.collection("users")
        .doc(user)
        .collection("lists")
        .doc(id)
        .collection("todos")
        .doc(todo.key)
        .update({ completed: false });
    }
  };

  const onDelete = (todo) => {
    db.collection("users")
      .doc(user)
      .collection("lists")
      .doc(id)
      .collection("todos")
      .doc(todo.key)
      .delete();
  };

  const addTodo = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(user)
      .collection("lists")
      .doc(id)
      .collection("todos")
      .add({
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        completed: false,
      });
    setInput("");
  };

  const deleteCol = async() => {
    await db.collection("users").doc(user).collection("lists").doc(id).delete().then(
      history.replace("/dashboard")
    )

  }

  return { input, setInput, addTodo, todos, onCheck, onDelete, deleteCol, name };
}
