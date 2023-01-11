import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");
  const showEmployees = true;
  return (
    <div className="App">
      {console.log("inside the return")}
      {showEmployees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            <Employee
              name="Caleb"
              role="intern"
              img="https://images.pexels.com/photos/15031715/pexels-photo-15031715.jpeg"
            />
            <Employee
              name="Abby"
              role={role}
              img="https://images.pexels.com/photos/15031715/pexels-photo-15031715.jpeg"
            />
            <Employee
              name="Caleb"
              role="intern"
              img="https://images.pexels.com/photos/15031715/pexels-photo-15031715.jpeg"
            />
            <Employee
              name="Caleb"
              role="intern"
              img="https://images.pexels.com/photos/15031715/pexels-photo-15031715.jpeg"
            />
            <Employee
              name="Abby"
              role={role}
              img="https://images.pexels.com/photos/15031715/pexels-photo-15031715.jpeg"
            />
            <Employee
              name="Caleb"
              role="intern"
              img="https://images.pexels.com/photos/15031715/pexels-photo-15031715.jpeg"
            />
            <Employee
              name="Caleb"
              role="intern"
              img="https://images.pexels.com/photos/15031715/pexels-photo-15031715.jpeg"
            />
            <Employee
              name="Abby"
              role={role}
              img="https://images.pexels.com/photos/15031715/pexels-photo-15031715.jpeg"
            />
            <Employee
              name="Caleb"
              role="intern"
              img="https://images.pexels.com/photos/15031715/pexels-photo-15031715.jpeg"
            />
          </div>
        </>
      ) : (
        <p> You cannot see the employees </p>
      )}
    </div>
  );
}

export default App;
