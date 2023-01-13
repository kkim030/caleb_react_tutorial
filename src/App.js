import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Kelly",
      role: "Daughter1",
      img: "https://images.pexels.com/photos/15031715/pexels-photo-15031715.jpeg",
    },
    {
      id: 2,
      name: "Min",
      role: "Daughter2",
      img: "https://images.pexels.com/photos/15031715/pexels-photo-15031715.jpeg",
    },
    {
      id: 3,
      name: "Mom",
      role: "Mommy",
      img: "https://images.pexels.com/photos/15031715/pexels-photo-15031715.jpeg",
    },
    {
      id: 4,
      name: "Dad",
      role: "Daddy",
      img: "https://images.pexels.com/photos/15031715/pexels-photo-15031715.jpeg",
    },
    {
      id: 5,
      name: "Cupcake",
      role: "PotentialDog<3",
      img: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]);

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return { ...employee, name: newName, role: newRole };
      }
    });
    setEmployees(updatedEmployees);
  }

  const showEmployees = true;
  return (
    <div className="App">
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
            {employees.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p> You cannot see the employees </p>
      )}
    </div>
  );
}

export default App;
