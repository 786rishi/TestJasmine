import { calculator } from './calculator';


describe('Calculator Test',()=>{
    it('testing for addition',()=>{
        const result= calculator(1,3,'add');
        expect(result).toBe(4);
    })
    it('testing for sub',()=>{
        const result= calculator(4,3,'sub');
        expect(result).toBe(1);
    })
    it('testing for mul',()=>{
        const result= calculator(1,3,'mul');
        expect(result).toBe(3);
    })
    it('testing for div',()=>{
        const result= calculator(6,3,'div');
        expect(result).toBe(2);
    })
})