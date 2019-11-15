const request = require('supertest');
const authRouter = require('./auth-router');

const input = {
    username: 'testing',
    password: 'testing'
}

describe('authRouter', () => {
    describe('POST / register', () => {
        it('should return 200 OK', () => {
            request(authRouter)
                .post('/register')
                .send(input)
                .set('Accept', 'application/json')
                .expect(200)
        })

        it('username should match "testing"', () => {
            request(authRouter)
                .post('/register')
                .send(input)
                .set('Accept', 'application/json')
                .expect((res) => {
                    res.body.username.toLowerCase();
                })
                .expect(200, {
                    username: 'testing'
                })
        })
    })

    describe('POST / login', () => {
        test('result contains json format', () => {
            request(authRouter)
                .post('/login')
                .expect('Content-Type', /json/)
        })

        it('token is sent back', () => {
            request(authRouter)
                .post('/login')
                .expect(200, /token/)
        })
    })
})