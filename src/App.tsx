import { useState } from 'react';
import './App.css';
import Form from './Form';
import { Button } from './components/ui/button';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export type TFormData = {
  name: string;
  email: string;
  password: string;
}

export default function App() {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    name: "Michael",
    email: "michael@gmail.com",
    password: "pass123"
  });

  const handleSubmit = (formData: TFormData) => {
    setData({
      ...data,
      ...formData
    });
    toast(`${edit ? "Edited!" : "Created!"}`);
  }

  return (
   <div>
    <Button onClick={() => setEdit(!edit)}>
      {edit ? "Create" : "Edit"}
    </Button>
    { edit ? <Form key={1} edit {...data} onSubmit={handleSubmit} /> : <Form key={2} onSubmit={handleSubmit} /> }
    <ToastContainer position="bottom-right" autoClose={3000} />
   </div>
  )
}

