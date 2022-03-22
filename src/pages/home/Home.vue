<template>
    <div>
        <h1 class="title has-text-weight-bold">{{ appTitle }}</h1>
        <h2 class="subtitle">
            Indonesian Online Bible Reader website based application.
        </h2>
        <div class="mt-6">
            <router-link to="/read">
                <button class="button is-link has-text-weight-bold">
                    Read Now
                </button>
            </router-link>
            <a
                href="https://github.com/erwindosianipar/read-alkitab/archive/master.zip"
            >
                <button class="button has-text-weight-bold ml-3">
                    Download
                </button>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            appTitle: process.env.VUE_APP_TITLE,
        };
    },
};
</script>
