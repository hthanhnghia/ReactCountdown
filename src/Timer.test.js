import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Timer from './Timer';

describe('Timer', () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Timer />, div);
	});

	describe('startTimer', () => {
        it('should set countdown time and start countdown', (done) => {
            const timer = TestUtils.renderIntoDocument(<Timer />);
            timer.state.seconds = 10
            timer.startTimer();

            expect(timer.state.status).toBe('started');
            expect(timer.state.count).toBe(10);

            setTimeout(() => {
                expect(timer.state.count).toBe(9);
                done();
            }, 1001)
        });

        it('should never set countdown time to less than zero', (done) => {
            const timer = TestUtils.renderIntoDocument(<Timer />);
            timer.state.seconds = 1
            timer.startTimer();

            setTimeout(() => {
                expect(timer.state.count).toBe(0);
                done();
            }, 3000)
        });
    });

    describe('pauseTimer', () => {
        it('should start timer when timer is paused', () => {
            const timer = TestUtils.renderIntoDocument(<Timer />);
            timer.state.status = 'paused'
            timer.pauseTimer();
            expect(timer.state.status).toBe('started');
        });

        it('should pause timer when timer is started', () => {
            const timer = TestUtils.renderIntoDocument(<Timer />);
            timer.state.status = 'started'
            timer.pauseTimer();
            expect(timer.state.status).toBe('paused');
        });
    });

    describe('resetTimer', () => {
        it('should clear timer after reset', () => {
            const timer = TestUtils.renderIntoDocument(<Timer />);
            timer.state.seconds = 50
            timer.resetTimer();
            expect(timer.state.seconds).toBe(0);
        });
    });
})
