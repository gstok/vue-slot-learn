
<style scoped>

</style>

<template>
    <div>
        <slot>
            <input type="button" value="我是默认的按钮" />
            {{ msg }}
        </slot>
        <!-- <slot name="slot1"></slot>
        <slot name="slot2"></slot> -->
    </div>
</template>

<script>
    export default {
        name: "test",
        data () {
            return {
                msg: "你好，世界2"
            }
        }
    };
</script>
