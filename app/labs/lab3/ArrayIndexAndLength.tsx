export default function ArrayIndexAndLength() {
  let numberArray1 = [1, 2, 3, 4, 5];
  const length1 = numberArray1.length;
  const index1 = numberArray1.indexOf(3);
  const indexOf9 = numberArray1.indexOf(9);
  const indexOf1 = numberArray1.indexOf(1);
  return (
    <div id="wd-array-index-and-length">
      <h4>Array index and length</h4>
      length1 = {length1} <br />
      index1 = {index1}   <br />
      indexOf9 = {indexOf9} <br />
      indexOf1 = {indexOf1}
      <hr />
    </div>
  );
}
