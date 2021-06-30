import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { API_URL } from "../constants";
import axios from "axios";

function PortfolioForm(props){
  // const [pk, setPk] = useState(0);
  // const [title,setTitle] = useState("");
  // const [place,setPlace] = useState("");
  // const [description,setDescription] = useState("");
  // const [isWork, setIsWork] = useState(false);

  const [state, setState] = useState({
      pk: 0,
      title: "",
      place: "",
      description: "",
      isWork: false
  })

  const refreshList = () => {
      if(props.portfolio){
        setState(props.portfolio);
      }
    };

  useEffect(()=>{
    refreshList()
  },[]) //notice the empty array here: only call once "on mount", not on every re-rendering

  const onChange = e => {
    if(e.target.type === "checkbox"){
      e.target.value = e.target.checked;
    }
    setState({ ...state, [e.target.name]: e.target.value }); // only update some field, keep the remaining fiels (...state)
  }

  const createPortfolio = e => {
    e.preventDefault();
    // console.log(state);
    axios.post(API_URL, state).then((res) => {
      props.resetState();
      props.toggle();
    });
  };

  const editPortfolio = e => {
    e.preventDefault();
    // console.log(state);
    axios.put(API_URL + state.pk, state).then((res) => {
      props.resetState();
      props.toggle();
    });
  };

  const defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  return (
    <Form onSubmit={props.portfolio ? editPortfolio : createPortfolio}>
      <FormGroup>
        <Label for="title">Title:</Label>
        <Input
          type="text"
          name="title"
          onChange={onChange}
          value={defaultIfEmpty(state.title)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="place">Place:</Label>
        <Input
          type="text"
          name="place"
          onChange={onChange}
          value={defaultIfEmpty(state.place)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description:</Label>
        <Input
          type="text"
          name="description"
          onChange={onChange}
          value={defaultIfEmpty(state.description)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="isWork">Is a real work:</Label>
        <Input
          type="checkbox"
          name="isWork"
          checked={state.isWork}
          onChange={onChange}
          value={defaultIfEmpty(state.isWork)}
        />
      </FormGroup>
      <Button>Send</Button>
    </Form>
  );
}

export default PortfolioForm;