import { shallow } from 'enzyme';
import CounterApp from '../components/CounterApp';
describe('Pruebas en el counter App', () => {
  test('Mostrar el componente <CounterApp /> de manera correcta', () => {
    const wraper = shallow(<CounterApp value={10} />);
    expect(wraper).toMatchSnapshot();
  });
  test('Mostrar un valor por defecto de 100', () => {
    const wraper = shallow(<CounterApp value={100} />);
    const counterText = wraper.find('h2').text().trim();
    expect(counterText).toBe('100');
  });
});
