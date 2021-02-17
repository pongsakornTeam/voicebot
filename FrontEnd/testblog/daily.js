Vue.component('dailyblogdate',{
    template : '<div> <span class="time"> {{mounthShort}} <br> {{numDate}} </span> <p> <em><a href="index.html">The place holder</a></em> so you can see what the site would look like. This is just a place holder </p> </div>' 
})

new Vue({
    el:"#daily-blog",
    data : {
        numDate : '17',
        mounthShort : 'Mar'
    },
    method : {
        getNumDate:function(){
            return this.numDate
        },
        getMonthShort:function(){
            return this.monthShort
        }
    }
})