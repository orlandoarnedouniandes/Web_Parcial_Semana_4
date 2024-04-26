import { Planta } from './planta.model';

class PlantaClass implements Planta {
  constructor(
    public nombreComun: string,
    public tipo: string,
    public clima: string
  ) {}
}
describe('PlantaClass', () => {
  it('should create an instance', () => {
    const planta = new PlantaClass('Rosa', 'Flor', 'Templado');
    expect(planta).toBeTruthy();
    expect(planta.nombreComun).toEqual('Rosa');
    expect(planta.tipo).toEqual('Flor');
    expect(planta.clima).toEqual('Templado');
  });
});
