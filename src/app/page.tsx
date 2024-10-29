'use client'
import s from './page.module.css'
import { MutableRefObject, useEffect, useRef } from 'react'

const TrillionWidget = () => {
      const widgetRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

      useEffect(() => {
            createWidget().then()
      }, [])

      async function createWidget() {
            const widget = await import(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                'https://sdk.trillion.jewelry/widget/0.39.6/trillion-widget.js'
                )
            const trillionWidget = new widget.TrillionWidgetApp()
            trillionWidget.init(widgetRef.current)
            trillionWidget.setJewelryID('ring_demo_store')
            trillionWidget.refresh()

            // eslint-disable-next-line @typescript-eslint/no-unsafe-return
            return trillionWidget
      }

      return <div className={s.wrap} ref={widgetRef} />
}

export default TrillionWidget
