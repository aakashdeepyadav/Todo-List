function DisplayTodoItems({ tasks }) {
  return (
    <>
      <table>
        <tbody>
          {tasks.map((item, index) => (
            <tr key={index}>
              <td>{item.task}</td>
              <td>{item.due}</td>
              <td>
                <button>Done</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default DisplayTodoItems;
