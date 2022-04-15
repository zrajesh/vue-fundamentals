const vm = Vue.createApp({
    data() {
        return {
            firstName: "Rajesh",
            lastName: "Bhattarai",
            url: "https://google.com",
            raw_url: '<a href="https://google.com">Google</a>',
            age: 22
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        },
        incrementAge() {
            return this.age = this.age + 1;
        },
        updateLastName(event) {
            this.lastName = event.target.value;
        }
    }
}).mount("#app")


