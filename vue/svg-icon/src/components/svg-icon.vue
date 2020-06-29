<template>
  <div :style="iconStyle">
    <svg
      class="svg-icon"
      width="100%"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g :fill="iconColor">
        <component :is="iconLoader" />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  name: "SvgIcon",
  components: {},
  props: {
    iconType: {
      type: String,
      default: () => null
    },
    iconColor: {
      type: String,
      default: "currentColor"
    },
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    }
  },
  computed: {
    iconLoader() {
      return () => import(`@/components/icons/${this.iconType}.vue`);
    },
    iconStyle() {
      const { width, height } = this;
      return {
        width: `${width}px`,
        height: `${height}px`
      };
    }
  }
};
</script>

<style></style>
