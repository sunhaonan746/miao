
var sunhaonan746 = function () {

    //将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 
    //如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
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
    
    //将 array 中的所有元素转换为由 separator 分隔的字符串。
    function join(array, val) {
        var result =""
        for (var i = 0; i < array.length; i++){
            if (i < array.length -1) {
                result += array[i]
                result += val
            } else {
                result+=array[i]
            }
        }
        return result
    }


    //获取array中的最后一个元素。
    function last(array) {
        return array[array.length - 1]
    }


    //这个方法类似_.indexOf ，区别是它是从右到左遍历array的元素。
    function lastIndexOf(array, value, number = array.length -1) {
        for (var i = number; i >= 0; i--){
            if (array[i] == value) {
                return i
            }
        }
        return -1
    }


    //使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
    function fill(array, value, start = 0, end = array.length) {
        for (var i = start; i < end  ;i++){
            array[i] = value
        }
        return array
    }



    //该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身
    function findIndex(array, predicate = _.identity, fromIndex = 0) {
        for (var i = 0; i < array.length;i++){
            if (predicate(array[i])) {
                return i
            }
        }
        return -1
    }



    //减少一级array嵌套深度。
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


    //将array递归为一维数组。
    function flattenDeep(array) {
        
    }

    //根据 depth 递归减少 array 的嵌套层级
    function flattenDepth(array, depth = 1) {
        for (var i = 0; i < depth; i++){
            flatten(array)
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
        flattenDeep,
        flattenDepth,
    }
}()