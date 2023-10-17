import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";

describe('Sidebar.test', () => {
    test('Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar toggle', () => {
        renderWithTranslation(<Sidebar />);
        const button = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(button);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});