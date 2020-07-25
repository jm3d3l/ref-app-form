import React from "react";
import TextField from "@material-ui/core/TextField";
import "./stlyes.css";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";

let obj = {
  fName: "john medel",
  lName: "mirafuentes",
  email: "email.com",
  name: "johhn medel Mirafuentes",
  pword: "password",
  user: "canton"
};
export default function Form() {
  const formRef = React.useRef({});
  const handleChange = ({ target: { value, name } }) => {
    formRef.current[name] = value;
  };

  const handleButton = () => {
    for (let key in obj) {
      formRef.current[key].value = obj[key];
    }
  };

  return (
    <div>
      <form className="FormContainer">
        <TextField
          className="TextInput"
          inputRef={el => (formRef.current.fName = el)}
          name="fName"
          variant="outlined"
          placeholder="first Name"
          onChange={handleChange}
        />
        <TextField
          className="TextInput"
          inputRef={el => (formRef.current.name = el)}
          name="name"
          variant="outlined"
          placeholder="full Name"
          onChange={handleChange}
        />
        <TextField
          className="TextInput"
          name="lName"
          variant="outlined"
          placeholder="last Name"
          inputRef={el => (formRef.current.lName = el)}
          onChange={handleChange}
        />
        <TextField
          className="TextInput"
          name="email"
          variant="outlined"
          inputRef={el => (formRef.current.email = el)}
          placeholder="email"
          onChange={handleChange}
        />
        <TextField
          className="TextInput"
          name="pword"
          variant="outlined"
          inputRef={el => (formRef.current.pword = el)}
          placeholder="password"
          onChange={handleChange}
        />
        <TextField
          className="TextInput"
          name="user"
          variant="outlined"
          placeholder="username"
          inputRef={el => (formRef.current.user = el)}
          onChange={handleChange}
        />
        <Select
          native
          onChange={handleChange}
          inputProps={{
            name: "age",
            id: "age-native-simple"
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </form>
      <div>
        <Button onClick={handleButton}>Populate fields</Button>
        <Button onClick={() => (formRef.current = {})}>clear</Button>
      </div>
    </div>
  );
}
