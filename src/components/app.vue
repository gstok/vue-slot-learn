
<style scoped>

</style>

<template>
    <div>
        {{ msg }}
        <test>
            <!-- {{ msg }} -->
        </test>
    </div>
</template>

<script>
    import test from "./test.vue";

    export default {
        name: "app",
        data () {
            return {
                msg: "你好，世界1"
            };
        },
        components: {
            test
        }
    };
</script>

