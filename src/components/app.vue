
<style scoped>

</style>

<template>
    <div>
        <list>
            <div slot="mySlot" slot-scope="sprops">
                <input type="button" :value="sprops" />
            </div>
        </list>
    </div>
</template>

<script>
    import test from "./test.vue";
    import list from "./list.vue";

    export default {
        name: "app",
        data () {
            return {
                msg: "你好，世界1"
            };
        },
        components: {
            test,
            list
        }
    };
</script>

