import { by, device, expect, element } from 'detox';
import {it, describe, beforeAll, beforeEach} from '@jest/globals';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have Home screen', async () => {
    await expect(element(by.id('custom-container-id'))).toBeVisible();
  });

  it('should navigate Details screen', async () => {
    await expect(element(by.id('bottom-tab-detalles'))).toBeVisible();
    await expect(element(by.id('bottom-tab-inicio'))).toBeVisible();

    await element(by.id('bottom-tab-detalles')).tap();

    await expect(element(by.id('custom-container-id'))).toBeVisible();

    await expect(element(by.text('Dependencies'))).toBeVisible();
    await expect(element(by.text('This project uses the following dependencies:')))
      .toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    await element(by.id('bottom-tab-inicio')).tap();
    await expect(element(by.text('Dependencias'))).not.toExist();
    await expect(element(by.text('Las dependencias más importantes con las que se construyó este proyecto con son:')))
      .not.toExist();
  });
});
