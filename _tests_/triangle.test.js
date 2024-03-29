import { TestScheduler } from 'jest';
import Triangle from './../src/triangle.js';

describe('Triangle', () => {

    test('should correctly create a triangle object with  three lengths', () => {
        const triangle = new Triangle(2,4,5);
        expect(triangle.side1).toEqual(2);
        expect(triangle.side2).toEqual(4);
        expect(triangle.side3).toEqual(5);
    });

    test('should correctly determine whether three lengths are not a triangle', () => {
        const notTriangle = new Triangle(3,9,22);
        expect(notTriangle.checkType()).toEqual("not a triangle");
      });

      Triangle.prototype.checkType = function() {
        if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
          return "not a triangle";
        } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
          return "scalene triangle";
        } else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
            return "equilateral triangle";
        } else {
          return "isosceles triangle";
        }
      };

      
});
