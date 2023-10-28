import { screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";
import { userEvent } from "@testing-library/user-event";

describe('Counter.test', () => {
    test('check state', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        });
        const user = userEvent.setup();

        await user.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });
    test('increment', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } }
        });
        const user = userEvent.setup();

        await user.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});