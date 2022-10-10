import type { ComponentMeta } from '@storybook/react'

import EnterPage from './EnterPage'

export const generated = () => {
  return <EnterPage />
}

export default {
  title: 'Pages/EnterPage',
  component: EnterPage,
} as ComponentMeta<typeof EnterPage>
