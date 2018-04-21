<template>
    <div class="type-con">
        <ol class="sub-nav clearfix">
            <li>touch</li>
            <li>untouch</li>
            <li>touchstart</li>
            <li>touchmove</li>
            <li>touchend</li>
            <li>touchcancel</li>
            <li>tap</li>
            <li>press</li>
            <li>doubletap</li>
            <li>swipe</li>
            <li>swipeleft</li>
            <li>swiperight</li>
            <li>swipeup</li>
            <li>swipedown</li>
            <li>pinch</li>
            <li>pinchin</li>
            <li>pinchout</li>
            <li>pinchstart</li>
            <li>pinchend</li>
        </ol>
        <ul class="content">
          <li>
                <h3 class="title">touch</h3>
                <div class="content">
                   touch绑定事件。touch 类似 on。on可以绑定所有事件以及自定义事件，touch只能绑定触摸事件。<br />
                   例如："touchstart touchmove touchend touchcancel  tap press doubletap swipe swipeleft swiperight swipeup swipedown pinch pinchin pinchout pinchstart pinchend"<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').touch( 'tap', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">untouch</h3>
                <div class="content">
                   untouch解绑事件。untouch 类似 off。off可以解绑所有事件以及自定义事件，untouch只能解绑触摸事件。<br />
                    示例：<br />
                    <pre>
gjTool('.box').untouch( 'tap');
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">touchstart</h3>
                <div class="content">
                   touchstart，手指触摸到屏幕<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'touchstart', function(e){
    console.log(e.type);
});
                    </pre>
                    
                </div>
            </li>
            <li>
                <h3 class="title">touchmove</h3>
                <div class="content">
                   touchmove，手指在屏幕上移动<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'touchmove', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">touchend</h3>
                <div class="content">
                    touchend，手指离开屏幕触摸结束<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'touchend', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">touchcancel</h3>
                <div class="content">
                    touchcancel，触摸事件取消，或者被系统强制中断<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'touchcancel', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">tap</h3>
                <div class="content">
                    tap，点按事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'tap', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">press</h3>
                <div class="content">
                    press，长按事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'press', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">doubletap</h3>
                <div class="content">
                    doubletap，双击事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'doubletap', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">swipe</h3>
                <div class="content">
                    swipe，屏幕上滑动事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'swipe', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">swipeleft</h3>
                <div class="content">
                    swipeleft，屏幕上向左滑事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'swipeleft', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">swiperight</h3>
                <div class="content">
                     swiperight，屏幕上向右滑事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'swiperight', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">swipeup</h3>
                <div class="content">
                   swipeup，屏幕上向上滑事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'swipeup', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">swipedown</h3>
                <div class="content">
                    swipedown，屏幕上向下滑事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'swipedown', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">pinch</h3>
                <div class="content">
                    pinch，捏合手势事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'pinch', function(e){
    console.log(e.scale);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">pinch</h3>
                <div class="content">
                    pinch，捏合手势事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'pinch', function(e){
    console.log(e.scale);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">pinchin</h3>
                <div class="content">
                    pinchin，捏合手势缩小事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'pinchin', function(e){
    console.log(e.scale);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">pinchout</h3>
                <div class="content">
                    pinchout，捏合手势放大事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'pinchout', function(e){
    console.log(e.scale);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">pinchstart</h3>
                <div class="content">
                    pinchstart，捏合手势开始事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'pinchstart', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">pinchend</h3>
                <div class="content">
                    pinchend，捏合手势结束事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'pinchend', function(e){
    console.log(e.type);
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
