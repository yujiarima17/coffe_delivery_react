import { useFormContext } from 'react-hook-form'
import { Header, Container } from '../../styles'
import { MapPinLine } from 'phosphor-react'
import axios from 'axios'
import {
  DeliveryForm,
  DeliveryFormInput,
  DeliveryFormInput2,
  AddressContinuedInput,
} from './styles'
import { useState } from 'react'
import { OrderData } from '../../../../../../validator/Order'

export function AddressForm() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext()
  const cepField = watch('cep')
  const [addressData, setAddressData] = useState<OrderData>()
  function getAdressDataByCEP(CEP: string) {
    const baseURl = `https://viacep.com.br/ws/${CEP}/json/`
    try {
      axios.get(baseURl).then((response) => setAddressData(response.data))
    } catch (e) {
      console.log(e)
    }
    setValue('logradouro', addressData.logradouro)
    setValue('bairro', addressData.bairro)
    setValue('localidade', addressData.localidade)
    setValue('uf', addressData.uf)
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
      <DeliveryForm>
        <DeliveryFormInput
          id="CEP"
          $width="200px"
          placeholder="CEP"
          {...register('cep', {
            onBlur: () => getAdressDataByCEP(cepField),
          })}
          // onBlur={getAdressDataByCEP(cepField)}
        />
        <DeliveryFormInput
          id="RUA"
          $width="560px"
          placeholder="Rua"
          {...register('logradouro', { required: true })}
        />
        <section>
          <DeliveryFormInput
            id="NUMERO"
            $width="200px"
            placeholder="Número"
            {...register('numero', { required: true })}
          />
          <AddressContinuedInput>
            <DeliveryFormInput2
              id="COMPLEMENTO"
              $width="348px"
              {...register('complemento')}
              placeholder="Complemento"
            />
            <span>Opcional</span>
          </AddressContinuedInput>
        </section>
        <section>
          <DeliveryFormInput
            id="BAIRRO"
            $width="200px"
            placeholder="Bairro"
            {...register('bairro', { required: true })}
          />
          <DeliveryFormInput
            id="CIDADE"
            $width="276px"
            placeholder="Cidade"
            {...register('localidade', { required: true })}
          />
          <DeliveryFormInput
            id="UF"
            $width="60px"
            placeholder="UF"
            {...register('uf', { required: true })}
          />
        </section>
      </DeliveryForm>
    </Container>
  )
}
