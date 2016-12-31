$(function() {

  // your code will go here
  var reportCardUrl = "https://www.codeschool.com/users/2221429.json";

  $.ajax(
    {
      url: reportCardUrl,
      dataType : 'jsonp',
      success : function(response) {
          // handle response
          var $badges = $("#badges");
          $.each(response.courses.completed, function(index, course) {
            $badges.append('<div class="course">' +
                              '<h3>' +
                                course.title + 
                              '</h3>' +
                              '<img src="' + course.badge + '"/>' +
                              '<a href="' + course.url + '" ' +
                                  ' class="btn btn-primary" target="_blank" >' +
                               'See Course</a>' +
                           '</div>');
          });
      }
    }
  )
});
