$(document).ready(function () {
  $("#type").keydown(function () {
    if (event.which == 13 || event.keyCode == 13) {
      send();
    }
  });

  $(".type-msg i").on("click", function () {
    send();
  });

  $("#type").focus();

  //*** Funzioni ***//
  function sendMsg() {
    var now = new Date();
    var time = now.getHours() + ":" + now.getMinutes();

    var value = $("#type").val(); // prendo il valore dal campo input
    $("#type").val("");
    var clone = $(".template .msg-box").clone();
    clone.addClass("sent");
    clone.find(".msg-txt").append(value);
    clone.find(".time").append(time);
    $(".conv").append(clone);
  }

  function botMsg() {
    var now = new Date();
    var time = now.getHours() + ":" + now.getMinutes();

    var clone = $(".template .msg-box").clone();
    clone.addClass("received");
    clone.find(".msg-txt").append("Ok");
    clone.find(".time").append(time);
    $(".conv").append(clone);
  }

  function send() {
    sendMsg();
    setTimeout(botMsg, 2000);
  }
});
