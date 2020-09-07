<template>
    <div>
        <div class="dashboard-header">
            <nav class="navbar navbar-expand-lg bg-white fixed-top">
                <a class="navbar-brand" href="index.html">Concept</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto navbar-right-top">
                        <li class="nav-item">
                            <div id="custom-search" class="top-search-bar">
                                <input class="form-control" type="text" placeholder="Search..">
                            </div>
                        </li>
                    </ul>
                    <v-select class="style-chooser" v-model="selected" :options="this.locales" @input="handleChangeLocale(selected)"></v-select> 
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        locales : {
            type : Array
        }
    },
    data() {
        return {
            selected : ''
        }
    },
    methods: {
        handleChangeLocale(value) {
            this.$emit('changeLang', value)
        }
    },
    mounted() {
        
    },
}
</script>

<style>
</style>