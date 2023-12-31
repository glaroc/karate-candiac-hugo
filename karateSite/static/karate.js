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
    '<iframe class="youtube-video" src="https://www.youtube.com/embed/' +
    id +
    '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
  );
};
