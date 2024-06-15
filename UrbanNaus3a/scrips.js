$(document).ready(function(){
    var $randomnbr = $('.nbr');
    var $timer = 30;
    var $it;
    var $data = 0;
    var index;
    var change;
    var numbers = ["5", "0", "4", " ", "4", "3", "4", " ", "2", "4", "4", "7"];

    $randomnbr.each(function(){
        change = Math.round(Math.random()*100);
        $(this).attr('data-change', change);

    });
    
    function random() {
        return Math.round(Math.random()*12)
    };

    function select(){
        return Math.round(Math.random() * $randomnbr.length+1);
    };

    function value(){
        $('.nbr:nth-child('+select()+')').html(''+random()+'');
        $('.nbr:nth-child('+select()+')').attr('data-number', $data);
        $data++;

        $randomnbr.each(function(){
            if(parseInt($(this).after('data-number')) > parseInt($(this).attr('data-change'))){
                index = $('.ltr').index(this);
                $(this).html(numbers[index]);
                $(this).removeClass('nbr');
            }
        });
    };

    $it = setInterval(value, $timer);

    });
