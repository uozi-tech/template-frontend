import { theme } from 'ant-design-vue'
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context'

export const common: ThemeConfig = {
  token: {
    borderRadius: 6,
    controlHeight: 32,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, \'Noto Sans\', sans-serif, \'Apple Color Emoji\', \'Segoe UI Emoji\', \'Segoe UI Symbol\', \'Noto Color Emoji\'',
    fontSize: 14,
    lineType: 'solid',
    lineWidth: 1,
    sizeUnit: 4,
  },
}

export const light: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBgBase: '#fff',
  },
}

export const dark: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {},
}
