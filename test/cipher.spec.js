import cipher from '../src/cipher';

describe('cipher', () => {

  it('should be an object', () => {
    expect(typeof cipher).toBe('object');
  });

  describe('cipher.encode', () => {

    it('should be a function', () => {
      expect(typeof cipher.encode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.encode()).toThrow(TypeError);
      expect(() => cipher.encode(0)).toThrow(TypeError);
      expect(() => cipher.encode(null, [])).toThrow(TypeError);
      expect(() => cipher.encode(0, 0)).toThrow(TypeError);
    });

    it('should return "abcdefghijklmnopqrstuvwxyz" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 32', () => {
      expect(cipher.encode(32, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('abcdefghijklmnopqrstuvwxyz');
    });
     it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "abcdefghijklmnopqrstuvwxyz" with offset 59', () => {
      expect(cipher.encode(59, 'abcdefghijklmnopqrstuvwxyz')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
  });

  describe('cipher.decode', () => {

    it('should be a function', () => {
      expect(typeof cipher.decode).toBe('function');
    });

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => cipher.decode()).toThrow(TypeError);
      expect(() => cipher.decode(0)).toThrow(TypeError);
      expect(() => cipher.decode(null, [])).toThrow(TypeError);
      expect(() => cipher.decode(0, 0)).toThrow(TypeError);
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "abcdefghijklmnopqrstuvwxyz" with offset 32', () => {
      expect(cipher.decode(32, 'abcdefghijklmnopqrstuvwxyz')).toBe('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
     it('should return "abcdefghijklmnopqrstuvwxyz" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 59', () => {
       expect(cipher.decode(59, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')).toBe('abcdefghijklmnopqrstuvwxyz');
     });
  });

});