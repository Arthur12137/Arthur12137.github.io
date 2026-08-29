/* 在首屏绘制之前决定主题，避免深色模式下闪一下白底。
   优先级：?theme= 查询参数 > localStorage > 系统偏好。
   这个文件必须以阻塞方式加载，不能交给 React 渲染（React 19 会把它当成
   需要水合的节点，导致文本不匹配），所以放在 public/ 下由 layout 直接引用。 */
(function () {
  try {
    var q = new URLSearchParams(location.search).get('theme')
    var s = q || localStorage.getItem('vml-theme')
    var d = s ? s === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
    if (d) document.documentElement.classList.add('dark')
  } catch (e) {}
})()
