import { shallow } from 'enzyme';
import CounterApp from '../components/CounterApp';

describe('Pruebas en el counter App', () => {
  let wraper;
  beforeEach(() => {
    wraper = shallow(<CounterApp value={10} />);
  });
  test('Mostrar el componente <CounterApp /> de manera correcta', () => {
    expect(wraper).toMatchSnapshot();
  });
  test('Mostrar un valor por defecto de 100', () => {
    const wraper = shallow(<CounterApp value={100} />);
    const counterText = wraper.find('h2').text().trim();
    expect(counterText).toBe('100');
  });
  test('Debe de incrementar en cada click', () => {
    wraper.find('button').at(0).simulate('click');
    const counterText = wraper.find('h2').text().trim();
    expect(counterText).toBe('11');
  });
  test('Debe de decrementar en cada click', () => {
    wraper.find('button').at(2).simulate('click');
    const counterText = wraper.find('h2').text().trim();
    expect(counterText).toBe('10');
  });
  test('Debe de resetear el valor al original', () => {
    wraper.find('button').at(0).simulate('click');
    wraper.find('button').at(1).simulate('click');
    const counterText = wraper.find('h2').text().trim();
    expect(counterText).toBe('10');
  });
});
