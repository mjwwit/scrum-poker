import { getResponse, postResponse } from './api';


describe('test api calls', () => {
    it('should post a call', async () => {
    window.fetch = jest.fn().mockResolvedValue('')
     
       await postResponse('http://localhost:3000/','hello'),
            expect(window.fetch).toBeCalledWith(expect.anything(), {"body": "\"hello\"", "headers": {"Content-Type": "application/json;charset=utf-8", "Origin": "http://localhost:3000"}, "method": "POST"})
           
    });
    it('should get a call', async () => {
        window.fetch = jest.fn().mockResolvedValue('')

       await getResponse('localhost:3000') 
        expect(window.fetch).toBeCalledWith(expect.anything())
    });
});
