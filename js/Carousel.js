(function() {

    /* --------------------

        Carousel

    -------------------- */
    var Carousel = function($){
        /* -----------------------
        *  使用する変数、関数を定義する
        ----------------------- */
        var  _main=$('.Carousel__main'),
             _item=$('.Carousel__item'),
             _nextButton=$('.Carousel__arrow--next'),
             _prevButton=$('.Carousel__arrow--prev'),
             _itemWidth= _item.width(),
             _clickCount=0,
             _move,
             _count,
             _clickEvent;

        _main.css({
          'width':_itemWidth* _item.length
        });

        _move = function(){
          _main.animate({
            'left' : -(_itemWidth *_clickCount)
          },700);
        };
        _count = function(){
          if(_clickCount == 0){
            _prevButton.hide();
          }else if(_clickCount == _item.length-1){
            _nextButton.hide();
          }else{
            _prevButton.show();
            _nextButton.show();
         };
       };
        _clickEvent = function(){
          _nextButton.click(function () {
  　　　　　　　_clickCount = _clickCount+1;
                _move();
                _count();
              });
          _prevButton.click(function(){
              _clickCount = _clickCount-1;
                _move();
                _count();

          });
        };

      _count();
      _clickEvent();


    }(jQuery);

    Carousel();

})();
