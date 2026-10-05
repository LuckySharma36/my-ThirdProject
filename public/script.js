document.getElementById("addempbutton").addEventListener("click", async () => {
    const response = await fetch("/employee", {
        method: "POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            empID:document.getElementById("empID").value,
            empName:document.getElementById("empName").value,
            empSalary:document.getElementById("empSalary").value,
            empPosition:document.getElementById("empPosition").value
        })
    });

    document.getElementById("Addpara").innerText = "added";
});

document.getElementById("databutton").addEventListener("click", async () => {
    const response = await fetch("/employee");
    document.getElementById("detailsAll").innerText = "details fetch function works";
});

document.getElementById("submit2").addEventListener("click", async () =>{
    const id = document.getElementById("NewId").value;
    const response = await fetch(`/employee/${id}`);
    document.getElementById("detailpara").innerText = "individual fetched";
});

document.getElementById("deleteAll").addEventListener("click", async () =>{
    const response = await fetch("/employee", {
        method:"DELETE"
    });
    document.getElementById("deleteDetails").innerText = "deleted";
});

document.getElementById("deletespecific").addEventListener("click", async () =>{
    const id = Number(document.getElementById("deleteone").value);
    const response = await fetch(`/employee/${id}` , {
        method:"DELETE"
    });
    document.getElementById("deletespecificdetail").innerText = "individual deleted";
});

document.getElementById("changeEmpbutton").addEventListener("click", async () => {
    const id = Number(document.getElementById("empIDnew").value);
    const response = await fetch(`/employee/${id}`, {
        method:"PATCH",
        headers:{
            "Content-type":"Application/json"
        },
        body:JSON.stringify({
            empID:document.getElementById("empIDnew").value,
            empName:document.getElementById("empNamenew").value,
            empSalary:document.getElementById("empSalarynew").value,
            empPosition:document.getElementById("empPositionnew").value
        })
    });
    document.getElementById("updatevalue").innerText = "value changed successfully";
});