//TEACHER CLASS
var Teacher = /** @class */ (function () {
    function Teacher(n, e, p, d, s, t) {
        this.name = n;
        this.email = e;
        this.phone = p;
        this.dob = d;
        this.subject = s;
        this.teacher_id = t;
    }
    Teacher.prototype.display = function () {
        console.log(this.name);
        console.log(this.email);
        console.log(this.phone);
        console.log(this.dob);
        console.log(this.subject);
        console.log(this.teacher_id);
    };
    return Teacher;
}());
//STUDENT CLASS
var Student = /** @class */ (function () {
    function Student(n, p, d, c) {
        this.name = n;
        this.phone = p;
        this.dob = d;
        this.clas = c;
    }
    Student.prototype.display = function () {
        console.log(this.name);
        console.log(this.phone);
        console.log(this.dob);
        console.log(this.clas);
    };
    return Student;
}());
var studTable = document.getElementById("studentTable");
var teachTable = document.getElementById("teacherTable");
var n1 = document.getElementById("name");
var e1 = document.getElementById("email");
var p1 = document.getElementById("phone");
var d1 = document.getElementById("dob");
var s1 = document.getElementById("subject");
var t1 = document.getElementById("teacher_id");
var teach = document.getElementById("teacher");
var c1 = document.getElementById("clas");
var std = document.getElementById("studentTableDiv");
var ttd = document.getElementById("teacherTableDiv");
var but = document.getElementById("myBtn");
but.addEventListener("click", function () {
    if (teach.checked == true) {
        var i = 1;
        var obj_teacher = new Teacher(n1.value, e1.value, p1.value, d1.value, s1.value, t1.value);
        ttd.style.display = 'block';
        var row = teachTable.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = obj_teacher.teacher_id;
        cell2.innerHTML = obj_teacher.name;
        cell3.innerHTML = obj_teacher.phone;
        cell4.innerHTML = obj_teacher.email;
        cell5.innerHTML = obj_teacher.dob;
        cell6.innerHTML = obj_teacher.subject;
        i = i + 1;
    }
    else {
        var obj_student = new Student(n1.value, p1.value, d1.value, c1.value);
        std.style.display = 'block';
        var i = 1;
        var row = studTable.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = obj_student.name;
        cell2.innerHTML = obj_student.clas;
        cell3.innerHTML = obj_student.phone;
        cell4.innerHTML = obj_student.dob;
        i = i + 1;
    }
});
