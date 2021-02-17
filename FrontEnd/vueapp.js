//path 11-18
Vue.component('koo',{
    data : function(){
        return{
            count : 0
        }
    },
    template : '<button v-on:click="count++">Click {{count}}</button>'
});

Vue.component('post',{
    props:['title'],
    template : '<p>Title is {{title}} </p>'
})
Vue.component('showview',{
    props:{
        title:{
            type:String,
            required:true
        },
        view:{
            type:Number,
            default:0
        }
    },
    template:'<p>{{title}} | {{view}}</p>'
})
new Vue({
    el:"#vue-app",
    data : {
        newData : {
            empName : '',
            salary : 0
        },
        empGroup : [
            {
                empName : 'a001',
                salary : 1000
            },
            {
                empName :'b001',
                salary : 2000
            }
        ]
    },
    methods : {
        addEmp : function (){
            this.empGroup.push({
                empName : this.newData.empName,
                salary : this.newData.salary
            });
            this.newData.empName = '';
            this.newData.salary = 0;
        },
        showMessage : function (){
            alert('save data complete');
        }
    },
    computed : {
        summation:function(){
            var sum = this.empGroup.reduce(
                function(value, data){
                    return value + Number(data.salary)
                },0);
            return sum;
        }
    },
    watch : {
        summation : function(){
            this.showMessage();
        }
    }
})

var like=new Vue({
    el:"#like",
    data : {
        like : false
    },
    methods : {
        changeLike : function(){
            console.log(this.like)
        }
    }
});

var post=new Vue({
    el:"#post",
    data :{
        title : 'project',
        message : 'detail project',
    }
});

