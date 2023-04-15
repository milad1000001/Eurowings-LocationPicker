import { mount } from '@vue/test-utils';
import { expect, test, describe } from 'vitest';
import InputBox from './InputBox.vue';
import OriginIcon from '../../assets/icons/origin.vue';

const factory = ({ props }) => mount(InputBox, {
  props: { placeHolder: 'Where From ?', id: 'origin' },
  slots: {
    prepend: OriginIcon,
  },
});
describe('InputBox', () => {
  test('should mount correctlly', () => {
    const wrapper = factory({ props: {} });
    expect(wrapper.vm).toBeTruthy();
  });
  test('should set placeholder correctly if pass it in props', () => {
    const wrapper = factory({ props: { placeHolder: 'Where From ?' } });
    const inputContainer = wrapper.find('input');
    expect(inputContainer.attributes().placeholder).toBe('Where From ?');
    expect(inputContainer.attributes()['aria-placeholder']).toBe('Where From ?');
  });
  test('should make sure for equallity in for and id if id set in props', () => {
    const wrapper = factory({ props: { placeHolder: 'Where From ?' } });
    const labelContainer = wrapper.find('label');
    const inputContainer = wrapper.find('input');
    expect(labelContainer.attributes().for).toBe('origin');
    expect(inputContainer.attributes().id).toBe('origin');
    expect(labelContainer.attributes().for).equal(inputContainer.attributes().id);
  });
});
