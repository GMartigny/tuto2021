<template>
    <div>
        <Film v-for="(film, index) in films" :key="index"
            :title="film.title" :text="film.text"/>
        <form @submit="addFilm">
            <div>
                <label for="title">Title</label>
                <input type="text" v-model="inputTitle" id="title">
            </div>
            <div>
                <label for="text">Text</label>
                <input type="text" v-model="inputText" id="text">
            </div>
            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
import Film from "../components/Film.vue";

export default {
    name: "Home",
    components: {
        Film,
    },
    data () {
        return {
            films: [],
            inputTitle: "",
            inputText: "",
        };
    },
    async mounted () {
        const response = await fetch("https://mock-film-api-t0jk5mabvwnt.runkit.sh/");
        if (response.ok) {
            this.films = await response.json();
        }
    },
    methods: {
        addFilm (event) {
            event.preventDefault();
            this.films.push({
                title: this.inputTitle,
                text: this.inputText,
            });
            this.inputTitle = "";
            this.inputText = "";
        },
    },
};
</script>
