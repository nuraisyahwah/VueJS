let vm3 = new Vue({
    el: '#app',
    data: {
        title: "Data API Mahasiswa",
        description: "Data API dideploy di vercel.app"

    },
    mounted() {
        axios
            .get('https://if3b-zarazzar.vercel.app/ternak')
            .then(response => {
                console.log(response);
                this.dataMahasiswa = response.data.data
            })
    }

});