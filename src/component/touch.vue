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
                   touch绑定事件。touch 类似 on。on可以绑定所有事件以及自定义事件，touch只能绑定触摸事件。</br>
                    示例：</br>
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
                   untouch解绑事件。untouch 类似 off。off可以解绑所有事件以及自定义事件，untouch只能解绑触摸事件。</br>
                    示例：</br>
                    <pre>
                      gjTool('.box').untouch( 'tap');
                    </pre>
                </div>
            </li>
            <li>
                <h3 class="title">touchstart</h3>
                <div class="content">
                    extend扩展插件。gjTool.fn.protoType或者gjTool.protoType上添加方法。</br>
                    示例：</br>
                    
                </div>
            </li>
            <li>
                <h3 class="title">touchmove</h3>
                <div class="content">
                   extend扩展插件。gjTool.fn.protoType或者gjTool.protoType上添加方法。</br>
                    示例：</br>
                </div>
            </li>
            <li>
                <h3 class="title">touchend</h3>
                <div class="content">
                   extend扩展插件。gjTool.fn.protoType或者gjTool.protoType上添加方法。</br>
                    示例：</br>
                </div>
            </li>
            <li>
                <h3 class="title">touchcancel</h3>
                <div class="content">
                   extend扩展插件。gjTool.fn.protoType或者gjTool.protoType上添加方法。</br>
                    示例：</br>
                </div>
            </li>
            <li>
                <h3 class="title">tap</h3>
                <div class="content">
                   extend扩展插件。gjTool.fn.protoType或者gjTool.protoType上添加方法。</br>
                    示例：</br>
                </div>
            </li>
            <li>
                <h3 class="title">longTap</h3>
                <div class="content">
                   extend扩展插件。gjTool.fn.protoType或者gjTool.protoType上添加方法。</br>
                    示例：</br>
                </div>
            </li>
            <li>
                <h3 class="title">doubleTap</h3>
                <div class="content">
                   extend扩展插件。gjTool.fn.protoType或者gjTool.protoType上添加方法。</br>
                    示例：</br>
                </div>
            </li>
            <li>
                <h3 class="title">swipe</h3>
                <div class="content">
                   extend扩展插件。gjTool.fn.protoType或者gjTool.protoType上添加方法。</br>
                    示例：</br>
                </div>
            </li>
            <li>
                <h3 class="title">swipeLeft</h3>
                <div class="content">
                   extend扩展插件。gjTool.fn.protoType或者gjTool.protoType上添加方法。</br>
                    示例：</br>
                </div>
            </li>
            <li>
                <h3 class="title">swipeRight</h3>
                <div class="content">
                   extend扩展插件。gjTool.fn.protoType或者gjTool.protoType上添加方法。</br>
                    示例：</br>
                </div>
            </li>
            <li>
                <h3 class="title">swipeUp</h3>
                <div class="content">
                   extend扩展插件。gjTool.fn.protoType或者gjTool.protoType上添加方法。</br>
                    示例：</br>
                </div>
            </li>
            <li>
                <h3 class="title">swipeDown</h3>
                <div class="content">
                   extend扩展插件。gjTool.fn.protoType或者gjTool.protoType上添加方法。</br>
                    示例：</br>
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
