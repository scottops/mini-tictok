Component({
  data: {
    selected: 0,
    color: "#8b8b8b",
    selectedColor: "#ffffff",
    list: [{
      pagePath: "/pages/index/index",
      text: "首页"
    }, {
      pagePath: "/pages/friend/friend",
      text: "朋友"
    },{
      pagePath: "/pages/friend/friend",
      text: "+",
      isIcon:true
    },{
      pagePath: "/pages/friend/friend",
      text: "消息"
    }
    ,{
      pagePath: "/pages/message/friend",
      text: "我"
    }
  
  ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})