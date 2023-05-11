import React from 'react'
import "../css Files/table.css";

const TaskList = () => {
  return (
    <div>
      <h1>Task List</h1>
      <table>
        <tr>
          <th>Task</th>
          <th>Due Date</th>
          <th>Assigned To</th>
          <th>Completed</th>
        </tr>
        <tr>
          <td>Task 1</td>
          <td>Due Date 1</td>
          <td>Assigned To 1</td>
          <td>Completed 1</td>
        </tr>
      </table>
    </div>
  )
}

export default TaskList