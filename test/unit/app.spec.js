describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: "Jack", age: 20, course: 'adults'
            });
        });
        it('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('Jack', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
            expect(app.assignToSwimmingCourse('Michael','12/05/2002')).toEqual({
                name: 'Michael', age: 13, course:'teens'
            });
        });

    });

    describe('calculateArea', function(){
         it('should return false if some of arguments are incorrect', function(){
                     expect(app.calculateArea("aaa", 2, 1, "aa", "aaa")).toEqual(false);
         });

         it ('should return Big null if area equal 0', function () {
                     expect (answer.calculateArea (0, 0, 0, "aaa", "aaa")).toEqual ({
                                   area: 0,message: 'Big null'
                            });

         });
         it ('should return message error if area is less than 0', function () {
                            expect (answer.calculateArea (4, 1, 6, "aaa", "aaa")).toEqual ({area: -6, message: 'aaa'});
         });
         it ('should return message error if area is equal 1', function () {
                      expect (answer.calculateArea (5, 2, 2, "aaa", "aa")).toEqual ({area: 1, message: 'aa'});
         });

    });
});


