var app = new Vue({
    el: "#app",
    data: {
        passw: '',
        success: "alert alert-success",
        fail: "alert alert-danger",

        track: {
            lwc: "alert alert-danger",
            upc: "alert alert-danger",
            dig: "alert alert-danger",
            spec: "alert alert-danger",
            len: "alert alert-danger"
        },
        strength: 0,
        secure_counter: "alert alert-warning",
        overallBack: "border:2px solid rgb(214, 213, 213); border-radius: 10px; background-color: rgb(255, 195, 195);"
    },

    methods: {

        calc_strength: function() {
            let s = 0;
            for (p in this.track) {
                if(this.track[p] == this.success){
                    s += 1;
                }
            }
            this.strength = s/Object.keys(this.track).length * 100
            // console.log(Object.keys(this.track).length)
        },

        score_background: function() {
            if(this.strength > 90) {
                this.secure_counter = "alert alert-success"
                this.overallBack = "border:2px solid rgb(214, 213, 213); border-radius: 10px; background-color: rgb(195, 255, 203);"
            }
            else {
                this.secure_counter = "alert alert-warning"
                this.overallBack = "border:2px solid rgb(214, 213, 213); border-radius: 10px; background-color: rgb(255, 195, 195);"
            }
        }
    },

    computed: {

    },

    watch: {

        passw(val) {

            let checkLwc = /[a-z]/
            let checkUpc = /[A-Z]/
            let checkDig = /[0-9]/
            let checkSpec = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

            if (checkLwc.test(val)) {
                this.track.lwc = this.success
            }
            else {
                this.track.lwc = this.fail
            }

            if (checkUpc.test(val)) {
                this.track.upc = this.success
            }
            else {
                this.track.upc = this.fail
            }

            if (checkDig.test(val)) {
                this.track.dig = this.success
            }
            else {
                this.track.dig = this.fail
            }

            if (checkSpec.test(val)) {
                this.track.spec = this.success
            }
            else {
                this.track.spec = this.fail
            }
            if (val.length > 7) {
                this.track.len = this.success
            }
            else {
                this.track.len = this.fail
            }

            this.calc_strength();
            this.score_background();
        },
        
    }
})