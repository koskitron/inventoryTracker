
var editor;

var reportArr = [];
//var queryValue = $('.querySelector').find(":selected").text(); 

$(document).ready( function () {

    $('.querySelector').change(function(){
        queryValue = $('.querySelector').val();
        console.log(queryValue);
        inventoryTable.search(queryValue).draw();
            
    });

    $('#reportButton').click(function(e){
        //pdfMake.createPdf(docDefinition).download();
        //$('#inventoryTable tbody tr td:nth-child(4)').addClass('order');
        $('#inventoryTable tr').each(function(){
            var currentRow=$(this)
            
            var itemValue = currentRow.find('td:eq(0)').text();
            var orderValue = currentRow.find('td:eq(3)').text();

            var obj = {};
            obj.Item = itemValue;
            obj.Quantity = orderValue;

            if (obj.Quantity > 0){
                reportArr.push(obj);
            }
        });

       var dd = {
           content: [
               {
                   table:{
                       body:[
                           reportArr
                       ]
                   }
               }
           ]
       }

        console.log(reportArr);
        //pdfMake.createPdf(dd).open();
    });

    $('#inventoryTable').on( 'click', 'tbody td:not(:first-child, :last-child) ', function (e) {
        editor.inline( this, {
            onBlur: 'submit'
        } );

    } );

    $(document).on('click','td:nth-child(2)', function(e){
        $('#DTE_Field_onHand').attr('inputmode','decimal');
    });

    $(document).on('click','td:nth-child(3)', function(e){
        $('#DTE_Field_par').attr('inputmode','decimal');
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
       53 : {item: "Arcedian Blend Lettuce", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "53"},
       54 : {item: "Burger Set Lettuce", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "54"},
       55 : {item: "Carrots", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "55"},
       56 : {item: "Roma Tomato", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "56"},
       57 : {item: "Jalapenos", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "57"},
       58 : {item: "Red Pepper", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "58"},
       59 : {item: "Green Pepper", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "59"},
       60 : {item: "Orange", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "60"},
       61 : {item: "Sour Cream", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "61"},
       62 : {item: "Cabbage", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "62"},
       63 : {item: "Cottage Cheese", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "63"},
       64 : {item: "Green Onions", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "64"},
       65 : {item: "Red Onions", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "65"},
       66 : {item: "Cilantro", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "66"},
       67 : {item: "Celery", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "67"},
       68 : {item: "Lime", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "68"},
       69 : {item: "Lemon", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "69"},
       70 : {item: "Eggs", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "70"},
       71 : {item: "Cream Cheese", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "71"},
       72 : {item: "Shredded Mozzarella", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "72"},
       73 : {item: "Horseradish", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "73"},
       74 : {item: "Poppyseed Dressing", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "74"},
       75 : {item: "Romaine", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "28"},
       76 : {item: "Blue Cheese Crumbs", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "76"},
       77 : {item: "Shredded Cheddar", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "77"},
       78 : {item: "Parmesean", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "78"},
       79 : {item: "Swiss Cheese", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "79"},
       80 : {item: "American Cheese", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "80"},
       81 : {item: "Pepper Jack Cheese", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "81"},
       82 : {item: "Sliced Cheddar Cheese", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "82"},
       83 : {item: "Liquid Creamer", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "83"},
       84 : {item: "Milk", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "84"},
       85 : {item: "Buttermilk", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "85"},
       86 : {item: "Whipped Cream", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "86"},
       87 : {item: "Blue Cheese Dressing", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "87"},
       88 : {item: "Butter Spread", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "88"},
       89 : {item: "Oriental dressing", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "89"},
       90 : {item: "Peanut Sauce", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "90"},
       91 : {item: "Habanero peppers", onHand: "1", par: "1", category: "Refrigerator", DT_RowId: "91"},
       92 : {item: "Mayonnaise ", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "92"},
       93 : {item: "Brown Sugar", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "93"},
       94 : {item: "Liquid Butter", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "94"},
       95 : {item: "Ketchup", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "95"},
       96 : {item: "Mustard", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "96"},
       97 : {item: "Vanilla", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "97"},
       98 : {item: "Canned Mushrooms", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "98"},
       99 : {item: "Walnuts", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "99"},
       100 : {item: "Canned Black Olives", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "100"},
       101 : {item: "Pork and Beans", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "101"},
       102 : {item: "Honey Mustard", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "102"},
       103 : {item: "Canned Jalapeños", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "103"},
       104 : {item: "Sliced Pickles", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "104"},
       105 : {item: "Honey", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "105"},
       106 : {item: "Chocolate Chips", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "106"},
       107 : {item: "Sugar", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "107"},
       108 : {item: "Powdered Sugar", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "108"},
       109 : {item: "Salt", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "109"},
       110 : {item: "Tabasco", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "110"},
       111 : {item: "Hershey Syrup", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "111"},
       112 : {item: "Raspberry Sauce", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "112"},
       113 : {item: "BBQ Sauce", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "113"},
       114 : {item: "Korean Sauce", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "114"},
       115 : {item: "Cheese Sauce", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "115"},
       116 : {item: "Apple Cider Vinegar", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "116"},
       117 : {item: "Peach Filling", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "117"},
       118 : {item: "Cherry Filling", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "118"},
       119 : {item: "Apple Filling", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "119"},
       120 : {item: "Blueberry Filling", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "120"},
       121 : {item: "Nacho Chips", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "121"},
       122 : {item: "Green Beans", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "122"},
       123 : {item: "Pizza Sauce", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "123"},
       124 : {item: "Buffalo sauce", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "124"},
       125 : {item: "Sweet Chili", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "125"},
       126 : {item: "Salsa", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "126"},
       127 : {item: "Sweet Gherkin", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "127"},
       128 : {item: "Kitchen/Gravy Bouquet", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "128"},
       129 : {item: "Instant Potatoes", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "129"},
       130 : {item: "Cherries", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "130"},
       131 : {item: "Mandarins", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "131"},
       132 : {item: "Pineapple", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "132"},
       133 : {item: "Macaroni", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "133"},
       134 : {item: "Green Chili", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "134"},
       135 : {item: "Oreos", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "135"},
       136 : {item: "Parmesean", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "136"},
       137 : {item: "French Fried Onions", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "137"},
       138 : {item: "Pancake Syrup", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "138"},
       139 : {item: "Cinnamon Toast Crunch", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "139"},
       140 : {item: "Peanut Butter", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "140"},
       141 : {item: "M&M's", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "141"},
       142 : {item: "Oat Meal (Quick Oats)", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "142"},
       143 : {item: "Pancake Mix", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "143"},
       144 : {item: "Baking Powder", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "144"},
       145 : {item: "Marshmallows", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "145"},
       146 : {item: "Ranch Mix Powder", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "146"},
       147 : {item: "Soy Sauce", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "147"},
       148 : {item: "Queen Olive", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "148"},
       149 : {item: "Black Beans", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "149"},
       150 : {item: "Country Gravy", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "150"},
       151 : {item: "Blended Oil", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "151"},
       152 : {item: "Pure Sesame Oil", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "152"},
       153 : {item: "Hoisin Sauce", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "153"},
       154 : {item: "Molasses", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "154"},
       155 : {item: "Refried Beans", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "155"},
       156 : {item: "White Queso Sauce", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "156"},
       157 : {item: "Potatoes", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "157"},
       158 : {item: "Croutons", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "158"},
       159 : {item: "Caeser Dressing", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "159"},
       160 : {item: "Yellow Onions", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "160"},
       161 : {item: "Flour", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "161"},
       162 : {item: "Corn Meal", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "162"},
       163 : {item: "Crisco Spray", onHand: "1", par: "1", category: "Dry Storage", DT_RowId: "163"},
       164 : {item: "Charcoal", onHand: "1", par: "1", category: "Misc", DT_RowId: "164"},
       165 : {item: "Fly Spray", onHand: "1", par: "1", category: "Misc", DT_RowId: "165"},
       166 : {item: "Sanitizer Tablets", onHand: "1", par: "1", category: "Misc", DT_RowId: "166"},
       167 : {item: "Dishwasher Sanitizer", onHand: "1", par: "1", category: "Misc", DT_RowId: "167"},
       168 : {item: "Dishwasher Temp DET ", onHand: "1", par: "1", category: "Misc", DT_RowId: "168"},
       169 : {item: "Dishwasher Temp Rinses", onHand: "1", par: "1", category: "Misc", DT_RowId: "169"},
       170 : {item: "Flat-top Cleaner", onHand: "1", par: "1", category: "Misc", DT_RowId: "170"},
       171 : {item: "Degreaser", onHand: "1", par: "1", category: "Misc", DT_RowId: "171"},
       172 : {item: "Floorbac", onHand: "1", par: "1", category: "Misc", DT_RowId: "172"},
       173 : {item: "Frying Oil", onHand: "1", par: "1", category: "Misc", DT_RowId: "173"},
       174 : {item: "Mustard Packets", onHand: "1", par: "1", category: "Misc", DT_RowId: "174"},
       175 : {item: "Mayonnaise Packets", onHand: "1", par: "1", category: "Misc", DT_RowId: "175"},
       176 : {item: "Ketchup Packets", onHand: "1", par: "1", category: "Misc", DT_RowId: "176"},
       177 : {item: "Taco Sauce Packets", onHand: "1", par: "1", category: "Misc", DT_RowId: "177"},
       178 : {item: "Tea", onHand: "1", par: "1", category: "Misc", DT_RowId: "178"},
       179 : {item: "Coffee Filters", onHand: "1", par: "1", category: "Misc", DT_RowId: "179"},
       180 : {item: "Coffee", onHand: "1", par: "1", category: "Misc", DT_RowId: "180"},
       181 : {item: "Decaf Coffee", onHand: "1", par: "1", category: "Misc", DT_RowId: "181"},
       183 : {item: "Jelly", onHand: "1", par: "1", category: "Misc", DT_RowId: "183"},
       184 : {item: "Dawn Dish Soap", onHand: "1", par: "1", category: "Misc", DT_RowId: "184"},
       185 : {item: "Lime Off", onHand: "1", par: "1", category: "Misc", DT_RowId: "185"},
       186 : {item: "Sugar Packets", onHand: "1", par: "1", category: "Misc", DT_RowId: "186"},
       187 : {item: "Sweet N' Low", onHand: "1", par: "1", category: "Misc", DT_RowId: "187"},
       188 : {item: "Charcol Lighter", onHand: "1", par: "1", category: "Misc", DT_RowId: "188"},



    };
 
    // Create or update the inventoryArray localStorage entry
    if ( localStorage.getItem('inventoryArray') ) {
        inventoryArray = JSON.parse( localStorage.getItem('inventoryArray') );
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
        language: { search: "" },
        //select: true,
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ],
        initComplete: function(){
            //$('table.dataTable thead tr').addClass('sticky');
            //$('div.col.min-vh-100').removeClass('p-4')
            $('div.dt-buttons, .dataTables_filter, .float-none').wrapAll('<div class="container-fluid sticky-top whiteBack p-0" style="background-color: White"></div>');
            $('.btn.float-none, .dataTables_filter').wrapAll('<div class="row"></div>');
            $('.dataTables_filter').wrap('<div class="col"></div>').addClass('my-2');
            $('.btn.float-none').wrap('<div class="col"></div>').addClass('my-2');
            $('input.form-control.form-control-sm').attr('placeholder','Search...');
            
            //$('#inventoryTable_filter label').text("").html('<input type="search" class="form-control form-control-sm" placeholder="Search..." aria-controls="inventoryTable">');
            //$('input.form-control.form-control-sm').unwrap();
            //$( "label" ).remove( ":contains('Search:')" );
            //$("#inventoryTable_filter label").hide();
                
        },
    });
} );
