import { type Ref } from 'vue'

declare global {
  type AppThemeProviderType = {
    isDarkTheme: Ref<boolean>
    toggleDarkTheme: () => void
  }

  type ModType = {
    id: string
    name: string
    status: boolean
    timestamp: string | null
  }

  type TesterType = {
    data_id: any
    [x: string]: any
    data_id: any
    data_id: any
    status_id: number
    case_no: string
    case_name: string
    case_gender: string
    phone: string
    date_of_submission: string
    report_date: string
    report_id: string
    report_pwd: string
    report_url: string
    data_id: string
  }

  type TesterExportType = Omit<TesterType, 'status_id' | 'report_url'> & {
    status_id: string
    report_url?: string
  }
}

export {}
