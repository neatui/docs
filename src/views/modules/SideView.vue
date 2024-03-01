<template>
  <div class="side flex-fixed">
    <div class="side-middle" ui-scroll="x:hidden :y">
      <ul class="side-list n-sl">
        <li v-for="(item, idx) in state.menus" :key="idx" :class="`${item.__active ? 'active' : ''}`" :data-open="item.__open ? 1 : 0">
          <IFollowView pos="rb" event="hover" tipClass="mt-ss">
            <div @click="item.__open = !item.__open">
              <div v-if="item.childPermissions" :ui-flex="`row ${base.side ? 'lm' : 'cm'}`">
                <button v-if="!base.side" class="flex-fixed lh-ss" :ui-btn="`@a l none :square`" ui-flex="col cm">
                  <i :class="`fs-ms icon ${item.htmlIcon}`"></i>
                  <span class="side-list-item-name-hide ml-no">{{ item.permissionName?.substring(2, 4) }}</span>
                </button>
                <div v-else>
                  <div ui-flex="row cm">
                    <i :class="`fs-ms icon ${item.htmlIcon} mr-ms`"></i>
                    <span class="side-list-item-name">{{ item.permissionName }}</span>
                  </div>
                  <i class="side-list-item-sown icon icon-dropdown"></i>
                </div>
              </div>
              <router-link v-else :to="item.htmlRouting" :ui-flex="`row lm`">
                <button v-if="!base.side" class="flex-fixed lh-ss" :ui-btn="`@a l none :square`" ui-flex="col cm">
                  <i :class="`fs-ms icon ${item.htmlIcon}`"></i>
                  <span class="side-list-item-name-hide">{{ item.permissionName?.substring(2, 4) }}</span>
                </button>
                <span v-else class="side-list-item-name">{{ item.permissionName }}</span>
              </router-link>
            </div>
            <ul v-if="item.childPermissions" class="side-list-tow">
              <li v-for="(sub, idx) in item.childPermissions" :key="idx" :class="`${sub.__active ? 'co-main' : ''}`">
                <router-link :to="sub.htmlRouting">{{ sub.permissionName }}</router-link>
              </li>
            </ul>
            <template v-if="item.childPermissions && !base.side" #tips>
              <ul class="side-list-tow n-ss nowrap">
                <li v-for="(sub, idx) in item.childPermissions" :key="idx" class="ux-hover r-sm nx-sl ny-ss" :class="`${sub.__active ? 'co-main' : ''}`">
                  <router-link :to="sub.htmlRouting">{{ sub.permissionName }}</router-link>
                </li>
              </ul>
            </template>
          </IFollowView>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, reactive } from 'vue';
  import { useBaseStore } from '@/store';
  import { useRoute } from 'vue-router';
  import { IFollowView } from '@neatui/vue';
  const route: any = useRoute();
  const base: any = useBaseStore();

  const state: any = reactive({
    menus: computed(() => {
      return (base.menus || []).map((item: any) => {
        if (route.path === item.htmlRouting) {
          item.__active = 1;
        } else {
          item.__active = 0;
        }
        if (item.childPermissions) {
          let subActive = 0;
          item.childPermissions = item.childPermissions?.map((sub: any) => {
            if (route.path === sub.htmlRouting) {
              sub.__active = 1;
              subActive = 1;
            } else {
              sub.__active = 0;
            }
            return sub;
          });
          item.__active = subActive;
        }
        return item;
      });
    })
  });
</script>
