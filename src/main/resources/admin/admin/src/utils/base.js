const base = {
    get() {
        return {
            url : "http://localhost:8080/springboottr95attj/",
            name: "springboottr95attj",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboottr95attj/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的人才招聘系统设计与实现"
        } 
    }
}
export default base
