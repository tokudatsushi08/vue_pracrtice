'user strict'
{
    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello World!',
            url: 'https://jp.vuejs.org/index.html',
            toggle: false,
            languages: [
                'JavaScript', 'Ruby', 'Phython'
            ]
        },
        methods: {
            onclick: function () {
                this.message = "Clicked!"
                this.message = "Changed!"
                this.message = "Practice２"
            }
        }

    })
}