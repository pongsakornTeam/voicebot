new Vue({
    el:"#vue-app",
    data : {
        message : "Hello World",
        name : "Teamy",
        job : "PA",
        age : "20",
        count : 0,
        website:'http://www.google.com',
        toys : [],
        gender : '',
        like : false,
        product : ['book','notebook','pen'],
        employee :[
            {name:'a001',age:15},
            {name:'b001',age:25}
        ]
    },
    methods:{
        getName : function(){
            return this.name
        },
        setName : function(n){
            return this.name = n
        },
        getJob : function(){
            return this.job
        },
        addAge : function(){
            this.age++;
            console.log(this.age);
        },
        subTract : function(){
            this.age--;
            console.log(this.age);
        },
        addCount : function(){
            this.count++;
            console.log(this.count);
        }
    }
})