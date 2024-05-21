<script setup>
    import { ref, computed } from 'vue'
    const props = defineProps({
        model: Object
    })
    const model = props.model
    const isFolder = computed(() => {
        return props.model.children && props.model.children.length
    })

    const isOpen = ref(false)

    function toggle() {
        isOpen.value = !isOpen.value
    }

    function changeType() {
        if(isFolder.value) {
            addChildren()
        }
        else {
            model.children = [
                {
                    name: 'new item'
                }
            ]
            isFolder.value = !isFolder.value
        }
    }

    function addChildren() {
        model.children.push({name: 'new item'})
    }
</script>

<template>
    <li :class="{ folder : isFolder}" @dblclick="changeType">
        <div>
            {{ model.name }}
            <span v-if="isFolder" @click="toggle">[{{ isOpen ? '-' : '+' }}]</span>
        </div>
    </li>
    <ul v-show="isOpen" v-if="isFolder">
        <treeItem v-for="model of model.children" :model="model" :key="model.name"></treeItem>
        <span @click="addChildren">[Add]</span>
    </ul>
</template>