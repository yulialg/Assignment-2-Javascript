function getDetails(employee_object)
{
let result = "The employee " + employee_object.name  + employee_object.last_name + ","  + " age is " +employee_object.age + "," 
 + "worked at " +
  employee_object.experience + ", "  +  employee_object.experience.length  + " work places in total. ";
return result;
}
const employee1 = {
    name: "John",
    last_name: "Smith",
    age: "35",
    experience: ["Apple", " Google", " IBM"]
}
         
 const employee2 = {
    name: "Lidiya",
    last_name: "Arm",
    age: "37",
    experience: ["Jig", "Root", "Tenecom", "IT Support"]
}  


function compareEmployees(emp1, emp2){
    if (emp1.experience.length>emp2.experience.length){
        console.log(emp1.name)
        for(let x in emp1.experience){
        console.log(emp1.experience[x])
        }
    }
    if (emp1.experience.length<emp2.experience.length){
        console.log(emp2.name + " " + emp2.last_name)
        for(let x in emp2.experience){
        console.log(emp2.experience[x])
        }
    }
}
compareEmployees(employee1, employee2);

    
console.log(getDetails(employee1));
console.log(getDetails(employee2));