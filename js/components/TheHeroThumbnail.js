export default {
    name: 'TheHeroThumb',

    props: {
        hero: Object
    },

    template:
    `
    <li>
        <!-- <img class="sprite" src="" alt="hero image"> -->
        <div class="sprite"></div>
        <div class="red-bumper"></div>
        <h5>name</h5>
    </li>
    `,
}