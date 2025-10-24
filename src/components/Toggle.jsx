import { MaterialUISwitch } from "./MaterialUISwitch";
import "./Toggle.css";
import { useState, useEffect } from "react";

export default function Toggle() {
  const [checked, setChecked] = useState(JSON.parse(localStorage.getItem("checked")) ? true : false);

  useEffect(() => {
    if (!checked) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
    localStorage.setItem("checked", JSON.stringify(checked));
  }, [checked]);

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
  }
  return (
      <div style={{marginBottom: '20px', marginTop: '15px', display: 'flex', justifyContent: 'flex-end', paddingRight: '20px'}}>
        <div>
          <MaterialUISwitch checked={checked} onChange={handleChange} id="toggle" />
          {checked === false && <label htmlFor="toggle" style={{color: 'rgb(0, 32, 63)', fontWeight: '500', display: 'block', cursor: 'pointer'}}>Light mode</label>}
          {checked === true && <label htmlFor="toggle" style={{color: 'white', fontWeight: '500', display: 'block', cursor: 'pointer'}}>Dark mode</label>}
        </div>
      </div>
    );
}