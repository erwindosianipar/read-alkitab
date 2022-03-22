<template>
    <div
        :style="{ height, width: computedWidth, borderRadius: height }"
        class="c-skeleton mb-5"
    />
</template>

<script>
export default {
    props: {
        maxWidth: {
            default: 100,
            type: Number,
        },
        minWidth: {
            default: 80,
            type: Number,
        },
        height: {
            default: "1em",
            type: String,
        },
        width: {
            default: null,
            type: String,
        },
    },
    computed: {
        computedWidth() {
            return (
                this.width ||
                `${Math.floor(
                    Math.random() * (this.maxWidth - this.minWidth) +
                        this.minWidth
                )}%`
            );
        },
    },
};
</script>
