Vue.component('dailyblogdate',{
    template : '<div> <span class="time">{{shortmonth}}<br>{{date}}</span> <p> <em><a href="index.html">The place holder</a></em> so you can see what the site would look like. This is just a place holder </p> </div>' 
})

new Vue({
    el:"#daily-blog",
    data : {
        date : "17",
        shortmonth : "Mar"
    }
})