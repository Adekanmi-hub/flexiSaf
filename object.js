//JavaScript Object
//They are written in key:value pairs, enveloped with curly braces.
//Example
const patient = {
  firstName: "Abai",
  lastName: "Ayomikun",
  status: "Single",
  Weight: "80kg",
  genotype: "AA",
  fullName: () => {
    return patient.firstName + " " + patient.lastName;
  },
};

//To access the properties of the object, we use;
//"OBJECT NAME" and "PROPERTY NAME". Example shown below:
console.log(patient.firstName);

//Putting it to use
document.getElementById("obj").innerHTML =
  "Please can you add " + patient.fullName() + " details to his medical file?";

function resolveAfter10Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 10000);
  });
}
