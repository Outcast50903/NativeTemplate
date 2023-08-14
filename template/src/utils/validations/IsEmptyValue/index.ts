const isEmptyValue = (value: unknown): boolean => {
  return (
    value === undefined ||
    value === null ||
    Number.isNaN(value) ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};

export default isEmptyValue;
