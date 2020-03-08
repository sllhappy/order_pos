<template>
  <div class="posmenu">
    <div>
      <el-row >
            <el-col :span='7' class="order" id="pos-order">
              <el-tabs>
                <el-tab-pane label="点餐">
                  <el-table :data="tableData" border style="width: 100%">
                    <el-table-column
                      prop="goodsName"
                      label="商品"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="price"
                      label="金额"
                      width="60">
                    </el-table-column>
                    <el-table-column
                      prop="count"
                      label="数量"
                      width="60">
                    </el-table-column>
                    <el-table-column
                      fixed="right"
                      label="增减"
                      width="100">
                      <template slot-scope="scope">
                        <el-button type="text" size="small" @click="delGoods(scope.row)">减少</el-button>
                        <el-button type="text" size="small" @click="addGoods(scope.row)">增加</el-button>
                      </template>
                    </el-table-column>
                </el-table>
                <div class="sumDiv">
                  <span>总数量：</span>{{allCount}}
                  <span>总金额：</span>{{allMoney}}
                </div>
                <div class="handle">

                  <el-button type="text" class="font" @click="solveMenu()">结账</el-button>
                  <el-button type="text" class="font" @click="upMenu()">挂单</el-button>
                  <el-button type="text" class="font" @click="delMenu()">删除</el-button>
                </div>
                </el-tab-pane>
                <el-tab-pane label="挂单">
                  <el-table :data="upData" border style="width: 100%">
                    <el-table-column
                      prop="goodsName"
                      label="商品"
                      width="100">
                    </el-table-column>
                    <el-table-column
                      prop="price"
                      label="金额"
                      width="60">
                    </el-table-column>
                    <el-table-column
                      prop="count"
                      label="数量"
                      width="60">
                    </el-table-column>
                    <el-table-column
                      fixed="right"
                      label="增减"
                      width="100">
                      <template slot-scope="scope">
                        <el-button type="text" size="small" @click="upDelGoods(scope.row)">减少</el-button>
                        <el-button type="text" size="small" @click="upAddGoods(scope.row)">增加</el-button>
                      </template>
                    </el-table-column>
                </el-table>
                      <div class="sumDiv">
                        <span>总数量：</span>{{upAllCount}}
                        <span>总金额：</span>{{upAllMoney}}
                      </div>
                      <div class="upBut">
                        <el-button type="primary" plain @click="returnMenu()">点餐结账</el-button>
                      </div>
                </el-tab-pane>
                <el-tab-pane label="外卖">外卖</el-tab-pane>
              </el-tabs>
           
            </el-col>
            <!--商品展示-->
            <el-col :span="17">
              <div class="common-goods">
                <p>常用商品</p>
                <div class="goods-list">
                  <ul>
                    <li v-for="(goods,index) in commonGoods" @click="addGoods(goods)" :key="index">
                      <span>{{goods.goodsName}}</span> <span class="com-price">¥{{goods.price}}元</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="category">
                <p>产品分类</p>
                <el-tabs>
                  <el-tab-pane label="主食">
                    <ul class="goodslist">
                      <li v-for="(goods,index) in type0Goods" @click="addGoods(goods)" :key="index">
                        <span>{{goods.goodsName}}</span> <span>¥{{goods.price}}元</span>
                      </li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="饮品">
                    <ul class="goodslist">
                      <li v-for="(goods,index) in type1Goods" @click="addGoods(goods)" :key="index">
                        <span>{{goods.goodsName}}</span> <span>¥{{goods.price}}元</span>
                      </li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="小吃">
                    <ul class="goodslist">
                      <li v-for="(goods,index) in type2Goods" @click="addGoods(goods)" :key="index">
                        <span>{{goods.goodsName}}</span> <span>¥{{goods.price}}元</span>
                      </li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="套餐">
                    <ul class="goodslist">
                      <li v-for="(goods,index) in type3Goods" @click="addGoods(goods)" :key="index">
                        <span>{{goods.goodsName}}</span> <span>¥{{goods.price}}元</span>
                      </li>
                    </ul>
                  </el-tab-pane>
              </el-tabs>
                
              </div>
            </el-col>
        </el-row>
    </div>
    

    <!-- 子路由配置
    <router-view></router-view> -->
    
  </div>
</template>

<script>


export default {
  name: "Posmenu",
  data(){
      return {
        allCount:0,
        allMoney:0,
        upAllCount:0,
        upAllMoney:0,
        tableData:[],
        upData:[],
        commonGoods:[
          {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }
        ],
        type0Goods:[
          {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }],
        type1Goods:[
           {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }],
        type2Goods:[
           {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }
        ],
        type3Goods:[
           {
              goodsId:10,
              goodsName:'单人套餐',
              price:20
          }, {
              goodsId:11,
              goodsName:'双人套餐',
              price:38
          }
        ]
          
      }
  },
  mounted:function(){
    var posHeight = document.body.clientHeight;
    document.getElementById("pos-order").style.height=posHeight+"px";
  },
  methods:{
    // 添加点餐列表的方法
    addGoods(goods){
      // 判断该商品是否已经存在点餐列表中
      this.allCount = 0;
      this.allMoney = 0;
      let flag = false;
      for(let i=0;i<this.tableData.length;i++){
        if(goods.goodsId == this.tableData[i].goodsId){
          flag = true;
          console.log(flag);
        }
      }
      // 根据判断结果进行点餐列表的数据更新
      if(flag){
        let arr = this.tableData.filter(o=> o.goodsId == goods.goodsId);
        console.log(arr);
        arr[0].count++;
        
      }else{
        var newGoods = {goodsId:goods.goodsId, goodsName:goods.goodsName, price:goods.price,count:1};
        this.tableData.push(newGoods);
        console.log(newGoods);
      }
      this.getallCount();
    },
    getallCount(){
      this.allCount = 0;
      this.allMoney = 0;
      for(var i=0;i<this.tableData.length;i++){
        this.allCount +=this.tableData[i].count;
        this.allMoney +=this.tableData[i].price*this.tableData[i].count;
      }
    },
    upGetallCount(){
      this.upAllCount= 0;
      this.upAllMoney = 0;
      for(var i=0;i<this.upData.length;i++){
        this.upAllCount +=this.upData[i].count;
        this.upAllMoney +=this.upData[i].price*this.upData[i].count;
      }
    },
    delGoods(goods){

      var sum= --goods.count;
      console.log(sum);
      // 如果商品数量不为0，返回;此时如果商品数量为0，则删除该商品表中所有信息
      if(sum>0){
        this.getallCount();
        return;
      }else{
        // for(let j=0;j<this.tableData.length;j++){
        //   if(this.tableData[j].count == 0){
        //     this.tableData.splice(j,1);
        //     this.getallCount();
        //   }
        // }
        this.tableData = this.tableData.filter(q=>q.count != 0);
        this.getallCount();
      }
    },
    upDelGoods(goods){
      var sum= --goods.count;
      console.log(sum);
      if(sum>0){
        this.upGetallCount();
        return;
      }else{
        this.upData = this.upData.filter(q=>q.count != 0);
        this.upGetallCount();
      }
    },
    upAddGoods(goods){
      // 判断该商品是否已经存在挂单列表中
      let flag = false;
      for(let i=0;i<this.upData.length;i++){
        if(goods.goodsId == this.upData[i].goodsId){
          flag = true;
          console.log(flag);
        }
      }
      // 根据判断结果进行点餐列表的数据更新
      if(flag){
        let arr = this.upData.filter(o=> o.goodsId == goods.goodsId);
        console.log(arr);
        arr[0].count++;
        
      }else{
        var newGoods = {goodsId:goods.goodsId, goodsName:goods.goodsName, price:goods.price,count:1};
        this.upData.push(newGoods);
        console.log(newGoods);
      }
      this.upGetallCount();
    },
    solveMenu(){
      if(this.tableData.length ==0){
        // alert("请您先进行点餐！");
        this.$message.error('不能空结！');
        return
      }
      this.tableData = [];
      this.allCount = 0;
      this.allMoney = 0;
      alert("结账成功!");
    },
    upMenu(){
      this.upData = this.tableData;
      this.tableData = [];
      this.allCount = 0;
      this.allMoney = 0;
      this.upGetallCount();
    },
    delMenu(){
      this.tableData = [];
      this.allCount = 0;
      this.allMoney = 0;
    },
    returnMenu(){
      this.tableData = this.upData;
      this.upData = [];
      this.upAllCount = 0;
      this.upAllMoney = 0;
      this.getallCount();
    }

  }
};
</script>

<style>
.posmenu{
  height:100%;
}
.order{
  background-color:#b9d6e8;
  border:1px solid #000;
}
.sumDiv{
  margin-top:20px;
  font-size:16px;
}
.handle{
  font-size:16px;
}
.font{
  font-size:18px;
  /* border:1px solid #fff; */
}
.goods-list{
  background-color: #cfd8c6;
  padding:10px;
  overflow:hidden;
  border-bottom: 2px solid #6e727b;
}
.goods-list ul li{
  list-style:none;
  float:left;
  margin: 10px;
  padding: 5px;
  border: 1px solid #654789;
  cursor:pointer;
  border-radius:3px;
}
.category p{
  margin-top: 36px;
  font-size: 16px;
}
.goodslist{
  overflow: hidden;
  font-size:18px;
}
.goodslist li{
  list-style:none;
  float:left;
  margin: 10px;
  padding: 5px;
  border: 1px solid #654789;
  cursor:pointer;
  border-radius:3px;
}
.upBut{
  margin-top:20px;
  border-radius:3px;
}

  




</style>