<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ text }}</p>
    </div>
<!--    <v-col cols="12">-->
<!--        <v-card shaped>-->
<!--            <v-card-title>{{ title }}</v-card-title>-->
<!--            <v-card-text>{{ text }}</v-card-text>-->
<!--        </v-card>-->
<!--    </v-col>-->
</template>

<script>
export default {
    name: "Film",
    props: ["title", "text"],
};
</script>
