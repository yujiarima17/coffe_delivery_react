import {
  AdressContinuedInput,
  DeliveryForm,
  DeliveryFormInput,
  DeliveryFormInput2,
} from './styles'
import axios from 'axios'
import { Header, Container } from '../../styles'
import { MapPinLine } from 'phosphor-react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export function AdressForm() {
  const AdressFormValidator = zod.object({
    cep: zod.string(),
    logradouro: zod.string(),
    numero: zod.string(),
    complemento: zod.string(),
    bairro: zod.string(),
    localidade: zod.string(),
    uf: zod.string(),
  })
  type AdressData = zod.infer<typeof AdressFormValidator>

  const [addressData, setAdressData] = useState<AdressData>()

  const adressForm = useForm<AdressData>({
    resolver: zodResolver(AdressFormValidator),
  })
  const { register, watch, handleSubmit } = adressForm
  const cepField = watch('cep')
  function getAdressDataByCEP(CEP: string) {
    const baseURl = `https://viacep.com.br/ws/${CEP}/json/`
    axios.get(baseURl).then((response) => setAdressData(response.data))
  }
  function handleAdressSubmit(data: AdressData) {
    setAdressData(data)
  }
  return (
    <Container>
      <Header>
        <MapPinLine size={22} color="#574F4D" />
        <div className="info">
          <span>Endereço de Entrega</span>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </Header>
      <DeliveryForm onSubmit={handleSubmit(handleAdressSubmit)}>
        <DeliveryFormInput
          id="CEP"
          $width="200px"
          placeholder="CEP"
          {...register('cep', { onBlur: () => getAdressDataByCEP(cepField) })}
          // onBlur={getAdressDataByCEP(cepField)}
        />
        <DeliveryFormInput
          id="RUA"
          value={addressData?.logradouro}
          $width="560px"
          placeholder="Rua"
          {...register('logradouro')}
        />
        <section>
          <DeliveryFormInput
            id="NUMERO"
            $width="200px"
            placeholder="Número"
            {...register('numero')}
          />
          <AdressContinuedInput>
            <DeliveryFormInput2
              id="COMPLEMENTO"
              $width="348px"
              {...register('complemento')}
              placeholder="Complemento"
            />
            <span>Opcional</span>
          </AdressContinuedInput>
        </section>
        <section>
          <DeliveryFormInput
            id="BAIRRO"
            value={addressData?.bairro}
            $width="200px"
            placeholder="Bairro"
            {...register('bairro')}
          />
          <DeliveryFormInput
            id="CIDADE"
            value={addressData?.localidade}
            $width="276px"
            placeholder="Cidade"
            {...register('localidade')}
          />
          <DeliveryFormInput
            id="UF"
            value={addressData?.uf}
            $width="60px"
            placeholder="UF"
            {...register('uf')}
          />
        </section>
      </DeliveryForm>
    </Container>
  )
}
