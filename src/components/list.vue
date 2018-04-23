
<style scoped>
</style>

<template>
    <div>
        <slot v-for="item in dataSet" name="mySlot" :item="item"></slot>
    </div>
</template>

<script>
    export default {
        name: "list",
        data () {
            return {
                dataSet: [
                    {
                        name: "习近平",
                        sex: "男",
                        age: 72,
                        remark: "现任国家主席"
                    },
                    {
                        name: "胡锦涛",
                        sex: "男",
                        age: 78,
                        remark: "前任国家主席"
                    },
                    {
                        name: "江泽民",
                        sex: "男",
                        age: 92,
                        remark: "呱呱呱"
                    },
                    {
                        name: "邓小平",
                        sex: "男",
                        age: 100,
                        remark: "贝塔"
                    },
                    {
                        name: "毛泽东",
                        sex: "男",
                        age: 100,
                        remark: "毛腊肉"
                    },
                ]
            };
        },

        methods: {
            // ...{
            //     func3: () => {
            //         console.log(3);
            //     },
            //     func4: () => {
            //         console.log(4);
            //     }
            // },
            // func1 () {
            //     console.log(1);
            // },
            // func2 () {
            //     console.log(2);
            // }
        },
        mounted () {
            // this.func1();
        }
    };
</script>


