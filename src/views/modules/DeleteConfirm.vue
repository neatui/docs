<template>
  <div class="layer-dialog">
    <div class="fekit-layer-close" @click="cancel"></div>
    <div class="ac ny-sl-sub">
      <slot><div>删除后将不可恢复，你确定要删除这条内容吗？</div></slot>
      <div ui-flex="row cm" class="mx-sm-sub">
        <button ui-btn="@a read :border" @click="LayerById('DeleteConfirm').hide()">我再想想</button>
        <button ui-btn="@a risk" @click="confirm">确定删除</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { LayerById } from '@/components/Layer.vue';

  const emit = defineEmits(['confirm', 'cancel']);
  // 确认
  const confirm = () => {
    LayerById('DeleteConfirm').hide();
    emit('confirm', LayerById('DeleteConfirm').params);
  };
  // 取消
  const cancel = () => {
    LayerById('DeleteConfirm').hide();
    emit('cancel', LayerById('DeleteConfirm').params);
  };
</script>
