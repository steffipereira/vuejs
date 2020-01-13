new Vue({
    el: '#app',
    data: {
        name : '',
        job : '',
        image : 'https://ichef.bbci.co.uk/images/ic/960x540/p05v5hpp.jpg',
        website : 'https://en.wikipedia.org/wiki/Alisha_Chinai',
        playlist : '<a href="https://www.jiosaavn.com/artist/alisha-chinai-songs/UgqNz7yU508_">Playlist</a>',
        age: 35,
        x: 0,
        y: 0
    },
    methods: {
        greeting : function(time){
             return 'Good' +' '+ time + ' '+ this.name
            },
        add: function(inc){ this.age+= inc},
        subtract: function(dec){this.age-= dec},
        updateXY : function(event){ 
            this.x = event.offsetX;
            this.y = event.offsetY;   
        },
    }
    
});