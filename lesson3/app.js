new Vue ({
el :'#app',
data : {
    progress : 100,
    ended: false,
    opacity: 1
},
methods: {
    punch: function(){
        this.progress -=10;
        this.opacity -=0.1;
        if (this.progress <=0){
            this.ended = true;
        }
    },
    reset: function(){
        this.progress = 100;
        this.ended = false;
        this.opacity = 1
    }
},
computed:{

}
});