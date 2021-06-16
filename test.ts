//TEACHER CLASS

class Teacher{
	name:string;
	email:string;
	phone:string;
	dob:string;
	subject:string;
	teacher_id: number;

	constructor(n: string,e: string,p: string,d: string,s: string,t: number)
	{
		this.name=n;
		this.email=e;
		this.phone=p;
		this.dob=d;
		this.subject=s;
		this.teacher_id=t;
	}
	 display():void {
		console.log(this.name);
		console.log(this.email);
		console.log(this.phone);
		console.log(this.dob);
		console.log(this.subject);
		console.log(this.teacher_id);
	}
	
}

//STUDENT CLASS
class Student{
	name:string;
	phone:string;
	dob:string;
	clas:string

	constructor(n: string,p: string,d: string,c: string)
	{
		this.name=n;
		this.phone=p;
		this.dob=d;
		this.clas=c;
	}
	 display():void {
		console.log(this.name);
		console.log(this.phone);
		console.log(this.dob);
		console.log(this.clas);
	}
	
}




const studTable=document.getElementById("studentTable")! as HTMLFormElement;
const teachTable=document.getElementById("teacherTable")! as HTMLFormElement;
const n1 = document.getElementById("name")! as HTMLFormElement;
const e1 = document.getElementById("email")! as HTMLFormElement;
const p1 = document.getElementById("phone")! as HTMLFormElement;
const d1 = document.getElementById("dob")! as HTMLFormElement;
const s1= document.getElementById("subject")! as HTMLFormElement;
const t1= document.getElementById("teacher_id")! as HTMLFormElement;
const teach = document.getElementById("teacher")! as HTMLFormElement;
const c1 = document.getElementById("clas")! as HTMLFormElement;



const std = document.getElementById("studentTableDiv")! as HTMLFormElement;
const ttd = document.getElementById("teacherTableDiv")! as HTMLFormElement;

const but=document.getElementById("myBtn")!;

but.addEventListener("click", function() {
	if(teach.checked==true)
	{
		var i=1;
		const obj_teacher=new Teacher(n1.value,e1.value,p1.value,d1.value,s1.value,t1.value);
			ttd.style.display='block';
			var row = teachTable.insertRow(i);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			var cell6 = row.insertCell(5);
			
			cell1.innerHTML =obj_teacher.teacher_id;
			cell2.innerHTML =obj_teacher.name;
			cell3.innerHTML = obj_teacher.phone;
			cell4.innerHTML = obj_teacher.email;
			cell5.innerHTML = obj_teacher.dob;			
			cell6.innerHTML = obj_teacher.subject;
			i=i+1;
	}	
	else{
		const obj_student=new Student(n1.value,p1.value,d1.value,c1.value);
		std.style.display='block';
			var i=1;
			var row = studTable.insertRow(i);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			
			cell1.innerHTML =obj_student.name;
			cell2.innerHTML =obj_student.clas;
			cell3.innerHTML =obj_student.phone;
			cell4.innerHTML =obj_student.dob;
			i=i+1;		
	
	}
});
	
