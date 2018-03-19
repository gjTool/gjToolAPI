<template>
    <ul class="nav">
        <li class="type active" data-id="introduce">
          <router-link to="/introduce">简介</router-link>
        </li>
        <li class="type" data-id="selector">
          <router-link to="/selector">选择器</router-link>
        </li>
        <li class="type" data-id="ergodic">
          <router-link to="/ergodic">遍历</router-link>
        </li>
        <li class="type" data-id="class">
          <router-link to="/class">CLASS类</router-link>
        </li>
        <li class="type" data-id="css">
          <router-link to="/css">CSS类</router-link>
        </li>
        <li class="type" data-id="attr">
          <router-link to="/attr">属性操作</router-link>
        </li>
        <li class="type" data-id="dom">
         <router-link to="/dom">DOM操作</router-link>
        </li>
        <li class="type" data-id="animation">
          <router-link to="/animation">动画</router-link>
        </li>
        <li class="type" data-id="event">
          <router-link to="/event">事件</router-link>
        </li>
        <li class="type" data-id="ajax">
          <router-link to="/ajax">AJAX</router-link>
        </li>
        <li class="type" data-id="queue">
          <router-link to="/queue">函数队列</router-link>
        </li>
        <li class="type" data-id="tool">
          <router-link to="/tool">常用工具</router-link>
        </li>
        <li class="type" data-id="plugin">
          <router-link to="/plugin">插件</router-link>
        </li>
        <li class="type" data-id="touch">
          <router-link to="/touch">Touch</router-link>
        </li>
    </ul>
</template>
<script>
export default {
  
}
</script>
<style>
 .nav .type a {
   display: block;
   width: 100%;
   height: 100%;
   color: #000;
   padding-bottom: 0.05rem; 
 }
  .nav .type a:hover {
  color: #3879d9;
}
 .nav .type a.router-link-active {
  background-color: #0087ff;
  color: #fff;
}
</style>

