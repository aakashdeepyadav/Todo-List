function DisplayTodoItems({ tasks }) {
  return (
    <>
      <table>
        <tbody>
          {tasks.map((item, index) => (
            <tr key={index}>
              <td>{item}</td>
              <td>03/11/25</td>
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
