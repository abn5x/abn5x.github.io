var app = {
    data() {
        return {
            isVisible: false,
            items: [
                {
                    title: "LaptopFind",
                    description: "LaptopFind is a semi-working prototype for searching Laptops, designed and developed from scratch with JS, HTML, CSS and VUE.",
                    imageUrl: "https://picsum.photos/200?random=",
                    url: "./LaptopFind/index.html"
                }
            ]
        }
    }
}
Vue.createApp(app).mount('#app')
