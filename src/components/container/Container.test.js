import { mount } from '@vue/test-utils';
import { expect, test, describe } from 'vitest';
import Container from './Container.vue';

const factory = ({ props }) => mount(Container, {
  slots: {
    default: '<div> Main Content </div>',
  },
});
describe('Container', () => {
  test('should mount correctlly', () => {
    const wrapper = factory({ props: {} });
    expect(wrapper.vm).toBeTruthy();
  });
  test('should contain default slot', () => {
    const wrapper = factory({ props: {} });
    expect(wrapper.html()).toContain('<div> Main Content </div>');
  });
});
