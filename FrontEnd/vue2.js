//path 19-20
Vue.component('showcomment',{
    props:['commentpost'],
    template:'<p>{{commentpost}} </p>'
})
new Vue({
    el:"#vue-app",
    data : {
        newComment:'',
        comments : [
            'Hello','Good Morning'
        ]
    },
    methods:{
        addComment:function(){
            this.comments.push(this.newComment)
            this.newComment=''
        }
    }
})
var food={
    template:'#foodarea'
};
new Vue({
    el:"#vue-app2",
    component:{
        foodApp:food
    }
})