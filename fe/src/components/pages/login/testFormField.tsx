import {
  useForm,
  SubmitHandler,
  Controller,
  useFormContext,
  FormProvider,
} from 'react-hook-form'
import { FormField } from 'src/components/atoms/form/FormField'
import { TextInput } from 'src/components/atoms/form/TextInput'
import { FormValues } from './LoginForm'

export const TestFormField = () => {
  // NOTE: useFormContextはFormProviderでラップされていないと呼べない
  const { control, getValues } = useFormContext<FormValues>()
  console.log('testfieldformでよびだし', getValues('test_form'))
  return (
    <FormField label="テストフォーム" className="mt-10">
      <Controller
        name="aaa"
        control={control}
        defaultValue={'111'}
        render={({ field: { onChange, value } }) => (
          <TextInput onChange={onChange} value={value} />
        )}
      />
    </FormField>
  )
}
