$('#myList a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('#myList a[href="#profile"]').tab('show') // Select tab by name
  $('#myList a:first').tab('show') // Select first tab
  $('#myList a:last').tab('show') // Select last tab
  $('#myList li:eq(2) a').tab('show') // Select third tab (0-indexed)