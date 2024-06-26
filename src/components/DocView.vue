<template>
  <div class="bg-fore nx-lm ny-mm mob:nx-ms mob:ny-sm" ui-flex="row xy">
    <div class="flex-block mb-mm-sub">
      <slot></slot>
    </div>
    <div class="flex-fixed w-lm nl-ls" ui-hide="<dpc">
      <slot name="navs"></slot>
    </div>
  </div>
</template>
