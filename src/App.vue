<template>
    <div>
        <section class="section">
            <navbar />
            <div class="hero">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns is-centered">
                            <div class="column is-half">
                                <router-view />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
    components: {
        Navbar,
    },
};
</script>
