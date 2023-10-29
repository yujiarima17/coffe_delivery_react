import * as zod from 'zod'
export const OrderFormValidator = zod.object({
  cep: zod.string(),
  logradouro: zod.string(),
  numero: zod.string(),
  complemento: zod.string(),
  bairro: zod.string(),
  localidade: zod.string(),
  uf: zod.string(),
  amount: zod.number(),
})
export type OrderDataProps = zod.infer<typeof OrderFormValidator>
