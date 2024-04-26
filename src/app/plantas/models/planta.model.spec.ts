import { Planta } from './planta.model';

class PlantaClass implements Planta {
  constructor(
    public nombreComun: string,
    public nombre_cientifico: string,
    public tipo: string,
    public altura_maxima: number,
    public clima: string,
    public sustrato_siembra: string
  ) {}
}
describe('PlantaClass', () => {
  it('should create an instance', () => {
    const planta = new PlantaClass(
      'Lengua de vaca',
      'Sansevieria Trifasciata',
      'Interior',
      140,
      'Templado',
      'Tierra orgánica...'
    );
    expect(planta).toBeTruthy();
    expect(planta.nombreComun).toEqual('Lengua de vaca');
    expect(planta.nombre_cientifico).toEqual('Sansevieria Trifasciata');
    expect(planta.tipo).toEqual('Interior');
    expect(planta.altura_maxima).toEqual(140);
    expect(planta.clima).toEqual('Templado');
    expect(planta.sustrato_siembra).toEqual('Tierra orgánica...');
  });
});
