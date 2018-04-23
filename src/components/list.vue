
<style scoped>
</style>

<template>
    <div>
        <slot name="mySlot" :dataSet="dataSet"></slot>
    </div>
</template>

<script>
    export default {
        name: "list",
        data () {
            return {
                dataSet: [
                    "习近平",
                    "胡锦涛",
                    "江泽民",
                    "邓小平",
                    "毛泽东"
                ]
            };
        }
    };
</script>


