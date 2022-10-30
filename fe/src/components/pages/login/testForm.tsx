import { useEffect } from 'react'
import {
  useForm,
  SubmitHandler,
  Controller,
  useFormContext,
  FormProvider,
  useController,
  FieldValues,
  useWatch,
  Control,
} from 'react-hook-form'
import { FormField } from 'src/components/atoms/form/FormField'
import { TextInput } from 'src/components/atoms/form/TextInput'
// import { FormValues } from './LoginForm'
// import { TestFormField } from './testFormField'

type TestFormProps = {
  name: string
  control: Control
}

export const TestForm = ({ name, control }: TestFormProps) => {
  // NOTE: useFormContextはFormProviderでラップされていないと呼べない
  const { getValues } = useFormContext()

  const test_form_watch = useWatch({ name, control })
  console.log('test_form_watch:', test_form_watch)

  const email_watch = useWatch({ name: 'email', control: control })
  console.log('testformでemail_watch', email_watch)

  useEffect(() => {
    console.log("TestFormでgetValues('test_form')useeffect：", getValues())
  }, [])
  console.log("TestFormでgetValues('test_form')：", getValues())

  return (
    <FormField label="テストフォーム" className="mt-10">
      <Controller
        name={name}
        control={control}
        defaultValue="111"
        render={({ field: { onChange, value }, fieldState, formState }) => {
          console.log('test_formがrenderされた')
          // console.log('valueを表示', value)
          // console.log('fieldStateを表示', fieldState)
          // console.log('formStateを表示', formState)
          return <TextInput onChange={onChange} value={value} />
        }}
      />
      {/* <TestFormField />s */}
    </FormField>
  )
}
