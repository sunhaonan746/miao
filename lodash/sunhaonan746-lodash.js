
var sunhaonan746 = function () {
    function chunk(array, number) {
        var result = []
        for (var i = 0; i < Math.ceil(array.length / number); i++){
            var a  = Array()
            for (var j = 0; j < number; j++){
                if (i * number + j < array.length) {
                    a.push(array[ i * number + j])
                } else {
                    break
                }
            }
            result.push(a)
        }
        return result
    }
    
    return {
        chunk,
    }
}()