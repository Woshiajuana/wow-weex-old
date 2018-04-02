/**
 * Created by Administrator on 2017/9/20.
 */
import dialogs from 'dd-pipe/plugins/dialogs';
export default {
  check:function () {
    var version = weex.config.env.appVersion;
    var platform = weex.config.env.platform;
    var state = false;
    if(platform=="android"){
      state = this.compare(version,"1.0.5");
    }else if(platform=="iOS"){
      var version2 = version.split("(")[0];
      state = this.compare(version2,"1.0.5");
    }
    if(state){
      return state
    }else{
      dialogs.alert({
        message: "请先更新app",
        okTitle: '知道了',
        callback: function (e) {

        }
      })
      return state
    }
  },
  compare:function(V1,V2){
    if(V1 && V2){
      //将两个版本号拆成数字
      var arr1 = V1.split('.');
      var arr2 = V2.split('.');
      var minLength=Math.min(arr1.length,arr2.length);
      var position=0;
      var diff=0;
        //依次比较版本号每一位大小，当对比得出结果后跳出循环
      while(position<minLength && ((diff=parseInt(arr1[position])-parseInt(arr2[position]))==0)){
        position++;
      }
      diff=(diff!=0)?diff:(arr1.length-arr2.length);
      //若V1大于V2，则返回true
      return diff>=0;
    }else{
      return false;
    }
  }
}