// 弹出视屏
(function(){
    var playBtn = document.querySelector('#section1 .play'),
        dialog = document.querySelector('.dialog'),
        movie = document.querySelector('.movie'),
        closeBtn = document.querySelector('.closeBtn'),
        shadow = document.querySelector('.shadow'),
        moveInner = movie.innerHTML;

        playBtn.onclick = function(){
            dialog.style.display = shadow.style.display = 'block';
            movie.innerHTML = moveInner;
        };
        closeBtn.onclick = function(){
            dialog.style.display = shadow.style.display = 'none';
            movie.innerHTML = '';
        };
})();


//选项卡

(function(){
    function tab(btn,cont){
        var btn = btn.children,

            cont = cont.children;

            for(var i=0;i<btn.length;i++){
                btn[i].index = i;
                btn[i].onclick = function(){
                       for(var i=0;i<btn.length;i++){
                           btn[i].classList.remove('active');
                           cont[i].classList.remove('active');
                       }
                       this.classList.add('active');
                       cont[this.index].classList.add('active');
                };
            }
            
    }
    var tabBtn = document.querySelectorAll('.tabBtn');
    var tabContent = document.querySelectorAll('.tabContent');
    for(var i=0;i<tabContent.length;i++){
        tab(tabBtn[i],tabContent[i]);
    }
    
})();

// 新增场景
(function(){
    var section4 = document.querySelector('#section4'),
        lis = document.querySelectorAll('#section4 li'),
        bottom = document.querySelector('.bottom');
        

        for(var i=0;i<lis.length;i++){
            lis[i].index = i;
            lis[i].onclick = function(){
                for(var i=0;i<lis.length;i++){
                    lis[i].classList.remove('active');
                }
                this.classList.add('active');
                section4.style.background = 'url(images/section4_big_0'+(this.index+1)+'.png) no-repeat center top';
                bottom.style.background = 'url(images/section4_big_0'+(this.index+1)+'_bottom.png) no-repeat center top';
            };
          
        }
        
})();

// 手风琴
(function(){
     var lis = document.querySelectorAll("#section7 li");
     for(var i=0;i<lis.length;i++){
         lis[i].index = i;
         lis[i].onclick = function(){

            for(var i=0;i<lis.length;i++){
                lis[i].classList.remove('active');
            }
            this.classList.add('active');
         }; 
     }
})();

// 轮播图

(function(){
    function caurel(id){
        var wrap = document.querySelector(id + ' .wrap'),
            ul = document.querySelector(id + ' ul'),
            prev = document.querySelector(id + ' .prev'),
            next = document.querySelector(id + ' .next'),
            circles = document.querySelectorAll(id + ' .circle span'),

            
            boxWidth = wrap.offsetWidth;
            var canClick = true;//是否可以进行下一次点击
            var timer = null;
           
            ul.innerHTML += ul.innerHTML;
            var len = ul.children.length;
            ul.style.width = len*boxWidth + 'px';
            ul.style.transform = 'translateX(0px)';

            var cn = 0; //当前图片索引值
            var ln = 0;//当前选中原点的索引值


            next.onclick = function(){

                if(!canClick){
                    return;
                }
                cn++;
                move();
            };

            prev.onclick = function(){
                if(!canClick){
                    return;
                }

                if(cn == 0){
                    cn = len / 2;
                    ul.style.transition = null;
                    ul.style.transform = 'translateX('+ -cn * boxWidth + 'px)';
                    
                }

                setTimeout(function(){
                    cn--;
                    move();
                },13);

            };

            for(var i=0;i<circles.length;i++){
                circles[i].index = i;
                circles[i].onclick = function(){
                    if(!canClick){
                        return;
                    }  

                    cn = this.index;
                    move();
                };
            }



            function move(){

                canClick = false;
                ul.style.transition = '.3s';
                ul.style.transform = 'translateX('+ -cn*boxWidth + 'px)';


                var hn = cn%(len/2);//原点对应的索引值
                circles[ln].className = '';
                circles[hn].className = 'active';

                ln = hn;

            }

        
            
            ul.addEventListener('transitionend', function () {
                if (cn == len / 2) {
                    cn = 0;
    
                    ul.style.transition = null;
                    ul.style.transform = 'translateX(0)';
                }
    
                canClick = true;
            });
    
            timer = setInterval(next.onclick, 3000);
        }
    caurel('#section3');
    caurel('#section5');
})();



(function(){
    ul = document.querySelector('#section8 ul'),
    lis = ul.children,
    prev = document.querySelector('#section8 .prev'),
    next = document.querySelector('#section8 .next'),
    spans = document.querySelectorAll('#section8 .circle span'),
    cn = 0,//图片索引
    ln = 0;//当前选中原点的索引


    next.onclick = function(){

        cn++;

        cn = cn % (lis.length);

        ul.appendChild(lis[0]);

        spans[ln].className = '';
        spans[cn].className = 'active';

        ln = cn;

    };
    prev.onclick = function(){
        cn--;
        if(cn < 0){
            cn = lis.length - 1;
        }
        ul.insertBefore(lis[lis.length-1],lis[0]);
        spans[ln].className = '';
        spans[cn].className = 'active';

        ln = cn;

    };



})();