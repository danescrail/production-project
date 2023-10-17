import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "shared/ui/Button/Button";
describe('test Button', () => {
    test('Test render Button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test primary theme', () => {
        render(<Button theme={ThemeButton.PRIMARY}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('primary');
        screen.debug();
    });
});
