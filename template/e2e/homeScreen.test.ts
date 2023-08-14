import {it, describe, beforeAll, beforeEach} from '@jest/globals';
import { device, element, by } from 'detox';

describe('HomeScreen', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display the correct title', async () => {
    await expect(element(by.text('React-Native Template'))).toBeVisible();
  });

  it('should navigate to the details screen when the button is pressed', async () => {
    await element(by.text('Go to Details')).tap();
    
    await expect(element(by.id('custom-container-id'))).toBeVisible();

    await expect(element(by.text('Dependencies'))).toBeVisible();
    await expect(element(by.text('This project uses the following dependencies:')))
      .toBeVisible();
  });

  it('should display a fact when the API call is successful', async () => {
    await expect(element(by.id('api-fact-id'))).toBeVisible();
  });
});