// $(document).ready(() => {
    var target1=$('#rocket1');
    var change = {
        transform: translateY("0vh")
    }
    let animation= anime({
        targets: change,
        transform: translateY("-50vh"),
        round: 1,
        easing: 'linear',
        update: function() {
            target1.innerHTML = JSON.stringify(battery);
        }
    });
    $('#move').on('click', animation.play);
    $('#move').on('click', change_name);
    change_name= function(){
        $('#move').html("click");
    }
// })
