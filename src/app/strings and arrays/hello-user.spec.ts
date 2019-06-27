import { hello } from "./hello-user";


describe('Testing String',()=>{
    it('check for name with message',()=>{
expect(hello('rishi')).toContain('rishi');
    })
})