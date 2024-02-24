
import React from "react"
export default function Users(){

    return(
        <div>

            <h1>This is users page</h1>

            <table border="1">
                <thead>
                <tr>
                    <th>Birthcertificate ID</th>
                    <th>Child name</th>
                    <th>Gender</th>
                    <th>view medical history</th>
                </tr>
                </thead>
                <tr>
                    <td>Dummy data</td>
                    <td>Dummy data</td>
                    <td>Dummy data</td>
                    <td><input type="button" value="view medical history"/></td>
                </tr>

            </table>
        </div>
    )




}