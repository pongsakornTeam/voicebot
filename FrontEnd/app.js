new Vue({
    el:"#vue-app",
    data : {
        message : "Hello World",
        name : "Teamy",
        job : "PA",
        age : "20",
        website:'http://www.google.com'
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
        }
    }
})