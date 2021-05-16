const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)
const hashMap = xObject || [{
    logo: 'B',
    url: 'https: //www.bilibili.com'
}, { logo: 'B', url: 'https://www.baidu.com' }]
const simplifyUrl = (url) => {
    return url.replace('https://', '')
        .replace('http://', '')
        .replace('www.', '')
        .replace(/\/.*/, '') //删除开头内容
}
const render = () => {
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node, index)) => {
        const $li = $(`<li>
        <div class="site">
          <div class="logo">${node.logo}</div>
          <div class="link">${simplifyUrl(node.url)}</div>
          <div class="close">
            <svg class="icon">
              <use xlink:href="#icon-close"></use>
            </svg>
          </div>
        </div>
      </li>`)
    }
}

$('.addButton')
    .on('click', () => {
        let url = window.prompt('请输入您要添加的网址')
        console.log(url)
        if (url.indexOf('http') === -1) {
            url = 'https://' + url
        }
        console.log(url)
        const $siteList = $('.siteList')
        console.log($siteList)
        const $lastLi = $siteList.find('li.last')
        const $li = $(`<li>
        <a href="${url}">
           <div class="site">
              <div class="logo">${url[0]}</div>
              <div class="link">${url}</div>
           </div>
        </a>
    </li>`).insertBefore($lastLi)
    })