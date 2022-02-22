$(function () {
  $("#players,#mixers,#bin")
    .sortable({
      connectWith: ".connect",
      items: "li:not(.ui-state-disabled)",
    })
    .disableSelection();
});
