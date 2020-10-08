const ItemList = {
    data() {
        return {
            items: [
                {
                    title: "Proyecto 1",
                    description: "Descripción 1",
                    imageUrl: "https://picsum.photos/200?random=",
                    url: ""
                },
                {
                    title: "Proyecto 2",
                    description: "Descripción 2",
                    imageUrl: "https://picsum.photos/200?random=",
                    url: ""
                },
                {
                    title: "Proyecto 3",
                    description: "Descripción 3",
                    imageUrl: "https://picsum.photos/200?random=",
                    url: ""
                },
            ]
        }
    }
}

Vue.createApp(ItemList).mount('#app')