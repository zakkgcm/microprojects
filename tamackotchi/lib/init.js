// Generated by CoffeeScript 1.3.3
(function() {
  var _this = this;

  $(function() {
    var g;
    _this.sound.init($("#main-container"));
    g = new _this.Game(_this);
    ($("#feed-pet")).click(function() {
      return g.feedPet({
        value: 10
      });
    });
    return g.run();
  });

}).call(this);
