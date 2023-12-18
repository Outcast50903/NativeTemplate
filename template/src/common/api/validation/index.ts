import { API } from "..";

import { ValidateMultipleResponseDataProps } from "./types";

export const validateResponseData = async <ResponseType>({
  url,
  propertyName,
}: ValidateMultipleResponseDataProps<ResponseType>) => {
  try {
    let response: ResponseType = {} as ResponseType;

    response = await API.get(url);

    const missingProperties = propertyName.filter(
      prop => response[prop] === undefined && response[prop] !== null,
    );
    if (missingProperties.length === 0) return response;
    else {
      throw new Error(
        `One or more properties (${missingProperties.join(
          ', ',
        )}) not found in the response`,
      );
    }
  } catch (error) {
    console.error(`Error fetching ${String(propertyName)}:`, error);
    console.log('ERROR RESPONSE: ', (error as unknown));
    throw error;
  }
};
