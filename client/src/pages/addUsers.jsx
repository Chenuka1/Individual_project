import React from "react";

function AddUsers() {
  return (
    <div>
      <h1>Add new patient</h1>
      <form>
        <label>Enter the full name</label>
        <input type="text" placeholder="Enter full name"/><br></br>
        <label>Enter the birthyear</label>
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
        <label>Enter the Blood type</label>
        <input type="text" placeholder="Enter blood type" /><br></br>
        


        

        

        






      </form>
      
    </div>
  );
}

export default AddUsers;
