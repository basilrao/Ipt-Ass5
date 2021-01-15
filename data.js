const database=firebase.database();


function addItem(){
    const name=document.getElementById("name");
    const clase=document.getElementById("class");
    const section=document.getElementById("section");
    const rollno=document.getElementById("rollno");
    const studentinfo={
        studentrollno:rollno.value,
        studentname:name.value,
        studentclase:clase.value,
        studentsection:section.value
        
    }
    database.ref('school/studentinfo').push(studentinfo);
    
}
function showStudent(){
    var arr=[];

    var leadsRef = database.ref('school/studentinfo');
    leadsRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var studentData = childSnapshot.val();
      arr.push(studentData)
      
    });
});
setTimeout(function(){ 
    for ( i=0; i<arr.length; i++){
        var ul=document.getElementById("ul1");
        var li = document.createElement('li');
        li.innerText=arr[i].studentname;
        var li1 = document.createElement('li');
        li1.innerText=arr[i].studentsection;
        var li2=document.createElement('li');
        li2.innerText=arr[i].studentclase;
        var li3=document.createElement('li');
        li3.innerText=arr[i].studentrollno;
        var br=document.createElement("br");
        ul.appendChild(li);
        ul.appendChild(li2);
        ul.appendChild(li1);
        ul.appendChild(li3);
        ul.appendChild(br);
    
    
    }
 }, 3000);
}
