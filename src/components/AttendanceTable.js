import "bulma/css/bulma.css";

const AttendanceTable = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Subject Code</th>
          <th>L T percentage</th>
          <th>L percentage</th>
          <th>P percentage</th>
          <th>T percentage</th>
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => (
          <tr key={index}>
            <td>{data.subjectcode}</td>
            <td>{data.LTpercantage || "-"}</td>
            <td>{data.Lpercentage || "-"}</td>
            <td>{data.Ppercentage || "-"}</td>
            <td>{data.Tpercentage || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AttendanceTable;
