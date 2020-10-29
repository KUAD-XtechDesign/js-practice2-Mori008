$(function(){

    let hako =  0;

    function checkbox(){
        if(hako > 5){
            $("#content").text(hako + "個入っています。箱はいっぱいです、空にします");
            hako = 0;
            $("#content").removeClass().addClass("empty");
        }else if(hako <= 0){
            hako = 0;
            $("#content").text(hako + "個入ってません。");
        }else{
            $("#content").text(hako + "個入っています。まだ入ります。");
            $("#content").removeClass().addClass("re");
        }
    }


    $("#button01").on("click",function(){
        checkbox();
    })

    $("#button02").on("click",function(){
        hako = hako + 1;
        checkbox();
    })
  
    $("#button03").on("click",function(){
        hako = hako - 1;
        checkbox();
    })

    

})