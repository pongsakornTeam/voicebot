Vue.component('dailyblogdate', {
    props: ['mounthShort', 'numDate'],
    template: '<div> <span class="time"> {{dateTime[0]}} </span> <p> <em><a href="index.html">The place holder</a></em> so you can see what the site would look like. This is just a place holder </p> </div>',
})

var vue1 = new Vue({
    el: "#daily-blog",
    data: {
        newDailyEvent: {
            numDate: '18',
            mounthShort: 'Dec',
            message: '',
        },
        dailyEvents: [
            {
                numDate: '18',
                mounthShort: 'Dec',
                message: 'TestPost1'
            }
        ]
    },
    methods: {
        addEvent: function () {
            this.dailyEvents.push({
                numDate: this.newDailyEvent.numDate,
                mounthShort: this.newDailyEvent.mounthShort,
                message: this.newDailyEvent.message
            });
            this.newDailyEvent.numDate = '18',
            this.newDailyEvent.mounthShort = 'Dec',
            this.newDailyEvent.message = '';
        }
    }
})