var rollV, nameV, addressV;

function readForm() {
    rollV = document.getElementById("rollNo").value;
    nameV = document.getElementById("name").value;
    addressV = document.getElementById("address").value;
    console.log(rollV, nameV, addressV);
}
// Create
document.getElementById("create").onclick = function () {
    readForm();

    firebase.database().ref("student/" + rollV)
        .set(
            {
                rollNo: rollV,
                name: nameV,
                address: addressV
            }
        );
    alert("Data Created");
    document.getElementById("rollNo").value = "";
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
}
// Read
document.getElementById("read").onclick = function () {
    readForm();

    firebase.database().ref("student/" + rollV)
        .on("value",function(snap)
            {
                document.getElementById("rollNo").value = snap.val().rollNo;
                document.getElementById("name").value = snap.val().name;
                document.getElementById("address").value = snap.val().address;
            }
        );
}
// Update
document.getElementById("update").onclick = function () {
    readForm();

    firebase.database().ref("student/" + rollV)
        .update(
            {
                //    rollNo: rollV,
                name: nameV,
                address: addressV
            }
        );
    alert("Data Updated");
    document.getElementById("rollNo").value = "";
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
}
// Delete
document.getElementById("delete").onclick = function () {
    readForm();

    firebase.database().ref("student/" + rollV)
        .remove();
    alert("Data Deleted");
    document.getElementById("rollNo").value = "";
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
}