
var editor;
//var queryValue = $('.querySelector').find(":selected").text(); 

$(document).ready( function () {

    $('.querySelector').change(function(){
        queryValue = $('.querySelector').find(":selected").text();
        console.log(queryValue);
        inventoryTable.search(queryValue);
        inventoryTable.draw();
            
    });

    $('#inventoryTable').on( 'click', 'tbody td:not(:first-child, :last-child) ', function (e) {
        editor.inline( this, {
            onBlur: 'submit'
        } );
    } );

    $(document).on('click','td:nth-child(2)', function(e){
        $('#DTE_Field_onHand').attr('inputmode','decimal');
    });

    // Object that will contain the local state. 
    var inventoryArray = {
       1 : {item: "Brisket", onHand: "1", par: "1", category: "meat",DT_RowId: "1"},
       2 : {item: "Pork Butts", onHand: "1", par: "1", category: "meat", DT_RowId: "2"},
       3 : {item: "Ribs", onHand: "1", par: "1", category: "meat", DT_RowId: "3"},
       4 : {item: "Pork Loin", onHand: "1", par: "1", category: "meat", DT_RowId: "4"},
       5 : {item: "Whole Chicken Wing", onHand: "1", par: "1", category: "meat", DT_RowId: "5"},
       6 : {item: "Whole Chicken", onHand: "1", par: "1", category: "meat",  DT_RowId: "6"},
       7 : {item: "Chicken Breast", onHand: "1", par: "1", category: "meat", DT_RowId: "7"},
       8 : {item: "Chicken Leg Quarters", onHand: "1", par: "1", category: "meat", DT_RowId: "8"},
       9 : {item: "Ground Beef", onHand: "1", par: "1", category: "meat", DT_RowId: "9"},
       10 : {item: "Sirloin Steak", onHand: "1", par: "1", category: "meat", DT_RowId: "10"},
       11 : {item: "Pit Ham", onHand: "1", par: "1", category: "meat", DT_RowId: "11"},
       12 : {item: "Turkey", onHand: "1", par: "1", category: "meat", DT_RowId: "12"},
       13 : {item: "Salmon Package", onHand: "1", par: "1", category: "meat", DT_RowId: "13"},
       14 : {item: "Catfish", onHand: "1", par: "1", category: "meat", DT_RowId: "14"},
       15 : {item: "Riblets", onHand: "1", par: "1", category: "meat", DT_RowId: "15"},
       16 : {item: "Cheese Curds", onHand: "1", par: "1", category: "Frozen", DT_RowId: "16"},
       17 : {item: "Mushrooms", onHand: "1", par: "1", category: "Frozen", DT_RowId: "17"},
       18 : {item: "Nuggets", onHand: "1", par: "1", category: "Frozen", DT_RowId: "18"},
       19 : {item: "Okra", onHand: "1", par: "1", category: "Frozen", DT_RowId: "19"},
       20 : {item: "Fries", onHand: "1", par: "1", category: "Frozen", DT_RowId: "20"},
       21 : {item: "Ice Cream", onHand: "1", par: "1", category: "Frozen", DT_RowId: "21"},
       22 : {item: "Corn", onHand: "1", par: "1", category: "Frozen", DT_RowId: "22"},
       23 : {item: "Hot Dogs", onHand: "1", par: "1", category: "Frozen", DT_RowId: "23"},
       24 : {item: "Jalapeño Poppers", onHand: "1", par: "1", category: "Frozen", DT_RowId: "24"},
       25 : {item: "Sausage Patties", onHand: "1", par: "1", category: "Frozen", DT_RowId: "25"},
       26 : {item: "6in Tortillas", onHand: "1", par: "1", category: "Frozen", DT_RowId: "26"},
       27 : {item: "Large Tortillas", onHand: "1", par: "1", category: "Frozen", DT_RowId: "27"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Frozen", DT_RowId: "28"},
       29 : {item: "Biscuits ", onHand: "1", par: "1", category: "Frozen", DT_RowId: "29"},
       30 : {item: "Pizza Crust 16in thin", onHand: "1", par: "1", category: "Frozen", DT_RowId: "30"},
       31 : {item: "Pizza Crust 16in thick", onHand: "1", par: "1", category: "Frozen", DT_RowId: "31"},
       32 : {item: "Pizza Crust 10in thin", onHand: "1", par: "1", category: "Frozen", DT_RowId: "32"},
       33 : {item: "Pizza Crust 10in thick", onHand: "1", par: "1", category: "Frozen", DT_RowId: "33"},
       34 : {item: "Ravioli", onHand: "1", par: "1", category: "Frozen", DT_RowId: "34"},
       35 : {item: "Gluten-free Crust ", onHand: "1", par: "1", category: "Frozen", DT_RowId: "35"},
       36 : {item: "Egg Noodle", onHand: "1", par: "1", category: "Frozen", DT_RowId: "36"},
       37 : {item: "Wonton Wrapper", onHand: "1", par: "1", category: "Frozen", DT_RowId: "37"},
       38 : {item: "Egg Roll Wrapper", onHand: "1", par: "1", category: "Frozen", DT_RowId: "38"},
       39 : {item: "Pickle Spears", onHand: "1", par: "1", category: "Frozen", DT_RowId: "39"},
       40 : {item: "Potato Chips", onHand: "1", par: "1", category: "Frozen", DT_RowId: "40"},
       41 : {item: "Jalapeño Bottle Caps", onHand: "1", par: "1", category: "Frozen", DT_RowId: "41"},
       42 : {item: "Crumble Sausage", onHand: "1", par: "1", category: "Frozen", DT_RowId: "42"},
       43 : {item: "Crumble Sausages", onHand: "1", par: "1", category: "Frozen", DT_RowId: "43"},
       44 : {item: "Pepperoni ", onHand: "1", par: "1", category: "Frozen", DT_RowId: "44"},
       45 : {item: "Bacon Ends & Pieces", onHand: "1", par: "1", category: "Frozen", DT_RowId: "45"},
       46 : {item: "Bacon Pizza Topping", onHand: "1", par: "1", category: "Frozen", DT_RowId: "46"},
       47 : {item: "Chorizo ", onHand: "1", par: "1", category: "Frozen", DT_RowId: "47"},
       48 : {item: "Peas & Carrots ", onHand: "1", par: "1", category: "Frozen", DT_RowId: "48"},
       49 : {item: "Sweet Potato Fries", onHand: "1", par: "1", category: "Frozen", DT_RowId: "49"},
       50 : {item: "Breakfast Crumble Sausage ", onHand: "1", par: "1", category: "Frozen", DT_RowId: "50"},
       51 : {item: "Polish Sausage ", onHand: "1", par: "1", category: "Frozen", DT_RowId: "51"},
       52 : {item: "Rope Kielbasa", onHand: "1", par: "1", category: "Frozen", DT_RowId: "52"},
       53 : {item: "Arcedian Blend Lettuce", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "53"},
       54 : {item: "Burger Set Lettuce", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "54"},
       55 : {item: "Carrots", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "55"},
       56 : {item: "Roma Tomato", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "56"},
       57 : {item: "Jalapenos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "57"},
       58 : {item: "Red Pepper", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "58"},
       59 : {item: "Green Pepper", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "59"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},
       28 : {item: "Corn Tortillas Tacos", onHand: "1", par: "1", category: "Refridgerator", DT_RowId: "28"},





    };
 
    // Create or update the inventoryArray localStorage entry
    if ( localStorage.getItem('inventoryArray') ) {
        inventoryArray = JSON.parse( localStorage.getItem('v') );
    }

    editor = new $.fn.dataTable.Editor( {
        table: "#inventoryTable",
        fields: [ 
            {
                label: "Item:",
                name: "item"
            }, 
            {
                label: "On hand:",
                name: "onHand"
            }, 
            {
                label: "Par:",
                name: "par"
            },
            {
                label: "Category",
                name: "category",
                type: "select",
                options: [
                    "Meat",
                    "Frozen",
                    "Refrigerator",
                    "Dry Storage",
                    "Misc"
                ]
            }
        ],
        ajax: function ( method, url, d, successCallback, errorCallback ) {
            var output = { data: [] };
 
            if ( d.action === 'create' ) {
                // Create new row(s), using the current time and loop index as
                // the row id
                var dateKey = +new Date();
 
                $.each( d.data, function (key, value) {
                    var id = dateKey+''+key;
 
                    value.DT_RowId = id;
                    inventoryArray[ id ] = value;
                    output.data.push( value );
                } );
            }
            else if ( d.action === 'edit' ) {
                // Update each edited item with the data submitted
                $.each( d.data, function (id, value) {
                    value.DT_RowId = id;
                    $.extend( inventoryArray[ id ], value );
                    output.data.push( inventoryArray[ id ] );
                } );
            }
            else if ( d.action === 'remove' ) {
                // Remove items from the object
                $.each( d.data, function (id) {
                    delete inventoryArray[ id ];
                } );
            }
 
            // Store the latest `inventoryArray` object for next reload
            localStorage.setItem( 'inventoryArray', JSON.stringify(inventoryArray) );
 
            // Show Editor what has changed
            successCallback( output );
        }

    } );




    var inventoryTable = $('#inventoryTable').DataTable({
        dom: "fBtp",
        paging: false,
        select: true,
        data: $.map( inventoryArray, function (value, key) {
            return value;
        } ),
        columns: [
            {
                data: "item",
                title: "Item",
                width: "Auto"
            },
            {
                data: "onHand",
                title: "On Hand"
            },
            {
                data: "par",
                title: "Par"
            },
            {
                title: "Order",
                render: function ( data, type, row ) {
                    return Math.max(0,Math.round(row.par - row.onHand));
                   }
            },  
            {
                title: "Category",
                data: "category"
            }
        ],
        columnDefs: [
            {
                targets:4,
                visible: false,
                searchable: true
            }
        ],
        //select: true,
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ],
        initComplete: function(){
            //$('table.dataTable thead tr').addClass('sticky');
            //$('div.col.min-vh-100').removeClass('p-4')
            $('div.dt-buttons, .dataTables_filter, .float-none').wrapAll('<div class="container-fluid sticky-top p-0 white-background"></div>');
            $('.btn.float-none, .dataTables_filter').wrapAll('<div class="row"></div>');
            $('.dataTables_filter').wrap('<div class="col"></div>');
            $('.btn.float-none').wrap('<div class="col"></div>');
        },
    });
} );
