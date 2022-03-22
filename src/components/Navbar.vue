import $ from 'jquery'

<template>
    <div>
        <nav class="navbar is-fixed-top c-shadow" role="navigation">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item has-text-weight-bold">
                        <router-link to="/">{{ appTitle }}</router-link>
                    </a>
                    <a class="navbar-burger burger" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-end has-text-weight-bold">
                        <router-link to="/read" class="navbar-item"
                            >Read</router-link
                        >
                        <router-link to="/product" class="navbar-item"
                            >Product</router-link
                        >
                        <router-link to="/about" class="navbar-item"
                            >About</router-link
                        >
                        <a
                            href="https://github.com/erwindosianipar/read-alkitab"
                            class="navbar-item"
                            >Github</a
                        >
                        <router-link to="/faq" class="navbar-item"
                            >FAQ</router-link
                        >
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
var $ = require("jquery");

export default {
    data: function () {
        return {
            appTitle: process.env.VUE_APP_TITLE,
        };
    },
};

$(document).ready(function () {
    $(".navbar-burger").click(function () {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
});

$(document).ready(function () {
    $(".navbar-item").click(function () {
        $(".navbar-burger").removeClass("is-active");
        $(".navbar-menu").removeClass("is-active");
    });
});
</script>
