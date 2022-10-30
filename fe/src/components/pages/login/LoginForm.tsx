import 'twin.macro'
import {
  useForm,
  SubmitHandler,
  Controller,
  useFormContext,
  FormProvider,
  FieldValues,
  useWatch,
} from 'react-hook-form'
import { TextInput } from 'src/components/atoms/form/TextInput'
import { FormField } from 'src/components/atoms/form/FormField'
import { Button } from 'src/components/atoms/button/Buttons'
import { postSigninUser } from 'src/utils/api/api'
import { TestForm } from './testForm'
import { useEffect } from 'react'

// export type FormValues = {
//   email: string
//   password: string
//   test_form: string
//   aaa: string
// }

export const LoginFrom = () => {
  // const { handleSubmit, control } = useForm<FormValues>({
  //   defaultValues: { email: '', password: '' },
  // })

  const methods = useForm<FieldValues>({
    defaultValues: {
      email: 'test',
      password: '',
      test_form: 'test_form',
      // test_form2: 'bbb',
    },
  })
  // const { setValue, getValues } = useFormContext()
  // console.log(getValues('email'))

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('datas:', data)
    // const res = await postSigninUser(data)
    // console.log('res：', res)
  }

  useEffect(() => {
    console.log('formState', methods.formState)
  }, [methods])

  console.log('getValue(email):', methods.getValues('email'))

  const email_watch = useWatch({ name: 'email', control: methods.control })
  console.log('email_watch', email_watch)

  return (
    <div tw="p-8">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormField label="メールアドレス">
            {/* <input name="not_controlled" /> */}

            <Controller
              name="email"
              control={methods.control}
              defaultValue="aiu"
              render={({ field: { onChange, value } }) => {
                console.log('emailがrenderされた')
                return <TextInput value={value} onChange={onChange} />
              }}
            />
          </FormField>
          <FormField label="パスワード" className="mt-10">
            <Controller
              name="password"
              control={methods.control}
              render={({ field: { onChange, value } }) => {
                console.log('passwordがrenderされた')
                return <TextInput onChange={onChange} value={value} />
              }}
            />
          </FormField>
          {/* <TestForm name="test_form" control={methods.control} /> */}
          {/* <Controller
            // name={name}
            name="test_form2"
            // control={control}
            defaultValue={'test_form2'}
            render={({ field: { onChange, value }, fieldState, formState }) => {
              console.log('valueを表示', value)
              console.log('fieldStateを表示', fieldState)
              console.log('formStateを表示', formState)
              return <TextInput onChange={onChange} value={value} />
            }}
          /> */}
          <div tw="flex justify-center mt-10">
            <Button
              type="green"
              title="ログイン"
              className="w-40"
              onClick={methods.handleSubmit(onSubmit)}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
