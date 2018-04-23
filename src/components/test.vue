
<style scoped>

</style>

<template>
    <div>
        <slot :text="msg" haha="那你呢"></slot>
    </div>
</template>

<script>
    export default {
        name: "test",
        data () {
            return {
                msg: "你好，世界2"
            }
        },
        mounted () {
            setInterval(() => {
                this.msg += ".";
            }, 1000);
        }
    };
</script>
