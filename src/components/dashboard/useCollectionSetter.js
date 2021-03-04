import { useEffect, useState } from "react";
import db from "../../firebase";
import firebase from "firebase";

export function useCollectionSetter() {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState(null);
  const user = localStorage.getItem("user");


  useEffect(() => {
    db.collection("users")
      .doc(user)
      .collection("lists")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setLists(
          snapshot.docs?.map((doc) => ({ key: doc.id, list: doc.data().list }))
        );
      });
  }, [user]);

  
  const addCollection = (e) => {
    e.preventDefault();
    if (input) {
      db.collection("users").doc(user).collection("lists").add({
        list: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    setInput("");
  };

  return { input, setInput, addCollection, lists };
}
