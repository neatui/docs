import Layer from './Layer.vue';
const LayerById = (id: any) => {
  return (window as any)._FEKIT_LAYER_TASKS[id];
};
export { Layer, LayerById };
