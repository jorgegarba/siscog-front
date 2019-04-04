/* ------------------------------------------------------------------------------
 *
 *  # Invoice archive
 *
 *  Demo JS code for invoice_archive.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var InvoiceArchive = function() {


    //
    // Setup module components
    //

    // Datatable
    var _componentDatatable = function() {
        if (!$().DataTable) {
            console.warn('Warning - datatables.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.invoice-archive').DataTable({
            autoWidth: false,
            columnDefs: [
                {
                    width: 30,
                    targets: 0
                },
                {
                    visible: false,
                    targets: 2
                },
                { 
                    orderable: false,
                    width: 120,
                    targets: 7
                },
                {
                    width: '15%',
                    targets: [4, 5]
                },
                {
                    width: '15%',
                    targets: 6
                },
                {
                    width: '15%',
                    targets: 3
                }
            ],
            order: [[ 1, 'desc' ]],
            dom: '<"datatable-header"fl><"datatable-scroll-lg"t><"datatable-footer"ip>',
            language: {
                info: "Mostrando página _PAGE_ de _PAGES_",
                search: '<span>Filtrar:</span> _INPUT_',
                searchPlaceholder: 'Escriba para filtrar...',
                lengthMenu: '<span>Ver filas de :</span> _MENU_',
                paginate: { 'first': 'First', 'last': 'Last', 'next': $('html').attr('dir') == 'rtl' ? '&larr;' : '&rarr;', 'previous': $('html').attr('dir') == 'rtl' ? '&rarr;' : '&larr;' }
            },
            lengthMenu: [ 25, 50, 75, 100 ],
            displayLength: 25,
            drawCallback: function ( settings ) {
                var api = this.api();
                var rows = api.rows( {page:'current'} ).nodes();
                var last=null;
     
                api.column(2, {page:'current'} ).data().each( function ( group, i ) {
                    if ( last !== group ) {
                        $(rows).eq( i ).before(
                            '<tr class="table-active table-border-double"><td colspan="8" class="font-weight-semibold">'+group+'</td></tr>'
                        );
     
                        last = group;
                    }
                });

                // Initializw Select2
                if (!$().select2) {
                    console.warn('Warning - select2.min.js is not loaded.');
                    return;
                }
                $('.form-control-select2').select2({
                    width: 150,
                    minimumResultsForSearch: Infinity
                });
            }
        });
    };

    // Select2 for length menu styling
    var _componentSelect2 = function() {
        if (!$().select2) {
            console.warn('Warning - select2.min.js is not loaded.');
            return;
        }

        // Initialize
        $('.dataTables_length select').select2({
            minimumResultsForSearch: Infinity,
            dropdownAutoWidth: true,
            width: 'auto'
        });
    };


    //
    // Return objects assigned to module
    //

    return {
        init: function() {
            _componentDatatable();
            _componentSelect2();
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    InvoiceArchive.init();
});
