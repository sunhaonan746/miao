
var sunhaonan746 = function () {
    function chunk(array, number) {
        var result = []
        for (var i = 0; i < array.length / number; i++){
            var a  = Array(number)
            for (var j = 0; j < number; j++){
                a.push(array[ i * number + j])
            }
            result.push(a)
        }
        var b = [],c= array.length - 1
        for (var i = 0; i < array.length % number; i++){
            b.push(array[c])
            c--
        }
        return result.push(b)

    }
    
    return {
        chunk,
    }
}()