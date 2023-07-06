
function GetAllStudents(){

    //fetch('http://localhost:1000/GetAllStudents')
    fetch('https://test06-0red.onrender.com/GetAllStudents')
      .then(response => response.json())
      .then(json => {
        let studentsOl = document.getElementById("AllList");
        json.forEach(element => {
            let studentli = document.createElement('li');
            studentli.innerHTML = element.Name;
            studentsOl.appendChild(studentli);           
        });
    })
}