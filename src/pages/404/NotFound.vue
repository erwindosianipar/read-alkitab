<template>
    <div>
        <h1 class="title">Not Found</h1>
        <h2 class="subtitle">
            The requested URL <strong>{{ path }}</strong> was not found on this
            server. That's all we know.
        </h2>
        <div>
            <button class="button">
                <router-link to="/" class="has-text-weight-bold"
                    >Back to Home</router-link
                >
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            path: window.location.pathname,
        };
    },
};
</script>
