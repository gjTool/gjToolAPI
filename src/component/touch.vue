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
            <li>longTap</li>
            <li>doubleTap</li>
            <li>swipe</li>
            <li>swipeLeft</li>
            <li>swipeRight</li>
            <li>swipeUp</li>
            <li>swipeDown</li>
        </ol>
        <ul class="content">
          <li>
                <h3 class="title">touch</h3>
                <div class="content">
                   touch绑定事件。touch 类似 on。on可以绑定所有事件以及自定义事件，touch只能绑定触摸事件。<br />
                   例如："touchstart touchmove touchend touchcancel  tap longTap doubleTap swipe swipeLeft swipeRight swipeUp swipeDown"<br /><br />
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
                <h3 class="title">longTap</h3>
                <div class="content">
                    longTap，长按事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'longTap', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">doubleTap</h3>
                <div class="content">
                    doubleTap，双击事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'doubleTap', function(e){
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
                <h3 class="title">swipeLeft</h3>
                <div class="content">
                    swipeLeft，屏幕上向左滑事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'swipeLeft', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">swipeRight</h3>
                <div class="content">
                     swipeRight，屏幕上向右滑事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'swipeRight', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">swipeUp</h3>
                <div class="content">
                   swipeUp，屏幕上向上滑事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'swipeUp', function(e){
    console.log(e.type);
});
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">swipeDown</h3>
                <div class="content">
                    swipeDown，屏幕上向下滑事件<br /><br />
                    示例：<br />
                    <pre>
gjTool('.box').on( 'swipeDown', function(e){
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
