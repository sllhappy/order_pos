<template>
  <div class="left">
    <ul>
      <li>
        <i class="icon iconfont icon-dianpu"></i>
        <p>店铺</p>
      </li>
       <li>
        <i class="icon iconfont icon-huiyuanqia"></i>
        <p>会员</p>
      </li>
       <li>
        <i class="icon iconfont icon-monitor"></i>
        <p>监视器</p>
      </li>
       <li>
        <i class="icon iconfont icon-users"></i>
        <p>管理</p>
      </li>
    </ul>
    
    
  </div>
</template>

<script>
export default {
  name: "left",
  data(){
      return {
          
      }
  }
  
};
</script>

<style>
.left{
  font-size:12px;
  width:6%;
  height:100%;
  float:left;
  background-color: #654;
}
ul{
  padding:15px 0 0 0;
  margin:0;
}
ul li{
  list-style:none;
  text-align:center;
}
.iconfont{
  font-size:26px;
  color: #399933;
}
ul li p{
  color:#fff;
}

</style>


