<template>
    <div>
        <h1 class="title">Read</h1>
        <h2 class="subtitle">
            {{
                passage.title == undefined ? "Alkitab Indonesia" : passage.title
            }}
        </h2>
        <div v-if="load">
            <skeleton width="200px" height="40px"></skeleton>
        </div>
        <div class="field" v-else>
            <div class="control has-icons-left">
                <div class="select is-rounded">
                    <select
                        v-model="bookNumber"
                        v-on:change="setSelectedPassage()"
                    >
                        <option disabled selected>Select passage</option>
                        <option
                            v-for="passageMeta in passageList"
                            :key="passageMeta.book_number"
                            :value="passageMeta.book_number"
                        >
                            {{ passageMeta.book_name }}
                        </option>
                    </select>
                </div>
                <div class="icon is-small is-left">
                    <i class="fas fa-book"></i>
                </div>
            </div>
        </div>
        <div class="table-container">
            <table class="table">
                <tbody>
                    <tr>
                        <td
                            v-for="chapter in totalChapter"
                            :key="chapter"
                            class="p-1"
                        >
                            <button
                                class="button is-small is-rounded"
                                v-on:click="getPassageChapter(chapter)"
                            >
                                {{ chapter }}
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-if="skeleton">
            <ul>
                <li v-for="i in 15" :key="i">
                    <skeleton></skeleton>
                </li>
            </ul>
        </div>
        <div v-else>
            <ul>
                <li
                    v-for="verse in passage.verses"
                    :key="verse.book_number"
                    class="mb-4 c-hover"
                >
                    <div v-if="verse.type === 'title'">
                        <h4 class="subtitle ml-1 has-text-weight-bold">
                            {{ verse.content }}
                        </h4>
                    </div>
                    <div v-else>
                        <span class="has-text-weight-bold"
                            >({{ verse.verse }})</span
                        >
                        <span class="ml-1">{{ verse.content }}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import APIService from "../../network/api.service";
import Skeleton from "../../components/Skeleton.vue";

export default {
    components: {
        Skeleton,
    },
    data: function () {
        return {
            bookNumber: 0,
            totalChapter: 0,
            passage: {},
            skeleton: false,
        };
    },
    computed: {
        passageList() {
            return this.$store.state.passageList;
        },
        load() {
            return this.$store.state.loading;
        },
    },
    created() {
        this.$store.dispatch("getPassageList").then((resp) => {
            this.$store.commit("setPassageList", resp.data.passage_list);
            this.$store.commit("toogleLoading", false);
        });
    },
    methods: {
        setSelectedPassage() {
            this.passage = [];
            this.totalChapter =
                this.passageList[this.bookNumber - 1].total_chapter;
        },
        getPassageChapter(chapter) {
            this.skeleton = true;
            this.passage = [];
            APIService.getPassageChapter(
                this.passageList[this.bookNumber - 1].abbreviation.replace(
                    " ",
                    "+"
                ),
                chapter
            ).then((resp) => {
                this.passage = resp.data;
                this.skeleton = false;
            });
        },
    },
};
</script>
