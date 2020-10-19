const navBar = {
    data() {
        return {
            searchQuery: "",
            selectedParam: [],
            animationDirection: 1,
            isActive: false,
            mostSearched: [
                {
                    name: "Dell XPS 15",
                    imageUrl: "./Resources/dell_xps.png"
                },
                {
                    name: "HP Envy x360",
                    imageUrl: "./Resources/hp_envy.jpg"
                },
                {
                    name: "Macbook Air",
                    imageUrl: "./Resources/mb_air.jpg"
                },
            ],
            filterTags: ["AMD", "RYZEN", "16GB", "Apple"],
            filters: [
                {title: "Company", isExpanded: false},
                {title: "CPU", isExpanded: false},
                {title: "RAM", isExpanded:false},
                {title: "Storage", isExpanded: false},
                {title: "Screen", isExpanded: false}],
            innerFilters: [
                [
                    {make: "Apple", id: 0},
                    {make: "Dell", id:1},
                    {make: "Acer", id:2},
                    {make: "HP", id:3},
                    {make: "Lenovo", id:4}
                ],[
                    {make: "AMD", id: 0},
                    {make: "Intel", id: 1}
                ],[
                    {make: "4GB", id: 0},
                    {make: "8GB", id: 1},
                    {make: "16GB", id: 2},
                    {make: "32GB", id: 3},
                ],[
                    {make: "128GB SSD", id: 0},
                    {make: "256GB SSD", id: 1},
                    {make: "512GB SSD", id: 2},
                    {make: "1TB SSD", id: 3}
                ],[
                    {make: '11"', id: 0},
                    {make: '13.3"', id: 1},
                    {make: '14"', id: 2},
                    {make: '15.6"', id: 3},
                    {make: '17"', id: 4},
                ]
            ]
        }
    },
    methods: {
        hideSearchPanel(){
            if(this.isActive){
                this.playAnimation();
            }
        },
        resetSearch(){
            this.searchQuery = ""
        },
        addTag(tag, index){
            if (!this.searchQuery){
                this.searchQuery += tag;
            }else{
                this.searchQuery += " " + tag;
            }
            this.filterTags.splice(index, 1);
            console.log(tag);
        },
        expandFilter(filterIndex){
            this.filters[filterIndex].isExpanded = !this.filters[filterIndex].isExpanded;
        },
        playAnimation(){
            this.animationDirection *= -1;
            var localDirection = this.animationDirection;
            animation.play()
            this.isActive = !this.isActive
            animation.onComplete = function(){
                animation.setDirection(localDirection)
            }
        }
    },
    watch: {
        isActive(newValue, oldValue){
            if (newValue){
                document.getElementById("search").focus();
            }else{
                document.getElementById("search").blur();
            }
        }
    }
}
Vue.createApp(navBar).mount("#searchPanel")

var element = document.getElementById("animation")
var animation = lottie.loadAnimation(
    {
        container: document.getElementById("animation"),
        path: "./Resources/search.json",
        renderer: "svg",
        loop: false,
        autoplay: false,
    }
)