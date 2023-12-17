export type HelperProps = {
  url: string;
};

export interface ValidateMultipleResponseDataProps<ResponseType>
  extends HelperProps {
  propertyName: (keyof ResponseType)[];
}