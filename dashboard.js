function onformsubmit() {

    var formdata = ReadFormData();

    insertnewrecord(formdata);

    resetForm();
}

function ReadFormData() {

    var formdata = {};

    formdata["namaku"] =
        document.querySelector('input[name="namaku"]').value;

    formdata["umurku"] =
        document.querySelector('input[name="umurku"]').value;

    formdata["alamatgue"] =
        document.querySelector('input[name="alamatgue"]').value;

    formdata["hobigue"] =
        document.querySelector('input[name="hobigue"]').value;

    return formdata;
}

function insertnewrecord(data) {

    var table = document.getElementById("employeeList")
        .getElementsByTagName('tbody')[0];

    var newRow = table.insertRow(table.length);

    // kolom nama
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.namaku;

    // kolom umur
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.umurku;

    // kolom alamat
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.alamatgue;

    // kolom hobi
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.hobigue;

    // kolom action
    var cell5 = newRow.insertCell(4);

    cell5.innerHTML = `
        <a href="#" onclick="onDelete(this)">Delete</a>
    `;
}

function resetForm() {

    document.querySelector('input[name="namaku"]').value = "";

    document.querySelector('input[name="umurku"]').value = "";

    document.querySelector('input[name="alamatgue"]').value = "";

    document.querySelector('input[name="hobigue"]').value = "";
}

function onDelete(td) {

    if (confirm('Yakin ingin menghapus data?')) {

        row = td.parentElement.parentElement;

        document.getElementById("employeeList")
            .deleteRow(row.rowIndex);
    }
}