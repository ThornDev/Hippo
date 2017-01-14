var order = ['green', 'red', 'yellow', 'blue', 'green']
var app = getApp()
Page({
  data: {
    toView: 'green',
    order:order,
    list: [
      {
        id: 'view',
        name: '你的活动',
        open: false,
        pages: [{id:"green",title:"活动一"}, {id:"red",title:"活动二"}, {id:"blue",title:"活动三"}]
      }, {
        id: 'content',
        name: '最受欢迎活动',
        open: true,
        pages: [{id:"green",title:"活动一"}, {id:"red",title:"活动二"}, {id:"blue",title:"活动三"}]
      }, {
        id: 'form',
        name: '文化',
        open: true,
        pages: [{id:"green",title:"活动一"}, {id:"red",title:"活动二"}, {id:"blue",title:"活动三"}]
      }, {
        id: 'feedback',
        name: '社会',
        open: true,
        pages: [{id:"green",title:"活动一"}, {id:"red",title:"活动二"}, {id:"blue",title:"活动三"}]
      }, {
        id: 'nav',
        name: '职业',
        open: true,
        pages: [{id:"green",title:"活动一"}, {id:"red",title:"活动二"}, {id:"blue",title:"活动三"}]
      }, {
        id: 'media',
        name: '本地',
        open: true,
        pages: [{id:"green",title:"活动一"}, {id:"red",title:"活动二"}, {id:"blue",title:"活动三"}]
      }, {
        id: 'map',
        name: '地图',
        open: true,
        pages: [{id:"green",title:"活动一"}, {id:"red",title:"活动二"}, {id:"blue",title:"活动三"}]
      }, {
        id: 'canvas',
        name: '画布',
        open: true,
        pages: [{id:"green",title:"活动一"}, {id:"red",title:"活动二"}, {id:"blue",title:"活动三"}]
      }
    ]
  },
  widgetsToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list
    });
  },
  joinActivity: function(e) {
    console.log(e)
    wx.navigateTo({
      url: '../activity/detail/detail',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  /** */
  upper: function(e) {
    console.log(e)
  },
  /** */
  lower: function(e) {
    console.log(e)
  },
  /**滑动事件 */
  scroll: function(e) {
    console.log(e)
  },
  /** */
  scrollToTop: function(e) {
    this.setAction({
      scrollTop: 0
    })
  },
  /** */
  tap: function(e) {
    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },
  /** */
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }



});
