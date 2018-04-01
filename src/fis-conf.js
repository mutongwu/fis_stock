fis.set('project.ignore',  ['node_modules/**', 'output/**', '.git/**', 'fis-conf.js','package*.json']); 


fis.match('*.jsp', {
    isHtmlLike:true
});

fis.match('*.scss', {
    parser: fis.plugin('node-sass'),
    rExt: '.css'
});


fis.match('/commons/iconfont/*', {
  release: '/static/$0'
});
fis.match('*.{png,js,css,jpeg,jpg,gif}', {
  release: '/static/$0'
});

fis.match('**', {
    deploy: [
        fis.plugin('local-deliver')
    ]
});

/*页面访问的根路径(替换a标签页面 href属性)*/
fis.match('**', {
    deploy: [
        fis.plugin('replace', {
            from: '@ROOT_PATH',
            to: ''
        }),
        fis.plugin('local-deliver')
    ]
});

/*===================发布配置====================*/
fis.media('prod').match('*.js', {
  optimizer: fis.plugin('uglify-js')
}).match('*.css', {
  optimizer: fis.plugin('clean-css')
}).match('*.{js,css,png,jpeg,jpg,gif}', {
  useHash: true
}).match('*', {
    // domain: '//www.sy111.com/book'
}).match('**', {
    deploy: [
        fis.plugin('replace', {
            from: '@ROOT_PATH',
            to: ''
        }),
        fis.plugin('local-deliver') //must add a deliver, such as http-push, local-deliver
    ]
});