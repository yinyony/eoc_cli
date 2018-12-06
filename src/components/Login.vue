<template>
  <div class="loginandrigister">
    <h1>welcome</h1>
    <div class="container w3layouts agileits">

      <div class="login w3layouts agileits">
        <h2>登 录</h2>
        <form action="#" method="post">
          <input type="text" Name="Userame" placeholder="用户名" required="">
          <input type="password" Name="Password" placeholder="密码" required="">
        </form>
        <ul class="tick w3layouts agileits">
          <li>
            <!--<input type="checkbox" id="brand1" value="">-->
            <!--<label for="brand1"><span></span>记住我</label>-->
          </li>
        </ul>
        <div class="send-button w3layouts agileits">
          <form>
            <input type="submit" value="登 录">
          </form>
        </div>
        <a href="#">记住密码?</a>
        <!--<div class="social-icons w3layouts agileits">-->
          <!--<p>- 其他方式登录 -</p>-->
          <!--<ul>-->
            <!--<li class="qq"><a href="#">-->
              <!--<span class="icons w3layouts agileits"></span>-->
              <!--<span class="text w3layouts agileits">QQ</span></a></li>-->
            <!--<li class="weixin w3ls"><a href="#">-->
              <!--<span class="icons w3layouts"></span>-->
              <!--<span class="text w3layouts agileits">微信</span></a></li>-->
            <!--<li class="weibo aits"><a href="#">-->
              <!--<span class="icons agileits"></span>-->
              <!--<span class="text w3layouts agileits">微博</span></a></li>-->
            <!--<div class="clear"> </div>-->
          <!--</ul>-->
        <!--</div>-->
        <div class="clear"></div>
      </div><div class="copyrights">Collect from <a href="http://www.cssmoban.com/" >企业网站模板</a></div>
      <div class="register w3layouts agileits">
        <h2>注 册</h2>
        <form action="#" method="post">
          <input type="text" Name="name" placeholder="用户名" v-model="rName">
          <input type="text" Name="phoneNumber" placeholder="手机号码" v-model="rphoneNumber">
          <input type="text" Name="email" placeholder="邮箱" v-model="remail" v-validate data-rules="required|email">
          <input type="password" Name="password" placeholder="密码" v-model="rpassword">
        </form>
        <div class="send-button w3layouts agileits">
          <!--<form>-->
            <input type="submit" value="注册" v-on:click="register">
          <!--</form>-->
        </div>
        <div class="clear"></div>
      </div>

      <div class="clear"></div>

    </div>

    <div class="footer w3layouts agileits">
      <p>Copyright &copy; eoc</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'p',
      rName: '',
      rphoneNumber: '',
      remail: '',
      rpassword: ''
    }
  },
  methods: {
    register () {
      var data = {'name': this.rName}
      this.$http.post('/api/userList',
        JSON.stringify(data)).then((res) => {
        debugger
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/login.css";
</style>
