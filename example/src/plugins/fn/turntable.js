/**
 * Created by czg on 2017/8/25.
 */
const animation = weex.requireModule('animation');
const TurnTableController = (function () {

  /**
   * 默认参数
   * */
  const DEFAULT_OPTION = {
    duration: 5000,                                         /**转盘转动的时间单位ms*/
    speed: 360 * 10,                                        /**转盘普通旋转的圈数，速度*/
    angle_range: [[0,90],[90,180],[180,270],[270,360]],     /**转盘各大奖励角度范围*/
    delay: 0,                                               /**点击延时多久触发转动ms*/
    timing_function: 'ease-in-out'                          /**转盘转动速度曲线*/
  };

  /**
   * 构造函数
   * @options 参数 [object]
   * */
  function TurnTable ( options = {} ) {
    this.options = Object.assign( DEFAULT_OPTION, options );
    this.type = true;
  }

  TurnTable.prototype = {

    constructor: TurnTable,

    /**
     * 开始
     * @ele 需要转动的元素 [DOM]
     * @prize_index 中奖号码 [string,number]
     * @callback 回调函数 [function]
     * */
    start ( ele, prize_index, callback ) {
      if ( !this.type ) return this;
      this.type = false;
      var angle = _fetchTurnAngle( +prize_index, this.options.angle_range);
      if(!angle) {
        this.type = true;
        return;
      }
      animation.transition( ele, {
        styles: {
          transform: 'rotate(' + ( angle + this.options.speed ) + 'deg)',
          transformOrigin: 'center center'
        },
        duration: this.options.duration,
        timingFunction: this.options.timingFunction,
        delay: this.options.delay
      }, () => {
        setTimeout( () => {
          animation.transition( ele, {
            styles: {
              transform: 'rotate(' + angle + 'deg)',
              transformOrigin: 'center center'
            },
            duration: 1,
          });
        },50);
        callback && callback();
        this.type = true;
      });
      return this;
    }
  };

  /**
   * 获取转动的角度
   * @prize_index 中奖号码 [string,number]
   * @angle_range 角度范围 [arr]
   * */
  function _fetchTurnAngle ( prize_index, angle_range ) {
    var prize_angle_range = '';
    if (angle_range[0].length <=2){
      prize_angle_range = angle_range[+prize_index];
    }else {
      angle_range.forEach((item)=>{
        if(item[2] == prize_index){
          prize_angle_range = item;
        }
      })
    }
    return prize_angle_range ? prize_angle_range[0] + Math.floor(_countAngleValue(prize_angle_range[1], prize_angle_range[0]) * Math.random()) : '';
  }
  
  /**
   * 计算角度值
   * @angle_range_1 角度1
   * @angle_range_2 角度2
   * */
  function _countAngleValue( angle_range_1, angle_range_2 ) {
    return angle_range_1 >= angle_range_2 ? (angle_range_1 - angle_range_2) : (360 - angle_range_2 + angle_range_1);
  }
  
  return function (options) {
    return new TurnTable(options);
  };

})();

export default TurnTableController;
