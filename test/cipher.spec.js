import cipher,  { decode, encode } from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('encode', () => {

    it('should be a function', () => {
      expect(typeof encode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => encode()).toThrow(TypeError);
      expect(() => encode(0)).toThrow(TypeError);
      expect(() => encode(null, [])).toThrow(TypeError);
      expect(() => encode(0, 0)).toThrow(TypeError);
    });

    it('should return "abcdefghijklmnopqrstuvwxyz" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 32', () => {
      expect(encode(cipher.offset=32,cipher.string='ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('abcdefghijklmnopqrstuvwxyz');
    });

    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    /* it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "abcdefghijklmnopqrstuvwxyz" with offset 59', () => {
       expect(encode(59, 'abcdefghijklmnopqrstuvwxyz')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });*/

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    // it('should return " !@" for " !@"', () => {
    //   expect(cipher.encode(33, ' !@')).toBe(' !@');
    // });
  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof decode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => decode()).toThrow(TypeError);
      expect(() => decode(0)).toThrow(TypeError);
      expect(() => decode(null, [])).toThrow(TypeError);
      expect(() => decode(0, 0)).toThrow(TypeError);
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "abcdefghijklmnopqrstuvwxyz" with offset 32', () => {
      expect(decode(32, 'abcdefghijklmnopqrstuvwxyz')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    //
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    /* it('should return "abcdefghijklmnopqrstuvwxyz" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 59', () => {
      expect(decode(59, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('abcdefghijklmnopqrstuvwxyz');
     });
     */

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    // it('should return " !@" para " !@"', () => {
    //   expect(cipher.decode(33, ' !@')).toBe(' !@');
    // });
  });

});
