import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
interface addCoffeData {
    quantity: number
  }
const addCoffeItemValidationSchema = zod.object({
    quantity: zod
      .number()
      .min(1)
      .max(20, 'The maximum number of items is twenty'),
  })
export const addCoffeForm = useForm<addCoffeData>({
    resolver: zodResolver(addCoffeItemValidationSchema),
    defaultValues: {
      quantity: 1,
    },
  })