import 'twin.macro'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { TextInput } from 'src/components/atoms/form/TextInput'
import { FormField } from 'src/components/atoms/form/FormField'
import { Button } from 'src/components/atoms/button/Buttons'

type FormValues = {
  email: string
  password: string
}

export const LoginFrom = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: { email: '', password: '' },
  })
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    console.log('datas:', data)
  return (
    <div tw="p-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField label="メールアドレス">
          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput value={value} onChange={onChange} />
            )}
          />
        </FormField>
        <FormField label="パスワード" className="mt-10">
          <Controller
            name="password"
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextInput onChange={onChange} value={value} />
            )}
          />
        </FormField>
        <div tw="flex justify-center mt-10">
          <Button
            type="green"
            title="ログイン"
            className="w-40"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </div>
  )
}
