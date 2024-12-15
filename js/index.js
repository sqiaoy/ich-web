    // 1. 初始数据
    const data = [
        { url: './img/0.jpg', title: '中国传统制茶技艺及其相关习俗”列入人类非物质文化遗产代表作名录', color: 'rgb(42,65,56)' },
        { url: './img/1.jpg', title: '中国入选联合国教科文组织非物质文化遗产名录（名册）项目', color: 'rgb(43, 35, 26)' },
        { url: './img/2.jpg', title: '中共中央办公厅 国务院办公厅印发《关于进一步加强非物质文化遗产保护工作的意见》', color: 'rgb(18,43,70)' },
        { url: './img/3.jpg', title: '非物质文化遗产保护规划', color: 'rgb(137,45,42)' },
        { url: './img/4.jpg', title: '2020年文化和自然遗产日', color: 'rgb(195,185,167)' },
      ]
      // 获取元素
      const img = document.querySelector('.slider-wrapper img')
      const p = document.querySelector('.slider-footer p')
      const footer = document.querySelector('.slider-footer')
      // 1. 右按钮业务
      // 1.1 获取右侧按钮 
      const next = document.querySelector('.next')
      let i = 0  // 信号量 控制播放图片张数
      // 1.2 注册点击事件
  
      next.addEventListener('click', function () {
        // console.log(11)
        i++
        // 1.6判断条件  如果大于8 就复原为 0
        // if (i >= 8) {
        //   i = 0
        // }
        i = i >= data.length ? 0 : i
        // 1.3 得到对应的对象
        // console.log(data[i])
        // 调用函数
        toggle()
      })
  
      // 2. 左侧按钮业务
      // 2.1 获取左侧按钮 
      const prev = document.querySelector('.prev')
      // 1.2 注册点击事件
      prev.addEventListener('click', function () {
        i--
        // 判断条件  如果小于0  则爬到最后一张图片索引号是 7
        // if (i < 0) {
        //   i = 7
        // }
        i = i < 0 ? data.length - 1 : i
        // 1.3 得到对应的对象
        // console.log(data[i])
        // 调用函数
        toggle()
      })
  
      // 声明一个渲染的函数作为复用
      function toggle() {
        // 1.4 渲染对应的数据
        img.src = data[i].url
        p.innerHTML = data[i].title
        footer.style.backgroundColor = data[i].color
        // 1.5 更换小圆点    先移除原来的类名， 当前li再添加 这个 类名
        document.querySelector('.slider-indicator .active').classList.remove('active')
        document.querySelector(`.slider-indicator li:nth-child(${i + 1})`).classList.add('active')
      }
  
  
  
      // 3. 自动播放模块
      let timerId = setInterval(function () {
        // 利用js自动调用点击事件  click()  一定加小括号调用函数
        next.click()
      }, 1000)
  
  
      // 4. 鼠标经过大盒子，停止定时器
      const slider = document.querySelector('.slider')
      // 注册事件
      slider.addEventListener('mouseenter', function () {
        // 停止定时器
        clearInterval(timerId)
      })
  
      // 5. 鼠标离开大盒子，开启定时器
      // 注册事件
      slider.addEventListener('mouseleave', function () {
        // 停止定时器
        if (timerId) clearInterval(timerId)
        // 开启定时器
        timerId = setInterval(function () {
          // 利用js自动调用点击事件  click()  一定加小括号调用函数
          next.click()
        }, 1000)
      })