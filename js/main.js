window.onload = function(){

    var video = document.getElementById("video");
    var lis = document.getElementsByTagName("li");
    var vLen = lis.length; // 播放列表的长度
    var url = [];
    var ctrl = document.getElementById("playList-hidden");
    var ctrl_show = document.getElementById('playList-show1');
    var aside = document.getElementById("playList");
    var curr = 1; // 当前播放的视频

    for(var i=0;i<lis.length;i++){

        url[i] = lis[i].getAttribute("value");

    }

    //绑定单击事件
    for(var i=0;i<lis.length;i++){

        lis[i].onclick = function(){
            for(var j=0;j<lis.length;j++){
                if(lis[j] == this){
                    video.setAttribute("src",this.getAttribute("value"));
                    video.setAttribute('autoplay','autoplay');
                    this.innerHTML = this.innerHTML+'已观看 ';
                    this.className = "select";
                    curr = j+1;
                }else{
                    this.innerHTML = this.innerHTML;
                    lis[j].className = "";
                }
            }


//			console.log(this.getAttribute("value"));  //调试代码
        }

    }


    }


