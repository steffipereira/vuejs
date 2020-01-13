new Vue({
    el: '#app',
    data: {
        age:30,
        a:0,
        b: 0,
        available : false
    },
    methods: {

    },
    computed: {
        addAtoAge : function(){
            console.log("you are in A")
            return this.age + this.a;
        },
        addBtoAge : function(){
            console.log("you are in B")
            return this.age + this.b;
        },
        changeColor : function(){
            return {
                available : this.available
            }
            
        }
    }


});