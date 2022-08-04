// 滚动条选择器
const scrollSelector = ".el-scrollbar__wrap.el-scrollbar__wrap--hidden-default";

export const vScrollLoad = {
    mounted(el, binding) {
        el?.querySelector(scrollSelector)?.addEventListener(
            "scroll",
            binding.value
        );
    },
    unmounted(el, binding) {
        el?.querySelector(scrollSelector)?.removeEventListener(
            "scroll",
            binding.value
        );
    },
};
