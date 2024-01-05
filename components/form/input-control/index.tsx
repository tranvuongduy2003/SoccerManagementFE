import { Input, InputProps, InputGroup, InputLeftAddon, InputLeftElement, InputRightAddon, InputRightElement } from "@chakra-ui/react"
import { FC, ReactNode } from "react"
import { useController } from "react-hook-form"
import { BaseProps, FormControl } from "../form-control"

export interface InputControlProps extends BaseProps {
  type:string
  placeholder:string
  inputProps?: InputProps
  leftAddon?: ReactNode
  rightAddon?: ReactNode
  leftElement?: ReactNode
  rightElement?: ReactNode
}

export const InputControl: FC<InputControlProps> = (props: InputControlProps) => {
  const { type,name, control, label, inputProps, leftAddon, rightAddon,placeholder, leftElement, rightElement,color, ...rest } = props
  const {
    field,
    formState: { isSubmitting }
  } = useController({
    name,
    control,
    defaultValue: inputProps?.defaultValue || ''
  })
  return (
    <FormControl name={name} color={color} control={control} label={label} {...rest}>
      <InputGroup>
        {typeof leftAddon === 'string' ? <InputLeftAddon>{leftAddon}</InputLeftAddon> : leftAddon}
        {typeof leftElement === 'string' ? <InputLeftElement>{leftElement}</InputLeftElement> : leftElement}
        <Input type={type} {...field} id={name} color={color} isDisabled={isSubmitting} {...inputProps} value={field.value ?? ""} placeholder={placeholder}/>
        {typeof rightElement === 'string' ? <InputRightElement>{rightElement}</InputRightElement> : rightElement}
        {typeof rightAddon === 'string' ? <InputRightAddon>{rightAddon}</InputRightAddon> : rightAddon}
      </InputGroup>
    </FormControl>
  )
}

InputControl.displayName = "InputControl"

export default InputControl
