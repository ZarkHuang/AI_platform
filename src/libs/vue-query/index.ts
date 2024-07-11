import type { VueQueryPluginOptions } from '@tanstack/vue-query'

export const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        retry: false,
        // staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  },
}
