<script setup>
    import { ref } from 'vue'
    import treeItem from '../components/treeItem.vue';
    const treeData = ref({
        name: 'My Tree',
        children: [
            { name: 'hello' },
            { name: 'world' },
            {
                name: 'child folder',
                children: [
                    {
                        name: 'child folder',
                        children: [{ name: 'hello' }, { name: 'world' }]
                    },
                    { name: 'hello' },
                    { name: 'world' },
                    {
                        name: 'child folder',
                        children: [{ name: 'hello' }, { name: 'world' }]
                    }
                ]
            }
        ]
    })
</script>

<template>
    <h2 class="p-4">Tree view</h2>
    <ul class="p-4">
        <treeItem class="item" :model="treeData"></treeItem>
    </ul>
</template>

<style>
.item {
  cursor: pointer;
  line-height: 1.5;
}
.folder {
  font-weight: bold;
}
span {
    display: inline;
}
</style>