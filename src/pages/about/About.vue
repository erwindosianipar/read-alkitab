<template>
    <div>
        <h1 class="title">About</h1>
        <h2 class="subtitle">
            <strong>{{ appTitle }}</strong>
            is Indonesian Online Bible Reader website based application.
        </h2>
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
