import { shallowMount } from '@vue/test-utils';
import MyTest from '@/components/MyTest.vue';

describe('MyTest.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(MyTest, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
