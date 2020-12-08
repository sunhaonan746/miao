
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
                array.splice(i,1,...array[i])
                break
            }
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


    //与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。
    function fromPairs(pairs) {
        var map = {}
        for (var i = 0; i < pairs.length;i++){
            map[pairs[i][0]] = pairs[i][1]
        }
        return map
    }



    //获取数组 array 的第一个元素。
    function head(array) {
        return array[0]
    }


    //使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值，
    //如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
    function indexOf(array, value, fromIndex = 0) {
        if (fromIndex < 0) {
            return lastIndexOf(array,value,array.length -2)
        } else {
            for (var i = fromIndex; i < array.length;i++){
                if (array[i] == value) {
                    return i
                }
            }
            return - 1
        }
    }

    //获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。
    function initial(array) {
        array.length = array.length - 1
        return array
    }

    //创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
    function compact(array) {
        for (var i = 0; i < array.length;i++){
            if (!array[i]) {
                array.splice(i, 1)
                i--
            }
        }
        return array
    }
    

    //创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
    function drop(array, n = 1) {
        var result = []
        for (var i = n; i < array.length;i++){
            result.push(array[i])
        }
        return result
    }



    //创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
    function dropRight(array, n = 1) {
        var result = []
        for (var i = 0; i < array.length -n;i++){
            result.push(array[i])
        }
        return result
    }


    //反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。
    function reverse(array) {
        var result = []
        for (var i = array.length -1; i >=0 ;i--){
            result.push(array[i])
        }
        return result
    }


    //使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。
    function sortedIndex(array, value) {
        var a = true
        for (var i = 0; i < array.length ;i++){
            if (array[i] >= value) {
                a =false
                return i
            }
        }
        if (a) {
            return array.length
        }
    }


    //通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值。
    //一旦 predicate（断言函数） 返回假值，迭代就马上停止。predicate（断言函数）调用三个参数： (value, index | key, collection) 。
    function every(collection, predicate ) {
        for (var i = 0; i < collection.length;i++){
            if (!predicate(collection[i])) {
                return false
            }
        }
        return true
    }


    //遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)。
    function filter(collection, predicate = _.identity) {
        
    }


    //遍历 collection（集合）元素，返回 predicate（断言函数）第一个返回真值的第一个元素。predicate（断言函数）调用3个参数： (value, index|key, collection)
    function find(collection, predicate=_.identity, fromIndex=0) {
        for (var i = fromIndex; i < collection.length;i++){
            if (predicate(collection[i])) {
                return true
            }
        }
        return false
    }


    //转换 value 为一个数组。
    function toArray(value) {
        var a = []
        if (typeof(value) == "object") {
            for (let key in value) {
                a.push(value[key])
            }
        } else {
             for (var i = 0; i < value.length;i++){
                a.push(value[i])
            }
        }
       return a 
    }



    //计算 array 中的最大值。 如果 array 是 空的或者假值将会返回 undefined。
    function max(array) {
        if (!array.length) {
            return undefined
        }
        var sum = -Infinity
        for (var i = 0; i < array.length;i++){
            if (sum < array[i]) {
                sum = array[i]
            }
        }
        return sum
    }


    //这个方法类似_.max 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。 iteratee 会调用1个参数: (value) 。
    function maxBy(array, iteratee) {
        var a = []
        for (var i = 0; i < array.length;i++){
            if (iteratee(array[i])) {
                a.push(array[i])
            }
        }
        max(a)
    }


    //计算 array 中的最小值。 如果 array 是 空的或者假值将会返回 undefined。
    function min(array) {
        if (!array.length) {
            return undefined
        }
        var sum = Infinity
        for (var i = 0; i < array.length;i++){
            if (sum > array[i]) {
                sum = array[i]
            }
        }
        return sum
    }


    //这个方法类似_.summin 除了它接受 iteratee 来调用 array中的每一个元素，来生成其值排序的标准。 iteratee 会调用1个参数: (value) 。
    function sumBy(array, iteratee) {
        var a = 0
        for (var i = 0; i < array.length;i++){
            if (iteratee(array[i])) {
                a +=iteratee(array[i])
            }
        }
       return a 
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
        fromPairs,
        head,
        indexOf,
        initial,
        compact,
        drop,
        dropRight,
        reverse,
        sortedIndex,
        every,
        filter,
        find,
        max,
        maxBy,
        min,
        toArray,
        sumBy,
    }
}()