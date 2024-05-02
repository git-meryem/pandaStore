export default function Rating({rate,count}) {
  return (
    <>
      <td width={"100px"}>
        <div>
          <span style={{ color: "red" }}>Rate : </span>
          {rate}
        </div>
        <div>
          <span style={{ color: "green" }}>Count : </span>
          {count}
        </div>
      </td>
    </>
  );
}
