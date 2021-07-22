
function formatMeat ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">'+
        '<h5>On Hand Quantities</h5>'+
        '<tr>'+
            '<td>Raw:</td>'+
            '<td><input id="rawOnHand" type="text" value="'+d.onHand+'"></input></td>'+
        '</tr>'+
        '<tr>'+
            '<td>Par</td>'+
            '<td><input type="text" value="'+d.par+'"></input></td>'+
        '</tr>'+
        '<tr>'+
            '<td>Order:</td>'+
            '<td>'+Math.round(d.par - d.onHand)+'</td>'+
        '</tr>'+
    '</table>';
}
var meatEditor;
$(document).ready( function () {
    // Object that will contain the local state. 
    var meatArray = {
       1 : {meat: "Brisket", onHand: "1", par: "1", DT_RowId: "1"},
       2 : {meat: "Pork Butts", onHand: "1", par: "1", DT_RowId: "2"},
       3 : {meat: "Ribs", onHand: "1", par: "1", DT_RowId: "3"},
       4 : {meat: "Pork Loin", onHand: "1", par: "1", DT_RowId: "4"},
       5 : {meat: "Whole Chicken Wing", onHand: "1", par: "1", DT_RowId: "5"},
       6 : {meat: "Whole Chicken", onHand: "1", par: "1", DT_RowId: "6"},
       7 : {meat: "Chicken Breast", onHand: "1", par: "1", DT_RowId: "7"},
       8 : {meat: "Chicken Leg Quarters", onHand: "1", par: "1", DT_RowId: "8"},
       9 : {meat: "Ground Beef", onHand: "1", par: "1", DT_RowId: "9"},
       10 : {meat: "Sirloin Steak", onHand: "1", par: "1", DT_RowId: "10"},
       11 : {meat: "Pit Ham", onHand: "1", par: "1", DT_RowId: "11"},
       12 : {meat: "Turkey", onHand: "1", par: "1", DT_RowId: "12"},
       13 : {meat: "Salmon Package", onHand: "1", par: "1", DT_RowId: "13"},
       14 : {meat: "Catfish", onHand: "1", par: "1", DT_RowId: "14"},
       15 : {meat: "Riblets", onHand: "1", par: "1", DT_RowId: "15"},

    };
 
    // Create or update the meatArray localStorage entry
    if ( localStorage.getItem('meatArray') ) {
        meatArray = JSON.parse( localStorage.getItem('meatArray') );
    }

    meatEditor = new $.fn.dataTable.Editor( {
        //sAjaxDataProp: "feed.entry",
        //sAjaxSource: "https://spreadsheets.google.com/feeds/list/1piU6KZ89CJYfrpPj8kl-R-wIQivUGxdLyL1ZtEkT7eM/1/public/values?alt=json",
        table: "#meats",
        fields: [ 
            {
                label: "Meat:",
                name: "meat"
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
                label: "Order",
                name: "order",
                type: "hidden"
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
                    meatArray[ id ] = value;
                    output.data.push( value );
                } );
            }
            else if ( d.action === 'edit' ) {
                // Update each edited item with the data submitted
                $.each( d.data, function (id, value) {
                    value.DT_RowId = id;
                    $.extend( meatArray[ id ], value );
                    output.data.push( meatArray[ id ] );
                } );
            }
            else if ( d.action === 'remove' ) {
                // Remove items from the object
                $.each( d.data, function (id) {
                    delete meatArray[ id ];
                } );
            }
 
            // Store the latest `meatArray` object for next reload
            localStorage.setItem( 'meatArray', JSON.stringify(meatArray) );
 
            // Show Editor what has changed
            successCallback( output );
        }
    } );


    $('#meats').on( 'click', 'tbody td:not(:first-child, :last-child) ', function (e) {
        meatEditor.inline( this, {
            onBlur: 'submit'
        } );
    } );

    var meatTable = $('#meats').DataTable({
        //"dom": '<"top"<"pml"><"pmr"B>>rt <"bottom"lip>',
        //dom: "B",
        dom: "fBtp",
        //sAjaxDataProp: "feed.entry",
        //sAjaxSource: "https://spreadsheets.google.com/feeds/list/1piU6KZ89CJYfrpPj8kl-R-wIQivUGxdLyL1ZtEkT7eM/1/public/values?alt=json",
        //autoWidth: true,
        //iDisplayLength: "All",
        paging: false,
        select: true,
        data: $.map( meatArray, function (value, key) {
            return value;
        } ),
        columns: [
            /*{
                data: null,
                defaultContent: "",
                className: "details-control-symbol",
                width: "5px",

            },*/
            {
                data: "meat",
                title: "Meat",
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
            }
        ],
        //select: true,
        buttons: [
            { extend: "create", editor: meatEditor },
            { extend: "edit",   editor: meatEditor },
            { extend: "remove", editor: meatEditor },
            'selectAll',
            'selectNone'
        ],
        initComplete: function(){
            //$('table.dataTable thead tr').addClass('sticky');
            $('div.dt-buttons').addClass('sticky');
        },
    });


    // Add event listener for opening and closing details
    $('#meats tbody').on('click', 'td.details-control-symbol', function () {
        var tr = $(this).closest('tr');
        var row = meatTable.row( tr );
        d = row.data();
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( formatMeat(d) ).show();
            tr.addClass('shown');
        }
    }); 


} );
