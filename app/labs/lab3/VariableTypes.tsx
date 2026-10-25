export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  let hometown = "Mumbai";
  let jerseyNumber = 10;
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                     <br />
      hometown = {hometown}, typeof hometown = {typeof hometown} <br />
      jerseyNumber = {jerseyNumber}, typeof jerseyNumber = {typeof jerseyNumber} <br />
      sampleCount = {sampleCount}, typeof sampleCount = {typeof sampleCount} <br />
      sampleLabel = {sampleLabel}, typeof sampleLabel = {typeof sampleLabel}
      <hr />
    </div>
  );
}
