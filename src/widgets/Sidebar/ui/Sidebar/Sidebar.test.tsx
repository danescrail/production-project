import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";

describe('Sidebar.test', () => {
    test('Sidebar', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar toggle', () => {
        componentRender(<Sidebar />);
        const button = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(button);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});