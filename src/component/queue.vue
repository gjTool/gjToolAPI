<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>queue</li>
            <li>delay</li>
            <li>dequeue</li>
        </ol>
        <ul class="content">
            <li>
                <h3 class="title">queue</h3>
                <div class="content">
                    queue(obj, fn);增加函数队列。<br /><br />
                    obj：可选。对象，给对象或者元素增加函数队列，默认document。<br />
                    fn：必需。函数或者数组，要加入队列的一个函数或者一个存储函数的数组。<br />
                    <pre>
var fn = function(){
    alert(1);
}
gjTool.queue(fn)
                    </pre>
                    <pre>
var fn1 = function(){
    alert(1);
}
var fn2 = function(){
    alert(2);
}
var arr = [fn1,fn2];
gjTool.queue(arr)
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">delay</h3>
                <div class="content">
                    delay(obj, time);增加函数队列延时。<br /><br />
                    obj：可选。对象，给对象或者元素增加队列延时，默认document。<br />
                    time：必需。数字，单位毫秒，要延时的时间。<br />
                    <pre>
gjTool.delay(2000)                        
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">dequeue</h3>
                <div class="content">
                    dequeue(obj,fn);执行函数队列。<br /><br />
                    obj：可选。对象，执行对象或者元素的函数队列，默认document。<br />
                    fn：可选。函数，函数队列执行完毕的回调函数，可以获取队列的返回值，数组形式。<br />
                    <pre>
var arr = [fn1,fn2];
gjTool.queue(arr);
gjTool.dequeue(function(){
    alert("函数执行完毕")
});
                    </pre>
                    <pre>
var fn1 = function(){
    alert(1);
}
var fn2 = function(){
    alert(2);
}
gjTool.queue(fn1).delay(2000).queue(fn2) ;
gjTool.dequeue(function(){
    alert("函数执行完毕")
});
                    </pre>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>

</style>
