import { validateResponseData } from "common/api/validation"
import { FactResponse } from "common/types"

export const fetchFact = async () => {
  const fact = validateResponseData<FactResponse>({
    url: 'fact',
    propertyName: ['fact'],
  })  
  return fact
}