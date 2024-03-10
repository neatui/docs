<template>
  <div class="bg-fore r-sm nx-lm ny-mm mob:nx-ms mob:ny-sl mb-lm-sub" ui-flex="row xy">
    <div class="flex-block nr-ls">
      <slot></slot>
    </div>
    <div class="flex-fixed w-lm nl-ls" ui-hide="<dpc">
      <slot name="navs"></slot>
    </div>
  </div>
</template>
