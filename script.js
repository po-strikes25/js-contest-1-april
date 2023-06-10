/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    //Write your code here, just console.log
    arr.map((employee) => {
        if (employee.profession == "developer") {
            console.log(employee);
        }
    })
}

function PrintDeveloperbyForEach() {
    //Write your code here, just console.log
    arr.forEach((employee) => {
        if (employee.profession == "developer") {
            console.log(employee);
        }
    })
}

function addData() {
    //Write your code here, just console.log
    let newData = {
        id: 4,
        name: "susan",
        age: 20,
        profession: "intern"
    }
    arr.push(newData)
    console.log(newData)
}

function removeAdmin() {
    //Write your code here, just console.log
    const filteredEmployees = arr.filter((employee) => {
        return employee.profession != "admin"
    })
    console.log(filteredEmployees);
}

function concatenateArray() {
    //Write your code here, just console.log
    let newData = [
        { id: 5, name: "wick", age: "25", profession: "intern" },
        { id: 6, name: "hammer", age: "26", profession: "developer" },
        { id: 7, name: "knife", age: "24", profession: "intern" },
    ]

    newData.forEach((employee) => {
        arr.push(employee)
    })

    arr.forEach((employee) => {
        console.log(employee);
    })
}