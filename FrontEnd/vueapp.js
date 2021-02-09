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
        }
    },
    compute : {
        
    }
})