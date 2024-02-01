import React from "react";

function AddUsers() {
  return (
    <div className="form">
      <h1>Register new patients</h1>
      <form>
        <label>Enter birth certificate ID</label>
        <input type="text" placeholder="Birth certificate id" /><br></br>
        <label>Enter the first name</label>
        <input type="text" placeholder="Enter first name"/><br></br>
        <label>Enter the last name</label>
        <input type="text" placeholder="Enter last name"/><br></br>
        <label>Enter the birthdate</label>
        <input type="date" placeholder="Enter birthdate"/><br></br>
        <label>Enter gender</label>
        <label>
            <input type="radio" name="gender" value="male"/>
            Male
        </label>
        <label>
            <input type="radio" name="gender" value="female"/>
            Female
        </label>
        <br></br>
        <label>Enter parents or guardians name</label>
        <input type="text" placeholder="Enter parents name"/><br></br>
        <label>Enter phone number</label>
        <input type="number" placeholder="Parent/guardian contact number"/><br></br>
        <label>select registered hospital</label>
        <select>
          <option>Banadaragama hospital</option>
          <option>Asiri hospital</option>

        </select><br></br>
        <label>Enter username</label>
        <input type="text" placeholder="Enter username"/><br></br>
        <label>Enter password</label>
        <input type="password" placeholder="Enter password"/><br></br>
        

        
      </form>
      
    </div>
  );
}

export default AddUsers;
