        //
        let miniSlide = setInterval(() => {
            moveSlide();
          }, 3000);
        
          $(" .mini-slide> li")
            .mouseover(function () {
              clearInterval(miniSlide);
            })
            .mouseleave(function () {
              miniSlide = setInterval(() => {
                moveSlide();
              }, 3000);
            });
        
          function moveSlide() {
            const margin = 30;
            const liWidth = $(".mini-slide > li > img").width();
            const move = (margin + liWidth) * -1;
            $(".mini-slide").animate(
              {
                marginLeft: move,
              },
              1000,
              replace
            );
        
            function replace() {
              const li = $(".mini-slide > li:eq(0)");
              li.remove();
              $(".mini-slide").css("margin-left", "0px");
              $(".mini-slide").append(li);
            }
          }
      