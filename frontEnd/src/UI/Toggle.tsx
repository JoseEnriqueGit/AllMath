import { useState } from 'react'
import { Switch } from '@headlessui/react'

function Toggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-gray-200' : 'bg-gray-800'
      } relative inline-flex h-6 w-11 items-center rounded-lg`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-lg bg-slate-600 transition`}
      />
    </Switch>
  )
}
export default Toggle;