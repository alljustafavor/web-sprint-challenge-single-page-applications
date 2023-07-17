import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import './index.css';
import Navbar from './Comps/Navbar';
import Home from "./Comps/Home";
import Form from "./Comps/Form";
import schema from './validation/formSchema';
import * as yup from 'yup';
import axios from "axios";

const initialFromValues = {
  name: '',
  size: '',
  sauce: '',
  topping: '',
  special: ''
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  topping: '',
  special: ''
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFromValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        console.log(res.data)
        setFormValues(res.data);
      })
      .catch(err => {
        console.log(err)
        debugger
      })
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: (formValues.name && formValues.name.trim()) || '',
      size: (formValues.size && formValues.size.trim()) || '',
      sauce: (formValues.sauce && formValues.sauce.trim()) || '',
      topping: ['pepperoni', 'sausage', 'bacon', 'chicken'].filter(hob => formValues[hob]),
      special: formValues.special || ''
    }
    postNewOrder(newOrder)
  }

  return (
    <>
      <Routes>
        <Route path="/"  element={<><Navbar /> <Home /></>} />
        <Route path="/pizza" element={<><Navbar /> <Form values={formValues} change={inputChange} submit={formSubmit} errors={formErrors}/></>} />
      </Routes>
    </>
  );
};
export default App;
