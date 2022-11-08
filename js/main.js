// componnets always gets imported
import HeroThumb from './components/TheHeroThumbnail.js';
import Lightbox from './components/TheLightboxComponent.js';

(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({
        created() {
            // fetch calls always go here -> retreive any data you need
            // fetch('./includes/index.php')
            fetch('./data.json') //go and get the remote data
                .then(res => res.json()) //convert the json object to plain JS  object
                .then(data => this.heroData = data) // store the data in the Vue instance
            .catch(error => console.error(error)); // report t=abt error that might occur 
        },

        data() {
            return {
                heroData: {},
                lightboxData: {},
                showLightBox: false
            }
        },

        
        methods: {
            loadLightBox(item) {
                this.lightboxData = item;
                this.showLightBox = true;
            }
        },

        components: {
            herothumbnail: HeroThumb,
            lightbox: Lightbox
        }
    }).mount('#app')
})()