const students = [
    {
        id:1,
        firstName: "Jonas",
        lastName: "Jonaitis",
        group: "JS22",
        results: {
            'db': 7.5,
            'js': 8,
            'Linux': 6
        }
    },
    {
        id:2,
        firstName: "Petras",
        lastName: "Petraitis",
        group: "JS22",
        results: {
            'db': 5.5,
            'js': 4,
            'Linux': 9
        }
    },
    {
        id:3,
        firstName: "Vardenis",
        lastName: "Pavardenis",
        group: "JS23",
        results: {
            'db': 4.5,
            'js': 8,
            'Linux': 6
        }
    },
    {
        id:4,
        firstName: "Tomas",
        lastName: "Tomaitis",
        group: "JS24",
        results: {
            'db': 9.5,
            'js': 4,
            'Linux': 6
        }
    },
    {
        id:5,
        firstName: "Ieva",
        lastName: "Ievaite",
        group: "JS24",
        results: {
            'db': 9.5,
            'js': 8,
            'Linux': 9
        }
    }
]

// let filteredStudents = students.filter((student)=> (student.firstName.length>5));
// console.log(filteredStudents);


// let filteredGroups = students.filter((student) => student.group === "JS24");
// console.log(filteredGroups);


//-----------------------------------------
// let filteredByAvg = students.filter(students=>{
//     let sum=0;
//     const marks= Object.values(students.results);
//     for(let i =0; i<marks.length; i++) {
//     sum+=marks[i];
//     }
//     const avg = sum/marks.length;
//     return avg>8;
// })
// console.log("Vidurkis su for " + filteredByAvg);
//--------------------------------


const getAverage = (array)=>{
    return array.reduce((a, b)=> a + b) / array.length;
}
 
const getByAverage = (average)=>{
    let filteredStudentsByAverage = students.filter((student)=> getAverage(Object.values(student.results)) > average);
    return filteredStudentsByAverage;
}
console.log(getByAverage(8));  //call function

//--------------------------------------------------------------
 


