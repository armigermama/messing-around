$(function(){
  $('#btn').on('click', function(e){
    e.preventDefault();
    var resultsRaw = $('#data-input').parse({
      config: {
        delimiter: ",",
        header: true,
        dynamicTyping: true,
        preview: 0,
        step: undefined
      },
      complete: function(results)
      {                                                                     
        console.log("Parsing completed.");
        console.log(results);
        for (i=0;i<results.results.rows.length; i++){
          for (var key in results.results.rows[i]) {
            var rowItem = '<tr><td>' + key + '</td><td>' + results.results.rows[i][key] + '</td></tr>'
            $('#output').append(rowItem);
          }
      // var rowItem = '<p>' + results.results.rows[i] + '</p>';
      // $('#output').append(rowItem);
        }
        return results;
        // executed when parsing each file completes;
        // this function receives the parse results
      }
      });



  });
  
});