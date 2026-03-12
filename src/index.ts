/* eslint-disable @typescript-eslint/no-unused-vars */
import { Message, TestFunction } from 'yup'

declare module 'yup' {
  interface Schema<TType, TContext, TDefault, TFlags> {
    testDebounced(
      name: string,
      message: Message,
      callback: TestFunction<TType, TContext>,
      wait?: number
    ): this
  }
}

export default function setup({
  addMethod,
  mixed,
}: typeof import('yup')): void {
  addMethod(
    mixed,
    'testDebounced',
    function (
      name: string,
      message: Message,
      callback: (value: any, context: any) => any,
      wait = 500
    ) {
      let value: any = null
      let timeout: ReturnType<typeof setTimeout> | null = null

      const getDebouncedValue = async (val: any) =>
        new Promise((resolve) => {
          if (timeout) {
            clearTimeout(timeout)
          }
          value = val
          timeout = setTimeout(() => {
            resolve(value)
          }, wait)
        })

      return this.test(name, message, async (val: any, ctx: any) => {
        const debouncedValue = await getDebouncedValue(val)
        return callback(debouncedValue, ctx)
      })
    }
  )
}
