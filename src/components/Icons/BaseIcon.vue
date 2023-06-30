<template>
  <svg
    :width="width"
    :height="height"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_1164_57263"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      :width="width"
      :height="height"
    >
      <rect y="0.522461" :width="width" :height="height" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1164_57263)">
      <path
        :d="iconStyle"
        :fill="isHover ? iconHoverColor : iconColor"
        @mouseover="isHover = true"
        @mouseout="isHover = false"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "OverviewIcon",
  props: {
    iconStyle: {
      type: String,
      default:
        "M13.25 9.52244V4.02246H20.5V9.52244H13.25ZM3.5 13.0224V4.02246H10.75V13.0224H3.5ZM13.25 21.0224V12.0225H20.5V21.0224H13.25ZM3.5 21.0224V15.5224H10.75V21.0224H3.5ZM4.99997 11.5224H9.25V5.52244H4.99997V11.5224ZM14.75 19.5224H19V13.5224H14.75V19.5224ZM14.75 8.02246H19V5.52244H14.75V8.02246ZM4.99997 19.5224H9.25V17.0224H4.99997V19.5224Z",
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
    iconHoverColor: {
      type: String,
      default: "currentColor",
    },
    width: {
      type: String,
      default: "24",
    },
    height: {
      type: String,
      default: "25",
    },
  },
  data() {
    return {
      isHover: false,
    };
  },
};
</script>
