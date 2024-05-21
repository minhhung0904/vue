<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  data: Array,
  columns: Array,
  filterKey: String
})

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const sortKey = ref('')
const sortOrders = ref(
    props.columns.reduce((init, key) => {init[key] = 1
    return init}, {})
)

const filterData = computed(() => {
    let {data, filterKey} = props
    if (filterKey) {
    filterKey = filterKey.toLowerCase()
    data = data.filter(row => {
      return Object.keys(row).some(key => {
        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
      })
    })
  }
  if(sortKey.value) {
    const key = sortKey.value
    const order = sortOrders.value[key]
    data = data.slice().sort((a, b) => {
      a = a[key]
      b = b[key]
      return (a === b ? 0 : a > b ? 1 : -1) * order
    })
  }
  return data
})

function sortByKey(key) {
    sortKey.value = key
    sortOrders.value[key] *= -1
}

</script>

<template>
    <table v-if="filterData.length">
        <thead>
            <tr>
                <th v-for="key of columns" @click="sortByKey(key)" :class="{ active: sortKey == key }" :key="key" >
                    {{ capitalize(key) }}
                    
                    <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'"></span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in filterData" :key="entry">
                <th v-for="key in columns" :key="key">
                    {{ entry[key] }}
                </th>
            </tr>
        </tbody>
    </table>
    <span v-else>No data</span>
</template>

<style>
    table {
        border: solid greenyellow;
        padding: 2px 2px 2px 2px;
    }
    
    thead {
        background-color: aquamarine;
        color: rgb(142, 142, 142);
        font-size: large;
    }

    tbody {
        background-color: antiquewhite;
    }


    th {
        height: 8ch;
        width: 30ch;
    }
    .arrow {
        display: inline-block;
        vertical-align: middle;
        color: black;
        margin-left: 5px;
        width: 0;
        height: 0;
        opacity: 0.66;
    }

    .arrow.asc {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-bottom: 8px solid #ee4040;
    }

    .arrow.dsc {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid #ee4040;
    }

    .active {
        color: black;
    }

</style>