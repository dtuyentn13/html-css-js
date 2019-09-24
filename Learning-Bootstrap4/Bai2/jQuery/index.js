var table;
var urlUsers = "https://jsonplaceholder.typicode.com/users";

function initTableData() {
    //Fixed data - Du lieu co dinh
    /*
     var data = [{
             "id": 3,
             "name": "Dang Tuyen",
             "email": "Dangtuyen@gmail.com",
             "address": "Pho Yen Thai Nguyen",
             "phone": "0944868863",
         },
         {
             "id": 4,
             "name": "Ngo Thanh",
             "email": "Ngothanh@gmail.com",
             "address": "Pho Yen Thai Nguyen AAA",
             "phone": "094486886322",
         },
         {
             "id": 5,
             "name": "Duc Anh",
             "email": "Ducanh@gmail.com",
             "address": "Pho Yen Thai Nguyen AAA",
             "phone": "0944868863",
         },
     ];
     */
    //Data from an URL? Data lay tu tren server!!!
    $.get(urlUsers, function(responseData) {
        //Modify "responseData" before showing?
        var modifiedUsers = responseData.map(eachUser => {
            return {
                id: eachUser.id,
                name: eachUser.name,
                email: eachUser.email,
                address: `${eachUser.address.street}, ${eachUser.address.suite}, ${eachUser.address.city}`,
                phone: eachUser.phone
            };
        });
        table = $('#users').DataTable({
            "processing": true,
            data: modifiedUsers,
            columns: [
                { data: 'id' },
                { data: 'name' },
                { data: 'email' },
                { data: 'address' },
                { data: 'phone' },
            ]
        });
    });
    /*
    table = $('#users').DataTable({
        "processing": true,
        data,
        columns: [
            { data: 'id' },
            { data: 'name' },
            { data: 'email' },
            { data: 'address' },
            { data: 'phone' },
        ]
    });
    */
}

$(document).ready(function() {
    initTableData();
    $("#list-header").on({
        mouseenter: function() {
            $(this).css("background-color", "lightgray")
        },
        mouseleave: function() {
            $(this).css("background-color", "lightblue")
        },
    });
    $("#btnReloadData").on("click", function() {
        alert("reload data ...")
        table.ajax.reload();
    });
});