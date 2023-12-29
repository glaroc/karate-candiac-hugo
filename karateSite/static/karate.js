$(document).ready(function () {
  var id = "MGLl88TYl5w";
  $("#vidframe").html(to_url(id));
  $("#videomenu").change(function () {
    var ref = to_url($(this).val());
    $("#vidframe").html(ref);
  });
});

const to_url = function (id) {
  return (
    '<iframe width="800" height="450" src="http://www.youtube.com/embed/' +
    id +
    '" frameborder="0" allowfullscreen></iframe>'
  );
};
