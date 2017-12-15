
$(function () {
    var $doTheMath = $('#do-the-math');
    var $aInput = $('#a');
    var $bInput = $('#b');
    var $cInput = $('#c');
    var $container = $('#container');


function show(message)
{
    $('#container').html($('#container').html() + '<br>' + message);
}

function getX(a, b, c)
{
    var result = [];
    var delta = Math.pow(b, 2) - 4 * a * c;
    console.log(delta);
    if (delta < 0) {
        return "Nu are solutii reale";
    }
    console.log(-b + Math.sqrt(delta));
    result.push((-b + Math.sqrt(delta)) / (2 * a));
    result.push((-b - Math.sqrt(delta)) / (2 * a));
    return result;
}

    $doTheMath.click(function (e) {

        var a = $aInput.val();
        var b = $bInput.val();
        var c = $cInput.val();

        var result = getX(a, b, c);
        if (typeof result == 'string') {
            $container.html(result);
        } else {
            $container.html(result[0] + ", " + result[1]);
        }

        e.preventDefault();
    });


});









