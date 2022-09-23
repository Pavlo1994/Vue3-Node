export { useHead, useMeta } from '#head';
export { isVue2, isVue3 } from 'vue-demi';
export { useAsyncData, useLazyAsyncData, refreshNuxtData, defineNuxtComponent, useNuxtApp, defineNuxtPlugin, useRuntimeConfig, useState, useFetch, useLazyFetch, useCookie, useRequestHeaders, useRequestEvent, useRouter, useRoute, useActiveRoute, defineNuxtRouteMiddleware, navigateTo, abortNavigation, addRouteMiddleware, throwError, clearError, useError, defineNuxtLink } from '#app';
export { withCtx, withDirectives, withKeys, withMemo, withModifiers, withScopeId, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, computed, customRef, isProxy, isReactive, isReadonly, isRef, markRaw, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, watch, watchEffect, isShallow, effect, effectScope, getCurrentScope, onScopeDispose, defineComponent, defineAsyncComponent, resolveComponent, getCurrentInstance, h, inject, nextTick, provide, useAttrs, useCssModule, useCssVars, useSlots, useTransitionState } from 'vue';
export { usePage } from 'E:/WebProject/nuxt3-edu/composables/usePage';
export { useUser, useRefreshUserInfo, useLogout, useHasAuth, useHandleSupportPost } from 'E:/WebProject/nuxt3-edu/composables/useAuth';
export { useQueryToString, useEnterEvent } from 'E:/WebProject/nuxt3-edu/composables/useUtil';
export { fetchConfig, useHttp, useHttpGet, useHttpPost } from 'E:/WebProject/nuxt3-edu/composables/useHttp';
export { usePostSupportApi, useDeletePostApi } from 'E:/WebProject/nuxt3-edu/apis/bbs';
export { useSearchListApi } from 'E:/WebProject/nuxt3-edu/apis/common';
export { usecourseListApi, useReadCourseApi, useHotCourseListApi } from 'E:/WebProject/nuxt3-edu/apis/course';
export { useIndexDataApi, useGroupDataApi } from 'E:/WebProject/nuxt3-edu/apis/index';
export { useLoginApi, useGetinfoApi, useRegApi, useLogoutApi, useGetCaptchaApi, useBindPhoneApi, useForgetApi, useUserHistoryApi, useOrderListApi, useUserTestApi, useMypostListApi, useUserCouponApi, useMyFavaListApi, useUncollectApi, useUpdateUserInfoApi, useUploadConfig, useUpdatePasswordApi } from 'E:/WebProject/nuxt3-edu/apis/user';
export { definePageMeta } from 'E:/WebProject/nuxt3-edu/node_modules/nuxt/dist/pages/runtime/composables';
export { useLink } from 'vue-router';