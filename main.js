var app = {
    data() {
        return {
            isVisible: false,
            items: [
                {
                    title: "LaptopFind",
                    description: "LaptopFind is a semi-working prototype for searching Laptops, designed and developed from scratch with JS, HTML, CSS and VUE.",
                    imageUrl: "./Resources/LaptopFind.png",
                    url: "./LaptopFind/index.html"
                }
            ]
        }
    },
    methods: {
        goTo(link){
            window.location = link;
        }
    }
}
Vue.createApp(app).mount('#app')
