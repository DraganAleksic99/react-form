import { ChangeEvent, useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TFormData } from './App';

type Props = {
    name?: string;
    email?: string;
    password?: string;
    onSubmit: (o: TFormData) => void;
    edit?: boolean;
  }

export default function Form({ name = "", email = "", password = "", onSubmit, edit }: Props) {
  const [formData, setFormData] = useState({ name, email, password });

  const handleChange = ({ target: { name: k, value: v }}: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [k]: v,
    });
  }
  
  const { name: n, email: e, password: p } = formData;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
          name: "",
          email: "",
          password: "",
        })
      }}>
      <div className="flex flex-col space-y-4 text-left sm:max-w-lg mx-auto">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            type='text'
            placeholder="Enter your name"
            value={n}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={e}
            onChange={handleChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={p}
            onChange={handleChange}
            required
          />
        </div>
        <Button className="w-full" type="submit">
          { edit ? 'Edit': 'Create' }
        </Button>
      </div>
    </form>
  )
}
