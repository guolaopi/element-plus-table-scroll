# element-plus-table-scroll
Directive for add scroll-load support for element plus's table component.

# Usage
```vue
<template>
    <el-table v-ScrollLoad="scrollLoad"/>
</template>

<script setup>
function scrollLoad(e){
    // e is HTMLElemnt
    // do something here..
}
</script>
```