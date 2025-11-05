function AddingItemContainer() {
  return (
    <table className="table-container">
      <tbody>
        <tr>
          <td>
            <input type="text" name="Task-name" placeholder="Enter task" />
          </td>
          <td>
            <input type="date" name="Date-Time" />
          </td>
          <td>
            <button>Add item</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default AddingItemContainer;
