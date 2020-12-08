
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
    

    function join(array, val) {
        var result =""
        for (var i = 0; i < array.length; i++){
            if (i < array.length -1) {
                result+=array[i] + val
            } else {
                result+=array[i]
            }
        }
        return result
    }

    function last(array) {
        return array[array.length - 1]
    }

    function lastIndexOf(array, value, number = array.length -1) {
        for (var i = number; i >= 0; i--){
            if (array[i] == value) {
                return i
            }
        }
        return -1
    }

    function fill(array, value, start = 0, end = array.length) {
        for (var i = start; i < end  ;i++){
            array[i] = value
        }
        return array
    }

    function findIndex(array, predicate = _.identity, fromIndex = 0) {
        for (var i = 0; i < array.length;i++){
            if (predicate(array[i])) {
                return i
            }
        }
        return -1
    }


    function flatten(array) {
        var sum 
        for (var i = 0; i < array.length;i++){
            if (typeof (array[i]) == "object") {
                sum = array[i]
                array.splice(i)
                break
            }
        } 
        for (var i = 0; i < sum.length;i++){
            array.push(sum[i])
        }
        return array
    }


    return {
        chunk,
        join,
        last,
        lastIndexOf,
        fill,
        findIndex,
        flatten,
    }
}()