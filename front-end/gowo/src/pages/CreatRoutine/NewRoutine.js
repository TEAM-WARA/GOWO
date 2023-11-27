import React from "react";
import "./NewRoutine.css";
import NewRoutineComponent from "./NewRoutineComponent";
import { useLocation } from 'react-router-dom';

function NewRoutine() {
  const location = useLocation();
  const routineData = location.state?.routineData || {};


  return (
    <>
      <NewRoutineComponent information={routineData}></NewRoutineComponent>
    </>
  );
}

export default NewRoutine;
