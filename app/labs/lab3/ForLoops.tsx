export default function ForLoops() {
  let stringArray1 = ["string1", "string3"];
  let stringArray2: string[] = [];
  let lowercased: string[] = [];
  let stringLengths: number[] = [];
  for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    stringArray2.push(string1.toUpperCase());
    lowercased.push(string1.toLowerCase());
    stringLengths.push(string1.length);
  }
  return (
    <div id="wd-for-loops">
      <h4>Looping through arrays</h4>
      stringArray2 = {stringArray2} <br />
      lowercased = {lowercased}     <br />
      stringLengths = {stringLengths}
      <hr />
    </div>
  );
}
