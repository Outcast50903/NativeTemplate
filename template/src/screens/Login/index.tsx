import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard } from 'react-native';
import { useMutationLogin } from 'common';
import { Button, Input, Text, View } from 'tamagui';
import * as z from 'zod';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type FormData = z.infer<typeof schema>;

const LoginScreen = () => {
  const {loginMutation: { mutateAsync, isLoading }} = useMutationLogin();
  
  const { control, handleSubmit, formState } = useForm<FormData>({
    mode: 'onChange',
    resolver: async (values) => {
      try {
        schema.parse(values);
        return { values, errors: {} };
      } catch (error) {
        const formErrors = (error as z.ZodError).formErrors.fieldErrors;
        return { values: {}, errors: formErrors };
      }
    },
  });

  const onSubmit = ({ email, password }: FormData) => {
    Keyboard.dismiss()
    mutateAsync({ email: email.toLowerCase(), password })
  };

  return (
    <View flex={1} justifyContent='center' space={4}>
      <Controller
        control={control}
        name="email"
        defaultValue=""
        disabled={isLoading}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Enter your email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value.toLowerCase()}
          />
        )}
      />
      {formState.errors.email && (
        <Text testID='email-error-message' color='red'>{formState.errors.email}</Text>
      )}
      <Controller
        control={control}
        name="password"
        defaultValue=""
        disabled={isLoading}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Enter your password"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry
          />
        )}
      />
      {formState.errors.password && (
        <Text testID='password-error-message' color='red'>{formState.errors.password}</Text>
      )}
      <Button 
        testID='login-button'
        onPress={() => handleSubmit(onSubmit)} 
        disabled={!formState.isValid} 
        backgroundColor={ formState.isValid ? 'purple' : 'gray'}>
          Login
      </Button>
    </View>
  );
}

export default LoginScreen;