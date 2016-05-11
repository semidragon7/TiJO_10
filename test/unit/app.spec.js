describe('app', function () {
    'use strict';

    var app = window.app;

    describe('assignToSwimmingCourse', function () {
        it('should assign adult person to adult group', function () {
            expect(app.assignToSwimmingCourse('Jack', '10/10/1995')).toEqual({
                name: 'Jack', age: 20, course: 'adults'
            });
            expect(app.assignToSwimmingCourse('Maria', '11/10/1997')).toEqual()({
                name: "Maria", age: 18, course: 'adults'
            });
        });
        xit('should assign person between the ages of 12 - 17 to teens group', function () {
            expect(app.assignToSwimmingCourse('John', '07/10/2001')).toEqual({
                name: 'John', age: 14, course: 'teens'
            });
            expect(app.assignToSwimmingCourse('Bella', '06/04/2002')).toEqual()({
                name: "Bella", age: 13, course: 'teens'
            });
        });
        it('should assign person below 12 to kids group', function () {
            expect(app.assignToSwimmingCourse('Zack', '10/06/2010')).toEqual({
                name: 'Zack', age: 5, course: 'kids'
            });
        });
        it('should ', function(){

        });
    });
    describe('calculateArea', function () {
        it('should return 5 and Success', function () {
            expect(answer.calculateArea(7,2,1,"Success","Error")).toEqual({ area : 5, message : 'Success'});
            expect(answer.calculateArea(1,7,0,"Success","Error")).toEqual({ area : 7, message : 'Success'});
            expect(answer.calculateArea(2,9,3,"Success","Error")).toEqual({ area : 3, message : 'Success'});
            expect(answer.calculateArea(8,2,2,"Success","Error")).toEqual({ area : 4, message : 'Success'});
            expect(answer.calculateArea(3,8,1,"Success","Error")).toEqual({ area : 5, message : 'Success'});
            expect(answer.calculateArea(1,5,0,"Success","Error")).toEqual({ area : 5, message : 'Success'});
            expect(answer.calculateArea(1,1,0,"Success","Error")).toEqual({ area : 1, message : 'Success'});
            expect(answer.calculateArea(5,5,-5,"Success","Error")).toEqual({ area : 30, message : 'Success'});
            expect(answer.calculateArea(8,5,-5,"Success","Error")).toEqual({ area : 33, message : 'Success'});
        });
        it('should return false when arguments age wrong', function(){
            expect(answer.calculateArea("fasd",2,1,"adf","asdf")).toEqual(false);
            expect(answer.calculateArea(2,"fasd",1,"adf","asdf")).toEqual(false);
            expect(answer.calculateArea(2,2,"fasd","adf","asdf")).toEqual(false);
            expect(answer.calculateArea(2,2,2,2,"asdf")).toEqual(false);
            expect(answer.calculateArea(2,2,2,"asdf",2)).toEqual(false);
            expect(answer.calculateArea(2,3,2,"asdf",2)).toEqual(false);
        });
        it('should return area with error message', function(){
            expect(answer.calculateArea(3,8,19,"Success","Error")).toEqual({ area : -49, message : 'Error'});
            expect(answer.calculateArea(3,2,11,"Success","Error")).toEqual({ area : -19, message : 'Error'});
            expect(answer.calculateArea(3,7,9,"Success","Error")).toEqual({ area : -20, message : 'Error'});
            expect(answer.calculateArea(3,9,15,"Success","Error")).toEqual({ area : -36, message : 'Error'});
            expect(answer.calculateArea(3,3,15,"Success","Error")).toEqual({ area : -42, message : 'Error'});
            expect(answer.calculateArea(3,5,15,"Success","Error")).toEqual({ area : -40, message : 'Error'});

        });
        it('should return 0 with message', function(){
            expect(answer.calculateArea(0,0,0,"Success","Error")).toEqual({ area : 0, message : 'Big null'});
        });

    });
});